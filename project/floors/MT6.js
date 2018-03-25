main.floors.MT6=
{
"floorId": "MT6",
"title": "迷境 -+",
"name": "-+",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [ 57,  0, 32, 32, 32, 32,  0, 34, 34, 34, 34,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,153,213,153,213,153,  0,  0,  0,  0],
    [  0,  0,  0,153,217,153,221,153,217,153,  0,  0,  0],
    [  0,  0,  0,211,153,214,153,214,153,211,  0,  0,  0],
    [  0,  0,  0,153,221,153,208,153,221,153,  0,  0,  0],
    [122,  0,  0,211,153,214,153,214,153,211,  0,  0, 89],
    [  0,  0,  0,153,217,153,221,153,217,153,  0,  0,  0],
    [  0,  0,  0,  0,153,213,153,213,153,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0, 37,  0,  0,  0,  0,  0, 38,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 89,  0,  0,  0,  0,  0,  0]
],
"firstArrive": [
    "这一层的物品击败了相应的怪物后才能拾取"
],
"events": {
    "12,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt67_6';teleport('mt67',7);\n}"
        }
    ],
    "6,12": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt06_6';teleport('mt06',0);\n}"
        }
    ],
    "3,10": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').bluePriest>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('sword2')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "9,10": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').yellowGuard>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('shield2')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "0,6": [
        {
            "type": "choices",
            "text": "\t[神秘商人,woman]以下每个交易各能进行一次",
            "choices": [
                {
                    "text": "地震卷轴（100金币）",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=100",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-100"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:yellowKey",
                                    "value": "item:yellowKey+1"
                                }
                            ],
                            "false": [
                                "\t[神秘商人,woman]",
                                {
                                    "type": "revisit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "神圣盾（50防,200金币）",
                    "action": [
                        {
                            "type": "if",
                            "condition": "status:money>=100",
                            "true": [
                                {
                                    "type": "setValue",
                                    "name": "status:money",
                                    "value": "status:money-100"
                                },
                                {
                                    "type": "setValue",
                                    "name": "item:yellowKey",
                                    "value": "item:yellowKey+1"
                                }
                            ],
                            "false": [
                                "\t[神秘商人,woman]",
                                {
                                    "type": "revisit"
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "给我所有金币和破墙镐,回复10*a+200*b的血量",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "flag:shop_times",
                            "value": "flag:shop_times+1"
                        },
                        "\t[神秘商人,woman]",
                        {
                            "type": "revisit"
                        }
                    ]
                },
                {
                    "text": "离开",
                    "action": [
                        {
                            "type": "exit"
                        }
                    ]
                }
            ]
        },
        {
            "type": "revisit"
        }
    ],
    "2,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').skeletonCaptain>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('bluePotion')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "3,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').skeletonCaptain>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('bluePotion')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "4,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').skeletonCaptain>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('bluePotion')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "5,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').skeletonCaptain>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('bluePotion')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "7,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').zombie>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('yellowPotion')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "8,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').zombie>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('yellowPotion')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "9,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').zombie>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('yellowPotion')\n}"
                    },
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "10,0": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "if",
                "condition": "core.getFlag('deadNum').zombie>=4",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\ncore.getItem('yellowPotion')\n}"
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
"item_ratio": 2,
}