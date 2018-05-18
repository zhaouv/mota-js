main.floors.l5=
{
"floorId": "l5",
"title": "走廊1 - normal",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"cannotViewMap": false,
"images": [],
"item_ratio": 1,
"firstArrive": [],
"events": {
    "12,0": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "12,2": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "12,4": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "12,6": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "12,8": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "12,10": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "12,12": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.tp()\n}"
        }
    ],
    "1,5": null,
    "0,5": [
        "所有怪物具有退化属性,降低攻守数值为角色的退化等级乘上对应的减少攻守值.\n每个怪物的基础的减少攻守值显示在伤害上方.\n部分怪物能够改变退化等级.\n本塔允许负的攻守.\n不含怪物之外的元素.\n战胜三个boss:剑,盾,圣锤,即可获得胜利,其分别具有魔攻坚固和模仿."
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
"map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0, 94],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,204,  1],
    [  1,  1,  1,  1,  1,  1,  1,  0,  0,204,  1,  0, 94],
    [  1,  1,  1,  1,  1,  0,  0,220,  1,  0,  0,207,  1],
    [  1,  1,  1,  0,  0,223,  1,  0,  0,212,  1,  0, 94],
    [129,  0,  0,247,  1,  0,  0,224,  1,  0,  0,207,  1],
    [  0,245,  1,  0,  0,228,  1,  0,  0,222,  1,  0, 94],
    [  1,  0,  0,212,  1,  0,  0,204,  1,  0,  0,222,  1],
    [  1,  1,  1,  0,  0,220,  1,  0,  0,219,  1,  0, 94],
    [  1,  1,  1,  1,  1,  0,  0,246,  1,  0,  0,227,  1],
    [  1,  1,  1,  1,  1,  1,  1,  0,  0,207,  1,  0, 94],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,204,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0, 94]
],
}