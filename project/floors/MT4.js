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
    [  0,  0,  0,  0,  0,  0, 89,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 89,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 89],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 89,  0,  0,  0,  0,  0,  0]
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
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}