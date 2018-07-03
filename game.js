////////////////// Game //////////////////
Game=function(){
    this.xsize=6
    this.ysize=6
}

Game.prototype.POINT=1
Game.prototype.EDGE=0
Game.prototype.SCORE=2
Game.prototype.EDGE_USED=-1
Game.prototype.SCORE_PLAYER=[4,8]

Game.prototype.initMap=function(){
    var game=this
    game.winScore=game.ysize*game.xsize
    game.winScore=game.winScore%2?(game.winScore+1)/2:game.winScore/2
    game.map=[]
    for(var jj=0;jj<2*game.ysize+1;jj++){
        var aa=[]
        for(var ii=0;ii<2*game.xsize+1;ii++){
            aa.push((1-(ii+jj)%2)<<((ii%2)*(jj%2)))
            //格点1, 边0, 得分区域2
        }
        game.map.push(aa)
    }
    game.history=[]
}
Game.prototype.setSize=function(xsize,ysize){
    var game=this
    if(xsize)game.xsize=xsize;
    if(ysize)game.ysize=ysize;
    game.initMap()
}
Game.prototype.xy=function(x,y,value){
    var game=this
    if(x<0||x>2*game.xsize)return 'out range';
    if(y<0||y>2*game.ysize)return 'out range';
    if(value==null)return game.map[y][x];
    game.map[y][x]=value
}
Game.prototype.initPlayer=function(){
    var game=this
    game.playerId=0
    game.player=[]
    for(var ii=0;ii<2;ii++){
        game.player.push({
            score:0,
            id:ii,
            changeTurn:function(callback){game.lock=0},
            continueTurn:function(callback){},
            pointer:null,
        })
    }
}
Game.prototype.firstStep=function(callback){
    var game=this
    game.player[game.playerId].changeTurn(callback)
    return game
}

Game.prototype.putxy=function(x,y,callback){
    var game=this
    if(game.lock){
        if(callback)callback(null,'lock');
        return 'lock';
    }
    if(game.xy(x,y)!==game.EDGE){
        if(callback)callback(null,'Invalid click');
        return 'Invalid click';
    }
    game.xy(x,y,game.EDGE_USED)
    game.history.push([x,y,game.playerId])
    // game.changeEdge
    game.changeEdge.forEach(function(f){f(x,y)})
    var directions=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}]
    var score=false
    for(var ii=0,d;d=directions[ii];ii++){
        var xx=x+d.x, yy=y+d.y
        if(game.xy(xx,yy)===game.SCORE){
            var complete = true
            for(var jj=0,dd;dd=directions[jj];jj++){
                var xxx=xx+dd.x, yyy=yy+dd.y
                complete = complete && (game.xy(xxx,yyy)===game.EDGE_USED)
            }
            if(complete){
                score=true
                game.xy(xx,yy,game.SCORE_PLAYER[game.playerId])
                game.player[game.playerId].score++
                // game.changeScore
                game.changeScore.forEach(function(f){f(xx,yy,game.playerId,game.player[game.playerId].score)})
                if(game.player[game.playerId].score>=game.winScore){
                    game.win.forEach(function(f){f(game.playerId)})
                    if(callback)callback('win',null);
                    return 'win'
                }
            }
        }
    }
    if(score){
        game.player[game.playerId].continueTurn(callback)
        return 'continueTurn'
    } else {
        game.playerId=1-game.playerId
        game.changePlayer.forEach(function(f){f(game.playerId)})
        game.player[game.playerId].changeTurn(callback)
        return 'changeTurn'
    }
}
Game.prototype.init=function(xsize,ysize){
    var game=this
    game.lock=1
    game.setSize(xsize,ysize)
    game.initPlayer()
    
    game.changeEdge=[]//function(x,y){}
    game.changeScore=[]//function(x,y,playerId,score){}
    game.changePlayer=[]//function(playerId){}
    game.win=[]//function(playerId){}

    game.win.push(function(playerId){
        game.lock=1
    })

    return game
}

////////////////// gameview //////////////////
gameview={}

gameview.playerColor=['#fbb','#bbf']

gameview.initTable=function(){
    core.resetMap()
    var actions=[]
    for(var ii=1;ii<12;ii+=2){
        for(var jj=1;jj<12;jj+=2){
            actions.push({"type": "setBlock", "number":300+~~(8*Math.random()), "loc": [ii,jj]})
        }
    }
    core.insertAction(actions)
    core.doAction()
}
gameview.xy=function(x,y){return gameview.gamemap.children[y].children[x]}
gameview.printtip=function(tip){
    core.insertAction([{"type": "tip", "text": ""+tip}])
}
gameview.listenTable=function(){

}
gameview.buildTable=function(){
    gameview.initTable()
    gameview.listenTable()
}
gameview.listenGame=function(){
    var game=gameview.game
    var lastedge = null
    game.changeEdge.push(function(x,y){
        //if(lastedge)core.fillRect('fg', 32*lastedge[0]+11, 32*lastedge[1]+11, 10, 10, '#000000');
        //lastedge=[x,y]
        // core.insertAction([
        //     {"type": "setBlock", "number":86, "loc": [x,y]},
        // ])
        core.setBlock(86, x, y)
        core.fillRect('fg', 32*x+11, 32*y+11, 10, 10, '#00FF00');
    })
    game.changeScore.push(function(x,y,playerId,score){
        if(playerId==0){
            var xx=-1
            var bid=1
            var ss="atk"
        } else {
            var xx=13
            var bid=2
            var ss="def"
        }
        /* core.insertAction([
            {"type": "jump", "from": [x,y], "to": [xx,6], "time": 300, "immediateHide": true},
            {"type": "setBlock", "number":bid, "loc": [x,y]},
            {"type": "setValue", "name": "status:"+ss, "value": "status:"+ss+"+1"}
        ]) */
        core.jumpBlock(x,y,xx,6,300,true,function() {
            core.status.hero[ss]+=1
            core.updateStatusBar()
        })
        setTimeout(function(){
            core.setBlock(bid, x, y)
        }, 10);
    })
    game.changePlayer.push(function(playerId){
        core.insertAction([{"type": "tip", "text": playerId==0?"轮到先手":"轮到后手"}])
    })
    game.win.push(function(playerId){
        core.insertAction([
            {"type": "tip", "text": playerId==0?"先手获胜":"后手获胜"}
        ])
    })
}
gameview.init=function(game,hasInited){
    gameview.gamemap = 1
    gameview.gameinfo = 1
    gameview.gametip = 1
    gameview.x = {value:6}
    gameview.y = {value:6}

    core.status.hero.hp=1000
    core.status.hero.atk=0
    core.status.hero.def=0
    core.updateStatusBar()

    gameview.game=game
    if(hasInited){
        gameview.x.value=game.xsize
        gameview.y.value=game.ysize
    } else {
        game.init(~~gameview.x.value,~~gameview.y.value)
    }
    gameview.buildTable()
    gameview.listenGame()
    return gameview
}

