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
        },
        "需要先击败黑暗大法师,测试版暂时不做检查"
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}