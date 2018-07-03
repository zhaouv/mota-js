main.floors.MT0=
{
"floorId": "MT0",
"title": "主塔 0 层",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"cannotViewMap": false,
"defaultGround": "ground",
"images": [],
"item_ratio": 1,
"map": [
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86],
    [  3,137,  3,137,  3,137,  3,137,  3,137,  3,137,  3],
    [ 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86,  3, 86]
],
"firstArrive": [
    {
        "type": "if",
        "condition": "flag:hard==1",
        "true": [
            {
                "type": "trigger",
                "loc": [
                    0,
                    12
                ]
            }
        ],
        "false": [
            {
                "type": "trigger",
                "loc": [
                    2,
                    12
                ]
            }
        ]
    }
],
"events": {
    "0,4": null,
    "0,12": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "changePos",
                "loc": [
                    -1,
                    -1
                ]
            },
            {
                "type": "function",
                "function": "function(){\ninitnetworkgame()\n}"
            }
        ]
    },
    "2,12": {
        "trigger": "action",
        "enable": true,
        "noPass": null,
        "displayDamage": true,
        "data": [
            {
                "type": "changePos",
                "loc": [
                    -1,
                    -1
                ]
            },
            {
                "type": "function",
                "function": "function(){\ninitlocalgame()\n}"
            }
        ]
    }
},
"changeFloor": {
    "0,4": null
},
"afterBattle": {
    "0,4": null
},
"afterGetItem": {
    "0,4": null
},
"afterOpenDoor": {
    "0,4": null
},
"cannotMove": {
    "0,4": null
},
"upFloor": null,
}