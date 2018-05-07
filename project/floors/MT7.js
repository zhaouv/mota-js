main.floors.MT7=
{
"floorId": "MT7",
"title": "迷境 0+",
"name": "0+",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [151,  0,  7,  0,  7,151,  0,  0,  7,  0,  7,  0,151],
    [  7,  0,151,151,  0,151,  0,151,151,  0,151,  7,  0],
    [  0,151,151,  0,  0,  7,151,151,  7,  0,151,  0,151],
    [  7,  0,151,151,151,  0,  7,  0,  0,151,151,151,  0],
    [  0,  7,  0,  0,  0,151,151,  0,  7,  0,  0,  7,  0],
    [151,151,151,  7,151,151,229,151,151,  7,151,151,151],
    [ 89,  0,  7,  0,  0,151,  0,151,  0,  0,  7,151, 89],
    [  0,151,151,  7,151,  0,  7,151,  7,151,  0,151,  0],
    [  7,151,  0,  0,151,  0,151,  0,  0,151,151,151,  0],
    [  0,151,151,151,151,151,151,  7,151,151,  0,151,  0],
    [  0,  7,  0,151,  7,  0,  7,  0,  7,  0,  7,151,  0],
    [151,151,  0,  7,  0,151,151,151,151,151,151,151,  0],
    [  0,  7,  0,151,  0,151, 89,  0,  0,  0,  0,  0,  0]
],
"firstArrive": [],
"events": {
    "0,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt67_7';teleport('mt67',6);\n}"
        }
    ],
    "12,6": [
        {
            "type": "function",
            "function": "function(){\nif(core.getFlag('deadNum').swordsman>=1){\n\tvar _id='mt78_7';teleport('mt78',8);\n}else{\n\tcore.insertAction('需要击败吸血鬼或双手剑士');\n}\n}"
        }
    ],
    "6,12": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt47_7';teleport('mt47',4);\n}"
        }
    ],
    "3,6": null,
    "2,6": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "3,5": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "3,7": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "0,8": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "1,10": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "1,12": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "3,11": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "4,10": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "1,4": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "0,3": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "0,1": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "2,0": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "4,0": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "5,2": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "6,3": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "8,0": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "8,2": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "8,4": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "10,0": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "11,1": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "11,4": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "6,10": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "7,9": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "8,10": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "8,7": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "9,5": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "10,6": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "10,10": [
        {
            "type": "function",
            "function": "function(){teleport();}"
        }
    ],
    "6,7": [
        {
            "type": "function",
            "function": "function(){\nteleport();\n}"
        }
    ],
    "6,5": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.status.hero.flags.hatred>=248",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:te",
                        "value": "1"
                    }
                ],
                "false": []
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    6
                ],
                "direction": "up"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "if",
                "condition": "flag:te",
                "true": [],
                "false": [
                    "\t[hero](被一股奇怪的气息笼罩着...)",
                    {
                        "type": "sleep",
                        "time": 500
                    }
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": "hero"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "battle",
                "id": "blackKing"
            },
            {
                "type": "hide",
                "time": 1000
            },
            {
                "type": "sleep",
                "time": 700
            },
            {
                "type": "if",
                "condition": "flag:te",
                "true": [
                    "True End\n勇士击败了黑衣魔王",
                    {
                        "type": "function",
                        "function": "function(){\nvar perfect = core.getFlag('_isFloorClearPerfect');\nif(perfect[\"MT0\"])core.status.hero.hp+=1000;\nif(perfect[\"MT2\"])core.status.hero.hp+=1000;\n}"
                    },
                    {
                        "type": "win",
                        "reason": "True End"
                    }
                ],
                "false": [
                    "\t[blackKing]你以为就这样结束了吗?",
                    "\t[hero](寒意愈发强烈了...)",
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": "hero"
                    },
                    {
                        "type": "sleep",
                        "time": 400
                    },
                    {
                        "type": "showImage",
                        "name": "forshow.png",
                        "loc": [
                            0,
                            0
                        ]
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    {
                        "type": "sleep",
                        "time": 700
                    },
                    {
                        "type": "changePos",
                        "direction": "left"
                    },
                    {
                        "type": "sleep",
                        "time": 700
                    },
                    {
                        "type": "changePos",
                        "direction": "right"
                    },
                    {
                        "type": "sleep",
                        "time": 700
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    {
                        "type": "sleep",
                        "time": 700
                    },
                    "Bad End\n勇士迷失了",
                    {
                        "type": "win",
                        "reason": "Bad End"
                    }
                ]
            }
        ]
    },
    "6,6": null
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}