data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"l1",
			"l2",
			"l3",
			"l4",
			"l5",
			"l6",
			"l7",
			"l8"
		],
		"images": [
			"bg.jpg"
		],
		"animates": [
			"hand",
			"sword",
			"zone"
		],
		"bgms": [
			"bgm.mp3"
		],
		"sounds": [
			"floor.mp3",
			"attack.ogg",
			"door.ogg",
			"item.ogg",
			"zone.ogg"
		],
		"startBackground": "bg.jpg",
		"startLogoStyle": "color: black",
		"levelChoose": [
			[
				"探路难度",
				""
			],
			[
				"正常难度",
				"正常"
			]
		],
		"statusLeftBackground": "url(project/images/ground.png) repeat",
		"statusTopBackground": "url(project/images/ground.png) repeat",
		"toolsBackground": "url(project/images/ground.png) repeat"
	},
	"firstData": {
		"title": "逆转",
		"name": "reverse",
		"version": "Ver 0.1",
		"floorId": "l1",
		"hero": {
			"name": "勇士",
			"lv": 1,
			"hpmax": 9999,
			"hp": 100000,
			"atk": 440,
			"def": 620,
			"mdef": 0,
			"money": 0,
			"experience": 0,
			"items": {
				"keys": {
					"yellowKey": 0,
					"blueKey": 0,
					"redKey": 0
				},
				"constants": {
					"book": 1
				},
				"tools": {}
			},
			"flyRange": [],
			"loc": {
				"direction": "right",
				"x": 0,
				"y": 6
			},
			"flags": {
				"poison": false,
				"weak": false,
				"curse": false
			},
			"steps": 0
		},
		"startText": [],
		"shops": [
			{
				"id": "moneyShop1",
				"name": "贪婪之神",
				"icon": "blueShop",
				"textInList": "1F金币商店",
				"use": "money",
				"need": "20+10*times*(times+1)",
				"text": "勇敢的武士啊，给我${need}金币就可以：",
				"choices": [
					{
						"text": "生命+800",
						"effect": "status:hp+=800"
					},
					{
						"text": "攻击+4",
						"effect": "status:atk+=4"
					},
					{
						"text": "防御+4",
						"effect": "status:def+=4"
					},
					{
						"text": "魔防+10",
						"effect": "status:mdef+=10"
					}
				]
			},
			{
				"id": "expShop1",
				"name": "经验之神",
				"icon": "pinkShop",
				"textInList": "1F经验商店",
				"use": "experience",
				"need": "-1",
				"text": "勇敢的武士啊，给我若干经验就可以：",
				"choices": [
					{
						"text": "等级+1",
						"need": "100",
						"effect": "status:lv+=1;status:hp+=1000;status:atk+=7;status:def+=7"
					},
					{
						"text": "攻击+5",
						"need": "30",
						"effect": "status:atk+=5"
					},
					{
						"text": "防御+5",
						"need": "30",
						"effect": "status:def+=5"
					}
				]
			}
		],
		"levelUp": [
			{},
			{
				"need": 20,
				"name": "第二级",
				"effect": "status:hp+=2*(status:atk+status:def);status:atk+=10;status:def+=10"
			},
			{
				"need": 40,
				"effect": "function () {\r\n\t\t\tcore.insertAction(\"恭喜升级！\");\r\n\t\t\tcore.status.hero.hp *= 2;\r\n\t\t\tcore.status.hero.atk += 100;\r\n\t\t\tcore.status.hero.def += 100;\r\n\t\t}"
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redJewel": 3,
		"blueJewel": 3,
		"greenJewel": 5,
		"redPotion": 100,
		"bluePotion": 250,
		"yellowPotion": 500,
		"greenPotion": 800,
		"sword0": 0,
		"shield0": 0,
		"sword1": 10,
		"shield1": 10,
		"sword2": 20,
		"shield2": 20,
		"sword3": 40,
		"shield3": 40,
		"sword4": 80,
		"shield4": 80,
		"sword5": 160,
		"shield5": 160,
		"moneyPocket": 500,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"maxValidHp": null,
		"animateSpeed": 300
	},
	"flags": {
		"enableFloor": false,
		"enableLv": false,
		"enableHPMax": false,
		"enableMDef": false,
		"enableMoney": false,
		"enableExperience": false,
		"enableLevelUp": false,
		"enableDebuff": false,
		"flyNearStair": true,
		"pickaxeFourDirections": false,
		"bombFourDirections": false,
		"bigKeyIsBox": false,
		"equipment": false,
		"enableDeleteItem": true,
		"enableAddPoint": false,
		"enableNegativeDamage": false,
		"hatredDecrease": true,
		"betweenAttackCeil": false,
		"startDirectly": false,
		"canOpenBattleAnimate": false,
		"showBattleAnimateConfirm": true,
		"battleAnimate": true,
		"displayEnemyDamage": true,
		"displayCritical": true,
		"displayExtraDamage": false,
		"enableGentleClick": true,
		"potionWhileRouting": false,
		"enableViewMaps": true,
		"portalWithoutTrigger": true,
		"enableMoveDirectly": true
	}
}