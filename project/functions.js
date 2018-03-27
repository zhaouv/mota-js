functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a = 
{
    "events": {
        "initGame": function () {
	// 游戏开始前的一些初始化操作

	// 根据flag来对道具进行修改
	if (core.flags.bigKeyIsBox)
		core.material.items.bigKey = {'cls': 'items', 'name': '钥匙盒'};
	// 面前的墙？四周的墙？
	if (core.flags.pickaxeFourDirections)
		core.material.items.pickaxe.text = "可以破坏勇士四周的墙";
	if (core.flags.bombFourDirections)
		core.material.items.bomb.text = "可以炸掉勇士四周的怪物";
	if (core.flags.equipment) {
		core.material.items.sword1 = {'cls': 'constants', 'name': '铁剑', 'text': '一把很普通的铁剑'};
		core.material.items.sword2 = {'cls': 'constants', 'name': '银剑', 'text': '一把很普通的银剑'};
		core.material.items.sword3 = {'cls': 'constants', 'name': '骑士剑', 'text': '一把很普通的骑士剑'};
		core.material.items.sword4 = {'cls': 'constants', 'name': '圣剑', 'text': '一把很普通的圣剑'};
		core.material.items.sword5 = {'cls': 'constants', 'name': '神圣剑', 'text': '一把很普通的神圣剑'};
		core.material.items.shield1 = {'cls': 'constants', 'name': '铁盾', 'text': '一个很普通的铁盾'};
		core.material.items.shield2 = {'cls': 'constants', 'name': '银盾', 'text': '一个很普通的银盾'};
		core.material.items.shield3 = {'cls': 'constants', 'name': '骑士盾', 'text': '一个很普通的骑士盾'};
		core.material.items.shield4 = {'cls': 'constants', 'name': '圣盾', 'text': '一个很普通的圣盾'};
		core.material.items.shield5 = {'cls': 'constants', 'name': '神圣盾', 'text': '一个很普通的神圣盾'};
	}


},
        "setInitData": function (hard) {
	// 不同难度分别设置初始属性
	if (hard=='花园') { // 花园难度
        core.setFlag('hard', 1); // 可以用flag:hard来获得当前难度
        // 可以在此设置一些初始福利，比如设置初始生命值可以调用：
        // core.setStatus("hp", 10000);
        // 赠送一把黄钥匙可以调用
        // core.setItem("yellowKey", 1);
    } else { // 迷宫难度
        core.setFlag('hard', 2); // 可以用flag:hard来获得当前难度
    }
	core.setFlag('_isFloorClear',{});
	core.setFlag('deadNum',{});
	core.events.afterLoadData();
},
        "win": function (reason) {
	// 游戏获胜事件 
	core.ui.closePanel();
	var replaying = core.status.replay.replaying;
	core.stopReplay();
	core.waitHeroToStop(function() {
		core.removeGlobalAnimate(0,0,true);
		core.clearMap('all'); // 清空全地图
		core.drawText([
			"\t[恭喜通关]你的分数是${status:hp}。"
		], function () {
			core.events.gameOver(reason||'', replaying);
		})
	});
},
        "lose": function (reason) {
	// 游戏失败事件
	core.ui.closePanel();
	var replaying = core.status.replay.replaying;
	core.stopReplay();
	core.waitHeroToStop(function() {
		core.drawText([
			"\t[结局1]你死了。\n如题。"
		], function () {
			core.events.gameOver(null, replaying);
		});
	})
},
        "afterChangeFloor": function (floorId) {
	// 转换楼层结束的事件
	if (!core.hasFlag("visited_"+floorId)) {
		core.insertAction(core.floors[floorId].firstArrive);
		core.setFlag("visited_"+floorId, true);
	}
},
        "addPoint": function (enemy) {
	// 加点事件
	var point = enemy.point;
	if (!core.flags.enableAddPoint || !core.isset(point) || point<=0) return [];

	// 加点，返回一个choices事件
	return [
		{"type": "choices",
		"choices": [
			{"text": "攻击+"+(1*point), "action": [
				{"type": "setValue", "name": "status:atk", "value": "status:atk+"+(1*point)}
			]},
			{"text": "防御+"+(2*point), "action": [
				{"type": "setValue", "name": "status:def", "value": "status:def+"+(2*point)}
			]},
			{"text": "魔防+"+(12*point), "action": [
				{"type": "setValue", "name": "status:mdef", "value": "status:mdef+"+(12*point)}
			]},
		]
	}
	];
},
        "afterBattle": function (enemyId,x,y,callback) {
	// 战斗结束后触发的事件

	var enemy = core.material.enemys[enemyId];

	// 扣减体力值
	core.status.hero.hp -= core.enemys.getDamage(enemyId);
	if (core.status.hero.hp<=0) {
		core.status.hero.hp=0;
		core.updateStatusBar();
		core.events.lose('battle');
		return;
	}
	// 获得金币和经验
	var money = enemy.money;
	if (core.hasItem('coin')) money *= 2;
	if (core.hasFlag('curse')) money=0;
	core.status.hero.money += money;
	var experience =enemy.experience;
	if (core.hasFlag('curse')) experience=0;
	core.status.hero.experience += experience;
	var hint = "打败 " + enemy.name;
	if (core.flags.enableMoney)
		hint += "，金币+" + money;
	if (core.flags.enableExperience)
		hint += "，经验+" + experience;
	core.drawTip(hint);

	// 删除该块
	if (core.isset(x) && core.isset(y)) {
		core.removeBlock(x, y);
		core.canvas.event.clearRect(32 * x, 32 * y, 32, 32);
	}

	// 毒衰咒的处理
	var special = enemy.special;
	// 中毒
	if (core.enemys.hasSpecial(special, 12) && !core.hasFlag('poison')) {
		core.setFlag('poison', true);
	}
	// 衰弱
	if (core.enemys.hasSpecial(special, 13) && !core.hasFlag('weak')) {
		core.setFlag('weak', true);
		core.status.hero.atk-=core.values.weakValue;
		core.status.hero.def-=core.values.weakValue;
	}
	// 诅咒
	if (core.enemys.hasSpecial(special, 14) && !core.hasFlag('curse')) {
		core.setFlag('curse', true);
	}
	// 仇恨属性：减半
	if (core.flags.hatredDecrease && core.enemys.hasSpecial(special, 17)) {
		core.setFlag('hatred', parseInt(core.getFlag('hatred', 0)/2));
	}
	// 自爆
	if (core.enemys.hasSpecial(special, 19)) {
		core.status.hero.hp = 1;
	}
	// 退化
	if (core.enemys.hasSpecial(special, 21)) {
		core.status.hero.atk -= (enemy.atkValue||0);
		core.status.hero.def -= (enemy.defValue||0);
		if (core.status.hero.atk<0) core.status.hero.atk=0;
		if (core.status.hero.def<0) core.status.hero.def=0;
	}
	// 增加仇恨值
	core.setFlag('hatred', core.getFlag('hatred',0)+core.values.hatred);
	core.updateStatusBar();

	//changed
    floatMap();


	// 事件的处理
	var todo = [];
	// 如果不为阻击，且该点存在，且有事件
	if (!core.enemys.hasSpecial(special, 18) && core.isset(x) && core.isset(y)) {
		var event = core.floors[core.status.floorId].afterBattle[x+","+y];
		if (core.isset(event)) {
			// 插入事件
			core.unshift(todo, event);
		}
	}

	//changed
	var event = findAfterBattleById(enemyId);
	if (core.isset(event)) {
		// 插入事件
		core.unshift(todo, event);
	}

	// 如果有加点
	var point = core.material.enemys[enemyId].point;
	if (core.isset(point) && point>0) {
		core.unshift(todo, core.events.addPoint(core.material.enemys[enemyId]));
	}

	// 如果事件不为空，将其插入
	if (todo.length>0) {
		core.events.insertAction(todo,x,y);
	}

	// 如果已有事件正在处理中
	if (core.status.event.id == null) {
		core.continueAutomaticRoute();
	}
	else {
		core.clearContinueAutomaticRoute();
	}
	if (core.isset(callback)) callback();

},
        "afterOpenDoor": function (doorId,x,y,callback) {
	// 开一个门后触发的事件
	
	var todo = [];
	if (core.isset(x) && core.isset(y)) {
		var event = core.floors[core.status.floorId].afterOpenDoor[x+","+y];
		if (core.isset(event)) {
			core.unshift(todo, event);
		}
	}

	if (todo.length>0) {
		core.events.insertAction(todo,x,y);
	}

	if (core.status.event.id == null) {
		core.continueAutomaticRoute();
	}
	else {
		core.clearContinueAutomaticRoute();
	}
	if (core.isset(callback)) callback();
},
        "afterChangeLight": function (x,y) {
	// 改变亮灯之后，可以触发的事件

},
        "afterPushBox": function () {
	// 推箱子后的事件

	var noBoxLeft = function () {
		// 地图上是否还存在未推到的箱子，如果不存在则返回true，存在则返回false
		for (var i=0;i<core.status.thisMap.blocks.length;i++) {
			var block=core.status.thisMap.blocks[i];
			if (core.isset(block.event) && block.event.id=='box') return false;
		}
		return true;
	}

	if (noBoxLeft()) {
		// 可以通过if语句来进行开门操作
		/*
		if (core.status.floorId=='xxx') { // 在某个楼层
			core.insertAction([ // 插入一条事件
				{"type": "openDoor", "loc": [x,y]} // 开门
			])
		}
		*/
	}
},
        "afterUseBomb": function () {
	// 使用炸弹/圣锤后的事件

	// 这是一个使用炸弹也能开门的例子
	/*
	if (core.status.floorId=='xxx' && core.terrainExists(x0,y0,'specialDoor') // 某个楼层，该机关门存在
		&& !core.enemyExists(x1,y1) && !core.enemyExists(x2,y2)) // 且守门的怪物都不存在
	{
		core.insertAction([ // 插入事件
			{"type": "openDoor", "loc": [x0,y0]} // 开门
		])
	}
	*/

},
        "beforeSaveData": function (data) {
	// 即将存档前可以执行的操作
	//changed
	data.hero.flags.mapsave = core.status.maps;
},
        "afterLoadData": function (data) {
	// 读档事件后，载入事件前，可以执行的操作
	// 可以在这里对怪物数据进行动态修改，详见文档——事件——怪物数据的动态修改
		

    switch (core.getFlag('hard')) {
        case 1: 
        break;

        case 2: 
        break;
    }

    if(core.getFlag('mapsave')){
        core.status.maps = core.getFlag('mapsave');
        core.status.thisMap = core.status.maps[core.status.floorId];
        core.drawMap(core.status.floorId);
        core.drawHero(core.getHeroLoc('direction'), core.getHeroLoc('x'), core.getHeroLoc('y'), 'stop');
        core.updateCheckBlock();
        core.updateFg();
    }

}
    },
    "ui": {
        "drawAbout": function () {
	// 绘制“关于”界面
	if (!core.isPlaying()) {
		core.status.event = {'id': null, 'data': null};
		core.dom.startPanel.style.display = 'none';
	}
	core.lockControl();
	core.status.event.id = 'about';

	core.clearMap('ui', 0, 0, 416, 416);
	var left = 48, top = 36, right = 416 - 2 * left, bottom = 416 - 2 * top;

	core.setAlpha('ui', 0.85);
	core.fillRect('ui', left, top, right, bottom, '#000000');
	core.setAlpha('ui', 1);
	core.strokeRect('ui', left - 1, top - 1, right + 1, bottom + 1, '#FFFFFF', 2);

	var text_start = left + 24;

	// 名称
	core.canvas.ui.textAlign = "left";
	core.fillText('ui', "HTML5 魔塔样板", text_start, top+35, "#FFD700", "bold 22px Verdana");
	core.fillText('ui', "版本： "+core.firstData.version, text_start, top + 80, "#FFFFFF", "bold 17px Verdana");
	core.fillText('ui', "作者： 艾之葵", text_start, top + 112);
	core.fillText('ui', 'HTML5魔塔交流群：539113091', text_start, top+112+32);
	// TODO: 写自己的“关于”页面，每次增加32像素即可
}
    },
    "plugins": {
        "plugin": function () {
	////// 插件编写，可以在这里写自己额外需要执行的脚本 //////

	// 在这里写的代码，在所有模块加载完毕后，游戏开始前会被执行
	console.log("插件编写测试");
	// 可以写一些其他的被直接执行的代码


	// 在这里写所有需要自定义的函数
	// 写法必须是 this.xxx = function (args) { ...
	// 如果不写this的话，函数将无法被外部所访问
	this.test  = function () {
		console.log("插件函数执行测试");
	}

	this.useEquipment = function (itemId) { // 使用装备
		if (itemId.indexOf("sword")==0) {
			var now=core.getFlag('sword', 'sword0'); // 当前装备剑的ID
			core.status.hero.atk -= core.values[now];
			core.setItem(now, 1);
			core.status.hero.atk += core.values[itemId];
			core.setItem(itemId, 0);
			core.setFlag('sword', itemId);
			core.drawTip("已装备"+core.material.items[itemId].name);
		}
		if (itemId.indexOf("shield")==0) {
			var now=core.getFlag('shield', 'shield0');
			core.status.hero.def -= core.values[now];
			core.setItem(now, 1);
			core.status.hero.def += core.values[itemId];
			core.setItem(itemId, 0);
			core.setFlag('shield', itemId);
			core.drawTip("已装备"+core.material.items[itemId].name);
		}
	}
	
	// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();

	//changed
		
	/*
    6 7 8
    0 4 2
    3 1 5
	*/
	
    getBlockInfoById = function(eid,floorId){
        var getfromfloor = function(floorId){
            var blocks = core.status.maps[floorId].blocks;
            for(var ii=0,block;block=blocks[ii];ii++){
                if(JSON.stringify(block).indexOf(eid)!==-1){
                    core.setFlag('infoFloorId',floorId);
                    core.setFlag('infoX',block.x);
					core.setFlag('infoY',block.y);
					core.setFlag('infoBlock',block);
                    return [floorId,block.x,block.y,block];
                }
            }
            return null;
        }
        if(floorId) return getfromfloor(floorId);
        var info;
        for(var floorId in core.status.maps){
            info = getfromfloor(floorId);
            if (info) return info;
        }
        return null;
    }

    teleport = function(tpid,num,floorId) {
        if(!core.isset(tpid)){
            var x=core.status.event.data.x, y=core.status.event.data.y;
            core.insertAction([{"type": "changePos", "loc": [x,y]}]);
            return;
        }
        var str_ = tpid+'_'+num;
        var info = getBlockInfoById(str_,floorId);
        if(!info)return;
        if (core.status.floorId === info[0]) core.insertAction([{
            "type": "changePos", "loc": [info[1], info[2]]}]);
        else core.insertAction([{
            "type": "changeFloor",
            "floorId": info[0], "loc": [info[1], info[2]] }]);
	}
	
    floatMap = function(){
        var a=core.status.maps[core.status.floorId].blocks;
        var direction = {
            'up':{'x':0,y:-1},
            'down':{'x':0,y:1},
            'left':{'x':-1,y:0},
            'right':{'x':1,y:0},
        }[core.getHeroLoc('direction')];
        var near = function(block) {
            var xy = direction.y?'x':'y';
            var r = true;
            r=r && Math.abs( core.getHeroLoc(xy)-block[xy] )>1.5;
            r=r && Math.abs( core.getHeroLoc(xy)-block[xy]+13 )>1.5;
            r=r && Math.abs( core.getHeroLoc(xy)-block[xy]-13 )>1.5;
            return r
        }
        for(var ii in a){
            var block=a[ii];
            if(near(block)){
                block.x=(direction.x+block.x+13)%13;
                block.y=(direction.y+block.y+13)%13;
            }
        }
        core.drawMap(core.status.floorId);
        core.drawHero(core.getHeroLoc('direction'), core.getHeroLoc('x'), core.getHeroLoc('y'), 'stop');
        core.updateCheckBlock();
        core.updateFg();
	}
	/* var  */firstClear = function(floorId){
		if(floorId=="MT0"){
			core.insertAction([
				{"type": "setValue", "name": "status:atk", "value": "status:atk+3"},
				{"type": "setValue", "name": "status:def", "value": "status:def+3"},
				'清空 迷境 -0,攻守+3',
			]);
		}
		if(floorId=="MT2"){
			core.insertAction([
				{"type": "setValue", "name": "status:atk", "value": "status:atk+3"},
				{"type": "setValue", "name": "status:def", "value": "status:def+3"},
				'清空 迷境 +0,攻守+3',
			]);
		}
	}
    isFloorClear = function(floorId){
		return true;
        if(!floorId)floorId=core.status.floorId;
        if(core.getFlag('_isFloorClear')[floorId])return true;
        var hard = core.getFlag('hard');
        var now = JSON.stringify(core.maps.save(core.status.maps,floorId)).replace(/"\d+:f"/g,'0');
        if (hard!=2) {
            if (now.indexOf('169')!==-1)return false;//检查箱子
			core.getFlag('_isFloorClear')[floorId] = now.replace(/[^2]/g,'')==='';//检查怪物
			if(core.getFlag('_isFloorClear')[floorId])firstClear(floorId);
            return core.getFlag('_isFloorClear')[floorId];
        }
        var init = {
            "MT0":"[[0,0,0,0,153,153,0,153,153,0,0,0,0],[0,153,153,0,0,153,0,153,0,0,153,153,153],[0,0,153,153,0,153,0,0,0,0,0,0,153],[153,170,0,0,0,0,0,0,153,0,153,0,0],[153,153,153,0,153,0,153,153,153,0,153,153,0],[0,0,0,0,153,0,0,0,0,0,0,0,0],[153,153,0,153,153,0,153,153,0,153,153,153,0],[153,0,0,0,0,0,153,0,0,170,0,0,0],[153,0,153,153,153,0,153,0,0,0,0,0,0],[0,0,153,0,0,0,0,0,153,0,0,153,153],[153,0,0,0,153,0,153,153,153,0,0,0,153],[153,153,153,0,153,0,0,0,0,0,153,0,153],[0,0,0,0,153,153,0,0,153,153,153,0,0]]",
            "MT2":"[[0,0,0,0,153,153,0,153,153,0,0,0,0],[0,153,153,0,153,153,0,0,0,0,0,153,153],[0,153,153,0,0,0,0,0,153,153,0,153,153],[0,0,0,0,0,153,153,0,153,153,0,0,0],[0,0,153,153,0,153,153,0,0,0,0,0,153],[153,0,153,153,0,0,0,0,0,153,153,0,153],[153,0,0,0,0,0,153,153,0,153,153,0,0],[0,0,0,153,153,0,153,153,0,0,0,0,0],[153,153,0,153,153,0,0,0,0,0,153,153,0],[153,153,0,0,0,0,0,153,153,0,153,153,0],[0,0,0,0,153,153,0,153,153,0,0,0,0],[0,153,153,0,153,153,0,0,0,0,0,153,153],[0,153,153,0,0,0,0,0,153,153,0,153,153]]",
        }[floorId].replace(/\D/g,'');
		core.getFlag('_isFloorClear')[floorId] = now.replace(/\D/g,'')===init;//检查地图是否完全一致
		if(core.getFlag('_isFloorClear')[floorId])firstClear(floorId);
        return core.getFlag('_isFloorClear')[floorId];
	}

	findAfterBattleById = function(enemyId){
		console.log(enemyId)
		var deadNum = core.getFlag('deadNum');
		var eids={

			//-+
			'skeletonCaptain':[4,'蓝血瓶已可以拾取'],
			'zombie':[4,'黄血瓶已可以拾取'],
			'bluePriest':[4,'银剑已可以拾取'],
			'yellowGuard':[4,'银盾已可以拾取'],
			'vampire':[1,'0-区与+-区之间的传送门已打开'],
			//+-
			'blueGuard':[2,'圣盾已可以拾取'],
			'ghostSkeleton':[4,'圣剑已可以拾取'],
			'swordsman':[1,'离开+-区的传送门已打开,++区已经可以进入'],
		};
		if(eids[enemyId]){
			deadNum[enemyId]=~~deadNum[enemyId]+1;
			if(deadNum[enemyId]===eids[enemyId][0])return eids[enemyId][1];
			return eids[enemyId][2];
		}
		return null
	}

}
    }
}