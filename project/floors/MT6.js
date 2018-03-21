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
    }
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"item_ratio": 2,
}