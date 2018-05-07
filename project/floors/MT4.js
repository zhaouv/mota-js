main.floors.MT4=
{
"floorId": "MT4",
"title": "迷境 00",
"name": "00",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [152,152,152,152,152,152, 89,  0,152,  0,  0, 31,  0],
    [152,153,153,153,152,153,153,153,152,152,  0,  0, 31],
    [152,153,152,153,153,153,152,153,153,152,152,  0,  0],
    [152,153,153,152,152,152,152,152,153,  0,152,152,  0],
    [152,152,153,152, 28,152,153, 11,153,153,153,152,152],
    [152,153,153,152,152,153,153,153,152,152,153,153,152],
    [ 89,153,152,152,153,153,128,153,153,152,152,153, 89],
    [  0,153,153,152,152,153,153,153,152,152,153,153,  0],
    [152,152,153,153,153,152,153,152, 27,152,153,152,152],
    [  0,152,152,  0,153,152,152,152,152,152,153,153,152],
    [  0,  0,152,152,153,153,152,153,153,153,152,153,152],
    [ 32,  0,  0,152,152,153,153,153,152,153,153,153,152],
    [  0, 32,  0,  0,152,152, 89,  0,152,152,152,152,152]
],
"firstArrive": [],
"events": {
    "0,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt04_4';teleport('mt04',0);\n}"
        }
    ],
    "6,0": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt47_4';teleport('mt47',7);\n}"
        }
    ],
    "12,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt24_4';teleport('mt24',2);\n}"
        }
    ],
    "6,12": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt14_4';teleport('mt14',1);\n}"
        }
    ],
    "6,6": [
        "\t[hero]看起来是一个迷失了自我的勇士",
        "\t[迷失勇士,child]讨伐...\n迷失...\n支配...",
        {
            "type": "hide",
            "time": 500
        },
        "获得神圣剑,攻击+${core.values.sword5}",
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "status:atk+core.values.sword5"
        }
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 4,
}