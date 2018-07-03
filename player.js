////////////////// GamePlayer //////////////////
GamePlayer=function(){}

GamePlayer.prototype.bind=function(playerId,callback){
    this.playerId=playerId
    this.player=this.game.player[playerId]
    this.player.pointer=this
    var AI=this
    this.player.changeTurn=function(callback){return AI.changeTurn(callback)}
    this.player.continueTurn=function(callback){return AI.continueTurn(callback)}
    //if(this.game.playerId===playerId && !this.game.lock)this.changeTurn(callback);
    return this
}
GamePlayer.prototype.remove=function(){
    var game=this.game
    this.player.changeTurn=function(callback){game.lock=0}
    this.player.continueTurn=function(callback){}
    this.player.pointer=null
    if(game.playerId===this.playerId)game.lock=0;
}
GamePlayer.prototype.init=function(game){
    this.game=game
    return this
}

GamePlayer.prototype.changeTurn=function(callback){
    //this.game.lock=1
    //计算
    //this.game.lock=0
    //this.game.putxy(x,y)
}

GamePlayer.prototype.continueTurn=function(callback){
    //this.game.lock=1
    //计算
    //this.game.lock=0
    //this.game.putxy(x,y)
}

////////////////// LocalPlayer //////////////////
LocalPlayer=function(){
    GamePlayer.call(this)
    return this
}
LocalPlayer.prototype = Object.create(GamePlayer.prototype)
LocalPlayer.prototype.constructor = LocalPlayer

LocalPlayer.prototype.changeTurn=function(callback){this.game.lock=0}
LocalPlayer.prototype.continueTurn=function(callback){this.game.lock=0}

////////////////// NetworkPlayer //////////////////
NetworkPlayer=function(){
    GamePlayer.call(this)
    return this
}
NetworkPlayer.prototype = Object.create(GamePlayer.prototype)
NetworkPlayer.prototype.constructor = NetworkPlayer

NetworkPlayer.prototype.changeTurn=function(callback){this.game.lock=1}
NetworkPlayer.prototype.continueTurn=function(callback){this.game.lock=1}

NetworkPlayer.prototype.init=function(game,gameview){
    this.game=game
    this.gameview=gameview
    return this
}
NetworkPlayer.prototype.bind=function(playerId,callback){
    new GamePlayer().bind.call(this,playerId,callback)
    this.game.lock=1
    var thisplayer = this
    thisplayer.emitPut=function(x,y){
        if(thisplayer.game.playerId===thisplayer.playerId)return;
        thisplayer.socket.emit('put', thisplayer.room, [x,y,thisplayer.playerId]);
    }
    thisplayer.restart=function(playerId){
        var actions=[]
        if(playerId==thisplayer.playerId)actions.push("\t[你输了]很遗憾，对面抓到了伯伯。");
        if(playerId==1-thisplayer.playerId)actions.push("\t[你赢了]抓到了伯伯, 恭喜获胜！");
        actions.push({"type": "break"})
        //重置游戏并交换先后手
        core.insertAction(actions,0,0,function(){
            var newgame = new Game().init(thisplayer.game.xsize,thisplayer.game.ysize)
            if(thisplayer.gameview){
                var game=newgame
                thisplayer.gameview.init(game,'hasInited')
            }
            
            var p1=thisplayer.game.player[1].pointer
            var p2=thisplayer.game.player[0].pointer
            p2.init(newgame,thisplayer.gameview).bind(1)
            p1.init(newgame,thisplayer.gameview).bind(0)

            thisplayer.socket.emit('ready', thisplayer.room)
            if(thisplayer.playerId==-1)return;
            core.insertAction({
                "type": "while",
                "condition": "true",
                "data": [
                    {
                        "type": "autoText",
                        "text": "连接中！\n你当前"+(thisplayer.playerId==1?"先手":"后手")+"。",
                        "time": 1000
                    }
                ]
            })
        })
        setTimeout(function(){
            core.doAction()
        }, 100);
    }
    this.game.changeEdge.push(thisplayer.emitPut)
    if(this.gameview){
        while(this.game.win.length>2)this.game.win.pop();
    }
    this.game.win.push(thisplayer.restart)
    if(!this.room){
        this.queryRoom()
        this.initSocket()
        this.connect()
    }
    return this
}
NetworkPlayer.prototype.remove=function(){
    new GamePlayer().remove.call(this)
    var index = this.game.changeEdge.indexOf(this.emitPut)
    this.game.changeEdge.splice(index,1)
    this.emitPut=null
    var index = this.game.changeEdge.indexOf(this.restart)
    this.game.win.splice(index,1)
    this.restart=null
    this.socket.close()
}