////////////////// ReplayController //////////////////
ReplayController=function(){

}

ReplayController.prototype.init=function(game,gameview){
    var rc = this
    rc.game=game
    rc.gameview=gameview
    return rc
}

ReplayController.prototype.replay=function(step,time,callback){
    var rc = this
    var newgame = new Game().init(rc.game.xsize,rc.game.ysize)
    rc.newgame = newgame
    if(step=='last'){
        if(rc.game.history.length>=2){
            var index=rc.game.history.length-2
            var lastplayer=rc.game.history[rc.game.history.length-1][2]
            while(index>0){
                if(rc.game.history[index][2]!==lastplayer)break;
                index--;
            }
            step=index
        } else {
            step=null
        }
    }
    if(step==null)step=rc.game.history.length;
    if(time==null)time=10;
    rc.player1 = new LocalPlayer().init(newgame,rc.gameview)
    rc.player2 = new LocalPlayer().init(newgame,rc.gameview)
    if(rc.gameview){
        var game=newgame
        rc.gameview.init(game,'hasInited')
    }
    var stepfunc=function(cb){
        newgame.lock=1
        var func=function(){
            nowstep=newgame.history.length
            if(nowstep<step){
                newgame.lock=0
                newgame.putxy(rc.game.history[nowstep][0],rc.game.history[nowstep][1])
            } else {
                rc.player1.remove()
                rc.player2.remove()
                newgame.lock=1
                if(callback){
                    callback(newgame,rc.gameview)
                } else {
                    newgame.lock=0
                    player2 = new LocalPlayer().init(newgame,rc.gameview).bind(1)
                    player1 = new LocalPlayer().init(newgame,rc.gameview).bind(0)
                    newgame.firstStep()
                }
            }
        }
        if(time){
            setTimeout(func,time)
        } else {
            func()
        }
    }
    rc.player1.changeTurn=rc.player1.continueTurn=stepfunc
    rc.player2.changeTurn=rc.player2.continueTurn=stepfunc
    rc.player2.bind(1)
    rc.player1.bind(0)
    //newgame.firstStep()
    
    return newgame
}
//gamea=JSON.parse( JSON.stringify(gameview.game));game=new ReplayController().init(gamea,gameview).replay('last',120,null).firstStep()

////////////////// gamefunc //////////////////
initnetworkgame = function(){
    var first2=core.rand(2)
    var game = new Game()
    gameview.init(game)
    player1 = new LocalPlayer().init(game,gameview).bind(1-first2)
    player2 = new NetworkPlayer().init(game,gameview).bind(first2)
}

initlocalgame = function(){
    
    var hard=core.getFlag('hard')
    var first2=core.getFlag('first2')
    if(core.isset(first2)){
        core.setFlag('first2',1-core.getFlag('first2'))
        first2=core.getFlag('first2')
    } else {
        first2=core.rand(2)
        core.setFlag('first2',first2)
        AI2=[null,null,OffensiveKeeperAI,null,LocalPlayer][hard]
        // 0,网络对战,简单AI,中等AI,左右互搏
    }
    var game = new Game()
    gameview.init(game)
    player1 = new LocalPlayer().init(game,gameview).bind(1-first2)
    player2 = new AI2().init(game,gameview).bind(first2)
    game.firstStep()
    actions=[
        (first2==1?'玩家先手':'玩家后手')+(hard==2?'\n中等AI搭建中, 敬请期待!':''),
        {
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
        }
    ]
    core.insertAction(actions)
    game.win.push(function(playerId){
        var actions=[]
        if(playerId==first2)actions.push("\t[你输了]很遗憾，对面抓到了伯伯。");
        if(playerId==1-first2)actions.push("\t[你赢了]抓到了伯伯, 恭喜获胜！");
        var restart = function(){
            initlocalgame()
        }
        actions.push({"type": "function", "function": function(){restart()}})
        //重置游戏并交换先后手
        core.insertAction(actions)
        setTimeout(function(){
            core.doAction()
        }, 100);
    })
}

go = function(){
    var x=core.getFlag('x'), y=core.getFlag('y');
    if(!core.isset(x) || !core.isset(y))return;
    gameview.game.putxy(x,y);
}