main.floors.l3=
{
"floorId": "l3",
"title": "走廊3",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"cannotViewMap": false,
"images": [],
"item_ratio": 1,
"firstArrive": [],
"events": {
    "0,0": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "0,2": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "0,4": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "0,6": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "0,8": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "0,10": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "0,12": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "12,6": null
},
"changeFloor": {},
"afterBattle": {
    "12,6": [
        {
            "type": "setValue",
            "name": "flag:bossnum",
            "value": "flag:bossnum+1"
        },
        {
            "type": "if",
            "condition": "flag:bossnum==3",
            "true": [
                {
                    "type": "win",
                    "reason": ""
                }
            ],
            "false": []
        }
    ],
    "11,5": [
        {
            "type": "setValue",
            "name": "flag:bossnum",
            "value": "flag:bossnum+1"
        },
        {
            "type": "if",
            "condition": "flag:bossnum==3",
            "true": [
                {
                    "type": "win",
                    "reason": ""
                }
            ],
            "false": []
        }
    ],
    "12,7": null,
    "11,7": [
        {
            "type": "setValue",
            "name": "flag:bossnum",
            "value": "flag:bossnum+1"
        },
        {
            "type": "if",
            "condition": "flag:bossnum==3",
            "true": [
                {
                    "type": "win",
                    "reason": ""
                }
            ],
            "false": []
        }
    ]
},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"map": [
    [ 92,202,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,203,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [ 92,202,  1,  0,  0,209,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,201,  1,  0,  0,201,  1,  1,  1,  1,  1],
    [ 92,205,  1,  0,  0,203,  1,  0,  0,202,  1,  1,  1],
    [  1,  0,  0,202,  1,  0,  0,201,  1,  0,  0,300,  1],
    [ 92,203,  1,  0,  0,209,  1,  0,  0,202,  1,  0,302],
    [  1,  0,  0,202,  1,  0,  0,202,  1,  0,  0,301,  1],
    [ 92,205,  1,  0,  0,201,  1,  0,  0,201,  1,  1,  1],
    [  1,  0,  0,202,  1,  0,  0,201,  1,  1,  1,  1,  1],
    [ 92,203,  1,  0,  0,202,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,203,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [ 92,202,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
}