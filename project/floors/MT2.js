main.floors.MT2=
{
"floorId": "MT2",
"title": "迷境 +0",
"name": "+0",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [  0,  0,  0,244,153,153,  0,153,153,  0, 89,  0,  0],
    [  0,153,153,  0,153,153,244,  0,  0,244,244,153,153],
    [244,153,153,  0,244,  0,244,  0,153,153,  0,153,153],
    [  0,  0,  0,  0,  0,153,153,244,153,153,  0,  0,  0],
    [ 89,  0,153,153,  0,153,153,  0,  0,  0,  0,  0,153],
    [153,  0,153,153,  0,  0,  0,  0,  0,153,153,  0,153],
    [153,  0,  0,  0,  0,  0,153,153,244,153,153,  0,  0],
    [  0,  0,244,153,153,  0,153,153,  0,  0,  0,244,  0],
    [153,153,  0,153,153,  0,  0,  0,244,  0,153,153,  0],
    [153,153,  0,  0,  0,  0,  0,153,153,  0,153,153,  0],
    [  0,  0,244,  0,153,153,  0,153,153,  0,  0,  0,  0],
    [  0,153,153,  0,153,153,  0,  0,  0,  0,244,153,153],
    [  0,153,153,  0,  0,  0, 89,  0,153,153,  0,153,153]
],
"firstArrive": [
    "消灭所有怪物才能离开,同时攻守+3,迷宫难度下还需要使地形恢复原貌",
    {
        "type": "setValue",
        "name": "status:atk",
        "value": "status:atk+3"
    },
    {
        "type": "setValue",
        "name": "status:def",
        "value": "status:def+3"
    },
    "测试版直接加攻守"
],
"events": {
    "6,12": [
        {
            "type": "if",
            "condition": "isFloorClear()",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nvar _id='mt25_2';teleport('mt25',5);\n}"
                }
            ],
            "false": []
        }
    ],
    "0,4": [
        {
            "type": "if",
            "condition": "isFloorClear()",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nvar _id='mt24_2';teleport('mt24',4);\n}"
                }
            ],
            "false": []
        }
    ],
    "10,0": [
        {
            "type": "if",
            "condition": "isFloorClear()",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nvar _id='mt28_2';teleport('mt28',8);\n}"
                }
            ],
            "false": []
        }
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}