NetworkPlayer.prototype.queryRoom=function(){
    // getinput -> room, 0 for rand match
    var value = prompt("请输入房间号（存在则加入，不存在则建房）。\n也可以直接点取消进入匹配模式。");
    this.room=~~value;
}
NetworkPlayer.prototype.printtip=function(tip){
    console.log(tip)
    if(this.gameview&&this.gameview.gametip){
        this.gameview.printtip(tip)
    }
}

NetworkPlayer.prototype.initSocket=function(){
    urlstr='https://h5mota.com:5050/pencil'
    if(this.gameview && this.gameview.urlstr)urlstr=this.gameview.urlstr;
    var socket = io(urlstr)
    this.socket=socket
    var thisplayer = this
    var printtip = thisplayer.printtip
    var updateBoard = function(board){
        thisplayer.game.history=board
        if(thisplayer.gameview){
            game=new ReplayController().init(thisplayer.game,thisplayer.gameview).replay(null,0,function(newgame,gameview){
                newgame.lock=0
                var player1 = new LocalPlayer().init(newgame,gameview).bind(0)
                var player2 = new LocalPlayer().init(newgame,gameview).bind(1)
                newgame.win=[]
                newgame.firstStep()
            })
            game.win=[]
            game.firstStep()
        }
    }
    var endgame = function(){
        
    }
    var put_down = function(x, y, type){
        thisplayer.game.lock=0
        thisplayer.game.putxy(x,y)
    }

    // start game
    socket.on('start', function(data, room, board) { // data [xsize,ysize,playerId]
        if(data[2]==-1){
            thisplayer.playerId=-1
            thisplayer.game.setSize(data[0],data[1])
        }
        thisplayer.room=room
        if (data[2]>=0) {
            setTimeout(function(){
                //重置游戏
                var newgame = new Game().init(data[0],data[1])
                if(thisplayer.gameview){
                    var game=newgame
                    thisplayer.gameview.init(game,'hasInited')
                }
                var p1=thisplayer.game.player[0].pointer
                var p2=thisplayer.game.player[1].pointer
                if(data[2]!==thisplayer.playerId){ //交换先后手
                    p1.init(newgame,thisplayer.gameview).bind(1)
                    p2.init(newgame,thisplayer.gameview).bind(0)
                } else {
                    p1.init(newgame,thisplayer.gameview).bind(0)
                    p2.init(newgame,thisplayer.gameview).bind(1)
                }
                thisplayer.socket.emit('ready', thisplayer.room)
                core.insertAction([
                    {"type": "break"}
                ],0,0,function(){
                    core.insertAction({
                        "type": "while",
                        "condition": "true",
                        "data": [
                            {
                                "type": "autoText",
                                "text": "连接中！\n你当前"+(data[2]==1?"先手":"后手")+"。",
                                "time": 1000
                            }
                        ]
                    })
                })
            },1000)
        } else {
            core.insertAction(["观战模式", {"type": "break"}])
            // printtip("观战模式")
            updateBoard(board)
        }
    })

    socket.on('ready', function() {
        if (thisplayer.playerId>=0) {
            core.insertAction([
                "开始游戏！\n你当前"+(thisplayer.playerId==1?"先手":"后手")+"。",
                {"type": "break"}
            ],0,0,function(){
                thisplayer.ready()
            })
            // printtip("开始游戏！\n你当前"+(thisplayer.playerId==1?"先手":"后手")+"。")
             //thisplayer.game.lock=thisplayer.playerId==1?0:1
        }
    })

    socket.on('error', function(reason) {
        core.insertAction([
            "\t[错误]"+(reason||"未知错误"),
            {"type": "function", "function": function(){thisplayer.remove();core.restart()}}
        ])
    })

    socket.on('put', function(data) {
        if (data[2]!=thisplayer.playerId && thisplayer.playerId>=0) {
            put_down(data[0], data[1], data[2])
        }
    })

    socket.on('msg', function (data, room) {
        if (data[1]<0 || data[1]!=thisplayer.playerId) { //-1游客 0先手 1后手 2系统
            printtip((data[1]>=0?"对方消息：":data[1]==2?"":"游客消息：")+data[0]);
        }
    })

    socket.on('board', function (board) {
        if (thisplayer.playerId==-1) {
            updateBoard(board);
        }
    })
}
NetworkPlayer.prototype.connect=function(){
    this.socket.emit('join', this.room, [this.game.xsize, this.game.ysize, this.playerId]); // getinput -> room, 0 for rand match
    var printtip = this.printtip
    // printtip("正在等待其他玩家加入，请稍后...")
    core.insertAction({
        "type": "while",
        "condition": "true",
        "data": [
            {
                "type": "autoText",
                "text": "正在等待其他玩家加入，请稍后...\n刷新界面以退出。",
                "time": 1000
            }
        ]
    })
}
NetworkPlayer.prototype.ready=function(){
    this.game.player[0].changeTurn()
    core.insertAction({
        "type": "while",
        "condition": "true",
        "data": [
            {
                "type": "wait"
            },
            {
                "type": "function",
                "function": function(){go()}
            }
        ]
    })
}

