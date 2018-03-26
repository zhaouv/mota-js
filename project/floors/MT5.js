main.floors.MT5=
{
"floorId": "MT5",
"title": "迷境 +-",
"name": "+-",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [152,  0,  0,  0,  0,  0, 89,  0,  0,  0,  0,  0,152],
    [153,153,153,153,153,  0, 41,  0,153,153,153,153,153],
    [153,212, 31,  0,225,  0,  0,  0,225,  0, 31,212,153],
    [153,  0,153,153,153,153,  0,153,153,153,153,  0,153],
    [153,  0,226, 31, 29,227,  0,222, 27, 31,226,  0,153],
    [  0,  0,153,153,153,153, 31,153,153,153,153,  0,  0],
    [ 89,  0,  0, 28, 32,153,224,153, 32, 29,  0,  0,215],
    [  0,  0,153,153,153,153, 31,153,153,153,153,  0,  0],
    [153,  0,226, 31, 29,222,  0,227, 27, 31,226,  0,153],
    [153,  0,153,153,153,153,  0,153,153,153,153,  0,153],
    [153,212, 31,  0,225,  0,  0,  0,225,  0, 31,212,153],
    [153,153,153,153,153,  0, 42,  0,153,153,153,153,153],
    [152,  0,  0,  0,  0,  0,215,  0,  0,  0,  0,  0,152]
],
"firstArrive": [
    "这一层的物品击败了相应的怪物后才能拾取\n圣剑:鬼战士\n圣盾:中级卫兵"
],
"events": {
    "0,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt15_5';teleport('mt15',1);\n}"
        }
    ],
    "6,0": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt25_5';teleport('mt25',2);\n}"
        }
    ],
    "6,1": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').ghostSkeleton>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('sword4')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "6,11": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').blueGuard>=2",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('shield4')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    }
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 3,
}