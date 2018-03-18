main.floors.MT0=
{
"floorId": "MT0",
"title": "迷境 -0",
"name": "-0",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [  0,  0,  0,  0,153,153,  0,153,153,  0,  0,  0,  0],
    [  0,153,153,  0,  0,153, 89,153,  0,  0,153,153,153],
    [  0,  0,153,153,  0,153,  0,244,  0,  0,244,  0,153],
    [153,168,  0,  0,  0,  0,  0,169,153,  0,153,  0,  0],
    [153,153,153,244,153,  0,153,153,153,  0,153,153,  0],
    [  0,  0,244,  0,153,  0,  0,  0,  0,  0,244,  0, 89],
    [153,153,  0,153,153,  0,153,153,  0,153,153,153,  0],
    [153,244,  0,  0,  0,  0,153,  0,  0,168,169,  0,  0],
    [153,  0,153,153,153,244,153,  0,244,  0,  0,244,  0],
    [244,  0,153,  0,244,  0,  0,  0,153,244,  0,153,153],
    [153,244,  0,  0,153,  0,153,153,153,  0,  0,  0,153],
    [153,153,153,  0,153,  0,  0,  0,  0,244,153,  0,153],
    [  0,  0,  0,  0,153,153, 89,  0,153,153,153,  0,  0]
],
"firstArrive": [
    "消灭所有怪物才能离开,同时攻守+3,迷宫难度下还需要使地形恢复原貌"
],
"events": {
    "6,12": [
        {
            "type": "if",
            "condition": "isFloorClear()",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nvar _id='mt03_0';teleport('mt03',3);\n}"
                }
            ],
            "false": []
        }
    ],
    "12,5": [
        {
            "type": "if",
            "condition": "isFloorClear()",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nvar _id='mt04_0';teleport('mt04',4);\n}"
                }
            ],
            "false": []
        }
    ],
    "6,1": [
        {
            "type": "if",
            "condition": "isFloorClear()",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nvar _id='mt06_0';teleport('mt06',6);\n}"
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