////////////////// GreedyRandomAI //////////////////
GreedyRandomAI=function(){
    GamePlayer.call(this)
    return this
}
GreedyRandomAI.prototype = Object.create(GamePlayer.prototype)
GreedyRandomAI.prototype.constructor = GreedyRandomAI

GreedyRandomAI.prototype.rand=function(n){
    if(!n)return Math.random();
    return ~~(n*Math.random())
}

GreedyRandomAI.prototype.xy=function(x,y,value){
    if(x<0||x>2*this.game.xsize)return 'out range';
    if(y<0||y>2*this.game.ysize)return 'out range';
    if(value==null)return this.map[y][x];
    this.map[y][x]=value
}

GreedyRandomAI.prototype.count=function(x,y,number){
    var directions=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}]
    var count=0
    var _cmp=function(a,b){return b.indexOf(a)!==-1}
    if(typeof(number)===typeof(1))_cmp=function(a,b){return a===b};
    for(var ii=0,d;d=directions[ii];ii++){
        var xx=x+d.x, yy=y+d.y
        if(_cmp(this.xy(xx,yy),number))count++;
    }
    return count
}

// game.POINT=1   =>   1000
// game.EDGE=0   =>   [1,10,100] [立刻得分,不得分,差一手得分]
// game.SCORE=2   =>   [10000,10001,10002,10003] 周围边的完成数
// game.EDGE_USED=-1   =>   -100000
// game.SCORE_PLAYER=[4,8]   =>   10004 周围边的完成数
GreedyRandomAI.prototype.initMap=function(){
    var game = this.game
    this.map=JSON.parse(JSON.stringify(game.map))
    this.edgeCount={1:0,10:0,100:0}
    for(var jj=1;jj<2*game.ysize+1;jj+=2){
        for(var ii=1;ii<2*game.xsize+1;ii+=2){
            this.xy(ii,jj,10000+this.count(ii,jj,-1))
        }
    }
    for(var jj=0;jj<2*game.ysize+1;jj++){
        for(var ii=0;ii<2*game.xsize+1;ii++){
            if((ii+jj)%2===0){
                if(ii%2===0)this.xy(ii,jj,1000);
            } else {
                if(this.xy(ii,jj)===-1){
                    this.xy(ii,jj,-100000)
                } else if(this.count(ii,jj,10003)){
                    this.xy(ii,jj,1)
                    this.edgeCount[1]++
                } else if (this.count(ii,jj,10002)) {
                    this.xy(ii,jj,100)
                    this.edgeCount[100]++
                } else {
                    this.xy(ii,jj,10)
                    this.edgeCount[10]++
                }
            }
        }
    }
}

GreedyRandomAI.prototype.getRandWhere=function(number){
    var count=0
    var game=this.game
    for(var jj=0;jj<2*game.ysize+1;jj++){
        for(var ii=0;ii<2*game.xsize+1;ii++){
            if(this.xy(ii,jj)===number)count++;
        }
    }
    if(!count)return 'not exist';
    var index = this.rand(count)+1
    for(var jj=0;jj<2*game.ysize+1;jj++){
        for(var ii=0;ii<2*game.xsize+1;ii++){
            if(this.xy(ii,jj)===number){
                index--;
                if(!index)return {'x':ii,'y':jj}
            }
        }
    }
    return 'error'
}

GreedyRandomAI.prototype.initConnectedRegion=function(){
    var game=this.game
    var visited = eval('['+Array(game.ysize+1).join('['+Array(game.xsize+1).join('false,')+'],')+']') // ysize*xsize的false
    var AI=this;
    var v=function(x,y,value){
        if(x<0||x>2*AI.game.xsize)return true;
        if(y<0||y>2*AI.game.ysize)return true;
        if(AI.xy(x,y)!==10002 && AI.xy(x,y)!==10003)visited[y>>1][x>>1]=true;
        if(value==null)return visited[y>>1][x>>1];
        visited[y>>1][x>>1]=value
    }
    var directions=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}]
    this.connectedRegion={}
    this.connectedRegionKeys=[]
    var stack10003 = []
    for(var y=1;y<2*game.ysize+1;y+=2){
        for(var x=1;x<2*game.xsize+1;x+=2){
            // --x,y-- 
            if(v(x,y))continue;
            var queue=[{'x':x,'y':y}]
            var stack=[]
            while(queue.length){
                var now = queue.shift()
                stack.push(now)
                v(now.x,now.y,true)
                if(this.xy(now.x,now.y)===10003)stack10003.push(stack);
                for(var ii=0,d;d=directions[ii];ii++){
                    var xx=now.x+d.x*2, yy=now.y+d.y*2
                    if(this.xy(now.x+d.x,now.y+d.y)!==100 && this.xy(now.x+d.x,now.y+d.y)!==1)continue;
                    if(v(xx,yy))continue;
                    queue.push({'x':xx,'y':yy})
                }
            }
            var len = stack.length
            if(!this.connectedRegion[len]){
                this.connectedRegionKeys.push(len)
                this.connectedRegion[len]=[stack]
            } else {
                this.connectedRegion[len].push(stack)
            }
            // --x,y-- 
        }
    }
    return stack10003
}

