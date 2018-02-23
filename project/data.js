data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
    "main": {
        "useCompress": false,
        "floorIds": [
            "MT3",
            "MT1",
            "MT5",
            "MT0",
            "MT4",
            "MT2",
            "MT6",
            "MT7",
            "MT8"
        ],
        "pngs": [
            "bg"
        ],
        "animates": [
            "hand",
            "sword",
            "zone",
            "yongchang"
        ],
        "bgms": [
            "bgm.mp3",
            "qianjin.mid",
            "star.mid"
        ],
        "sounds": [
            "floor.mp3",
            "attack.ogg",
            "door.ogg",
            "item.ogg",
            "zone.ogg"
        ]
    },
    "firstData": {
        "title": "迷踪境",
        "name": "maze",
        "version": "Ver 1.0.0",
        "floorId": "MT1",
        "hero": {
            "name": "勇士",
            "lv": 1,
            "hp": 1000,
            "atk": 10,
            "def": 10,
            "mdef": 0,
            "money": 0,
            "experience": 0,
            "items": {
                "keys": {
                    "yellowKey": 0,
                    "blueKey": 0,
                    "redKey": 0
                },
                "constants": {
                    "book": 1
                },
                "tools": {
                    "centerFly": 1,
                    "pickaxe": 20
                }
            },
            "flyRange": [],
            "loc": {
                "direction": "up",
                "x": 6,
                "y": 11
            },
            "flags": {
                "poison": false,
                "weak": false,
                "curse": false
            },
            "steps": 0
        },
        "startText": [],
        "shops": [
            {
                "id": "moneyShop1",
                "name": "贪婪之神",
                "icon": "blueShop",
                "textInList": "1F金币商店",
                "use": "money",
                "need": "20+10*times*(times+1)",
                "text": "勇敢的武士啊，给我${need}金币就可以：",
                "choices": [
                    {
                        "text": "生命+800",
                        "effect": "status:hp+=800"
                    },
                    {
                        "text": "攻击+4",
                        "effect": "status:atk+=4"
                    },
                    {
                        "text": "防御+4",
                        "effect": "status:def+=4"
                    },
                    {
                        "text": "魔防+10",
                        "effect": "status:mdef+=10"
                    }
                ]
            },
            {
                "id": "expShop1",
                "name": "经验之神",
                "icon": "pinkShop",
                "textInList": "1F经验商店",
                "use": "experience",
                "need": "-1",
                "text": "勇敢的武士啊，给我若干经验就可以：",
                "choices": [
                    {
                        "text": "等级+1",
                        "need": "100",
                        "effect": "status:lv+=1;status:hp+=1000;status:atk+=7;status:def+=7"
                    },
                    {
                        "text": "攻击+5",
                        "need": "30",
                        "effect": "status:atk+=5"
                    },
                    {
                        "text": "防御+5",
                        "need": "30",
                        "effect": "status:def+=5"
                    }
                ]
            }
        ],
        "levelUp": [
            {},
            {
                "need": 20,
                "name": "第二级",
                "effect": "status:hp+=2*(status:atk+status:def);status:atk+=10;status:def+=10"
            },
            {
                "need": 40,
                "effect": "function () {\n                core.drawText(\"恭喜升级！\");\n                core.status.hero.hp *= 2;\n                core.status.hero.atk += 100;\n                core.status.hero.def += 100;\n            }"
            }
        ]
    },
    "values": {
        "HPMAX": 999999,
        "lavaDamage": 100,
        "poisonDamage": 10,
        "weakValue": 20,
        "redJewel": 1,
        "blueJewel": 1,
        "greenJewel": 5,
        "redPotion": 50,
        "bluePotion": 100,
        "yellowPotion": 200,
        "greenPotion": 500,
        "sword0": 0,
        "shield0": 0,
        "sword1": 10,
        "shield1": 10,
        "sword2": 20,
        "shield2": 20,
        "sword3": 30,
        "shield3": 30,
        "sword4": 50,
        "shield4": 50,
        "sword5": 80,
        "shield5": 80,
        "moneyPocket": 500,
        "breakArmor": 0.9,
        "counterAttack": 0.1,
        "purify": 3,
        "hatred": 2,
        "animateSpeed": 500
    },
    "flags": {
        "enableFloor": true,
        "enableLv": false,
        "enableMDef": true,
        "enableMoney": true,
        "enableExperience": false,
        "enableLevelUp": false,
        "enableDebuff": false,
        "flyNearStair": true,
        "pickaxeFourDirections": false,
        "bombFourDirections": false,
        "bigKeyIsBox": false,
        "equipment": false,
        "enableDeleteItem": true,
        "enableNegativeDamage": false,
        "hatredDecrease": true,
        "betweenAttackCeil": false,
        "startDirectly": false,
        "canOpenBattleAnimate": false,
        "showBattleAnimateConfirm": true,
        "battleAnimate": true,
        "displayEnemyDamage": true,
        "displayExtraDamage": true,
        "enableGentleClick": false,
        "potionWhileRouting": true,
        "enableViewMaps": true,
        "portalWithoutTrigger": true,
        "enableMoveDirectly": true
    }
}