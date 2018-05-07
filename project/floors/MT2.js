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
    "攻守+3,消灭此处所有怪物并使地形恢复原貌可以使得True End的得分+1000"
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
                    "function": "function(){\nif(core.getFlag('deadNum').swordsman>=1){\n\tvar _id='mt28_2';teleport('mt28',8);\n}else{\n\tcore.insertAction('需要击败吸血鬼或双手剑士');\n}\n}"
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