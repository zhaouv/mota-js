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
    [  0, 90,  0,244,153,153,  0,153,153,  0, 89,  0,  0],
    [  0,153,153,  0,153,153,244,  0,  0,244,244,153,153],
    [244,153,153,  0,244,  0,244,  0,153,153,  0,153,153],
    [  0,  0,  0,  0,  0,153,153,244,153,153,  0, 90,  0],
    [ 89,  0,153,153, 90,153,153,  0,  0, 90,  0,  0,153],
    [153,  0,153,153,  0,  0, 90,  0,  0,153,153,  0,153],
    [153,  0,  0,  0,  0,  0,153,153,244,153,153,  0,  0],
    [  0, 90,244,153,153,  0,153,153,  0,  0,  0,244,  0],
    [153,153,  0,153,153,  0,  0,  0,244,  0,153,153, 90],
    [153,153,  0,  0, 90,  0,  0,153,153, 90,153,153,  0],
    [ 90,  0,244,  0,153,153,  0,153,153,  0,  0,  0,  0],
    [  0,153,153, 90,153,153,  0,  0,  0,  0,244,153,153],
    [  0,153,153,  0,  0,  0, 89,  0,153,153, 90,153,153]
],
"firstArrive": [],
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