main.floors.MT8=
{
"floorId": "MT8",
"title": "迷境 ++",
"name": "++",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [ 33,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 33],
    [  0,153,153,153,153,153, 29,153,153,153,153,153,  0],
    [  0,153, 31, 27,  0,216,  0,216,  0, 28, 31,153,  0],
    [  0,153, 28,153,153,153,153,153,153,153, 27,153,  0],
    [  0,153,  0,153, 28,  0,223,  0, 27,153,  0,153,  0],
    [  0,153,219,153,228,153,153,153,246,153,220,153,  0],
    [ 89,153,  0, 27,  0,153,247,153,  0, 28,  0,153,  0],
    [  0,153,219,153,228,153,153,153,246,153,220,153,  0],
    [  0,153,  0,153, 27,  0,223,  0, 28,153,  0,153,  0],
    [  0,153, 27,153,153,153,153,153,153,153, 28,153,  0],
    [  0,153, 31, 28,  0,218,  0,218,  0, 27, 31,153,  0],
    [  0,153,153,153,153,153, 29,153,153,153,153,153,  0],
    [ 33,  0,  0,  0,  0,  0, 89,  0,  0,  0,  0,  0, 33]
],
"firstArrive": [],
"events": {
    "0,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt78_8';teleport('mt78',7);\n}"
        }
    ],
    "6,12": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt28_8';teleport('mt28',2);\n}"
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