GreedyRandomAI.prototype.minConnectedRegion=function(){
    this.initConnectedRegion()
    var len = Math.min.apply(null,this.connectedRegionKeys)
    var stack = this.connectedRegion[len][0]
    if(len>1)return {'x':(stack[0].x+stack[1].x)/2,'y':(stack[0].y+stack[1].y)/2};
    var directions=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}]
    for(var ii=0,d;d=directions[ii];ii++){
        var xx=stack[0].x+d.x, yy=stack[0].y+d.y
        if(this.xy(xx,yy)===100)return {'x':xx,'y':yy};
    }
}

GreedyRandomAI.prototype.tryKeepOffensive=function(){
    // Greedy不维护先手
    return this.getRandWhere(1)
}

GreedyRandomAI.prototype.where=function(){
    //if(!this.map)this.initMap();
    this.initMap()
    var number = 1
    if(this.edgeCount[1]){number = 1} //有得分块
    else if(this.edgeCount[10]){number = 10} //无法得分且无需让分
    else {number = 100} //需让分
    //
    if(number!==100){
        if(number===1 && this.edgeCount[10]===0){var where = this.tryKeepOffensive()}
        else {var where = this.getRandWhere(number)}
    } else {
        var where = this.minConnectedRegion()
    }
    return where
}

GreedyRandomAI.prototype.changeTurn=function(){
    var thisplayer = this
    thisplayer.game.lock=1
    var where = this.where()
    setTimeout(function(){
        thisplayer.game.lock=0
        thisplayer.game.putxy(where.x,where.y)
    },250)
}
GreedyRandomAI.prototype.continueTurn=function(){
    var thisplayer = this
    thisplayer.game.lock=1
    var where = this.where()
    setTimeout(function(){
        thisplayer.game.lock=0
        thisplayer.game.putxy(where.x,where.y)
    },120)
}

////////////////// OffensiveKeeperAI //////////////////
OffensiveKeeperAI=function(){
    GreedyRandomAI.call(this)
    return this
}
OffensiveKeeperAI.prototype = Object.create(GreedyRandomAI.prototype)
OffensiveKeeperAI.prototype.constructor = OffensiveKeeperAI

OffensiveKeeperAI.prototype.tryKeepOffensive=function(){
    var game=this.game
    if(
        (this.edgeCount[1]===2||this.edgeCount[1]===1) && 
        (this.edgeCount[100]===1||this.edgeCount[100]===0)
    ) return this.getRandWhere(1); // 最后一块不抢先手直接吃掉

    var stack1=[] //存所有能立刻得分的边
    for(var jj=0;jj<2*game.ysize+1;jj++){
        for(var ii=0;ii<2*game.xsize+1;ii++){
            if(this.xy(ii,jj)===1){
                if(this.count(ii,jj,10002)===0 || stack1.length===2)return {'x':ii,'y':jj};
                stack1.push({'x':ii,'y':jj});
            }
        }
    }

    var stack10003 = this.initConnectedRegion()

    // 有剩余的单双块
    if(this.connectedRegion[1] || (this.connectedRegion[2] && this.connectedRegion[2].length>1))return stack1[0];
    if(this.connectedRegion[2] && this.connectedRegion[2].length==1 && this.connectedRegion[2][0]!==stack10003[0])return stack1[0];

    // 两个长条
    if(stack10003.length===2 && (stack10003[0]!==stack10003[1]))return stack1[0];
    // 一个中心部分的两端长条
    if(stack10003.length===2){
        if(stack10003[0].length!==4)return stack1[0];
    }
    // 一个长条
    if(stack10003.length===1){
        if(stack10003[0].length!==2)return stack1[0];
    }

    //让分数拿先手
    var directions=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}]
    for(var jj=0,pt;pt=stack10003[0][jj];jj++){
        for(var ii=0,d;d=directions[ii];ii++){
            var xx=pt.x+d.x, yy=pt.y+d.y
            if(this.xy(xx,yy)===100)return {'x':xx,'y':yy};
        }
    }
    console.log('bug:理论上不应该走到这里')
    return this.getRandWhere(1)
}