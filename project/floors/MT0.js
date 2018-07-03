main.floors.MT0=
{
"floorId": "MT0",
"title": "主塔 0 层",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"cannotViewMap": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86]
],
"firstArrive": [
    {
        "type": "if",
        "condition": "flag:hard==1",
        "true": [
            {
                "type": "trigger",
                "loc": [
                    0,
                    12
                ]
            }
        ],
        "false": [
            {
                "type": "trigger",
                "loc": [
                    2,
                    12
                ]
            }
        ]
    }
],
"events": {
    "0,4": null,
    "0,12": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "changePos",
                "loc": [
                    -1,
                    -1
                ]
            },
            {
                "type": "function",
                "function": "function(){\ninitnetworkgame()\n}"
            }
        ]
    },
    "2,12": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "changePos",
                "loc": [
                    -1,
                    -1
                ]
            },
            {
                "type": "if",
                "condition": "flag:hard==2 && core.getFlag('first2')==null",
                "true": [
                    "\b[up,1,12]中等AI搭建中, 欢迎AI选手发issue约战, \n@ https://github.com/zhaouv/pencil\n\n欢迎加群539113091 (h5魔塔交流群)\n\n网页版zhaouv.top/pencil也可与h5版对战"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:hard==4 && core.getFlag('first2')==null",
                "true": [
                    {
                        "type": "showImage",
                        "name": "pageversion.png",
                        "loc": [
                            16,
                            16
                        ]
                    },
                    "\b[up,1,12]网页版zhaouv.top/pencil有悔棋功能\n\n更方便研究游戏机制"
                ],
                "false": []
            },
            {
                "type": "function",
                "function": "function(){\ninitlocalgame()\n}"
            }
        ]
    }
},
"changeFloor": {
    "0,4": null
},
"afterBattle": {
    "0,4": null
},
"afterGetItem": {
    "0,4": null
},
"afterOpenDoor": {
    "0,4": null
},
"cannotMove": {
    "0,4": null
},
"upFloor": null,
}