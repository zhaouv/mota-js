main.floors.MT1=
{
"floorId": "MT1",
"title": "迷境 0-",
"name": "0-",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"png": [],
"bgm": "bgm.mp3",
"map": [
    [  0,153,202,202,  0,153,153,153,  0,202, 47, 32,201],
    [  0,153, 27,153,  0,203, 89,153,  0,153,153,153,  0],
    [  0,203, 47,153,201,153,153,153,  0,203,  0, 28,201],
    [  0,153,153,153,  0,  0,  0,  0,  0,153,153,153,  0],
    [  0,  0,  0,  0,  0,152,152,152,  0,  0,201, 31,201],
    [153,153,153,  0,152,152, 31,152,152,  0,153,153,153],
    [153, 89,203,  0,152, 31, 35, 31,152,  0,153, 89,153],
    [153,153,153,  0,152,152, 31,152,152,  0,153,204,153],
    [ 32,  0, 28,202,  0,152,152,152,  0,  0,  0,  0,  0],
    [ 47,153,153,  0,201,  0,  0,  0,201,  0,153,153,153],
    [  0,202,  0,  0,153,153,129,153,153,  0,202, 28,153],
    [ 27,153,153,  0,153,  0,  0,  0,153,153,153,202,153],
    [  0,201,201,  0,153,  0,  0,  0,153, 47,153,  0,  0]
],
"firstArrive": [],
"events": {
    "6,1": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt14_1';teleport('mt14',4);\n}"
        }
    ],
    "11,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt15_1';teleport('mt15',5);\n}"
        }
    ],
    "1,6": [
        {
            "type": "function",
            "function": "function(){\nvar _id='mt13_1';teleport('mt13',3);\n}"
        }
    ],
    "6,10": [
        "本塔一共9个区域网格状连通,5个战斗层,2个谜题层\n-+ 0+ ++\n-0 00 +0\n-- 0- +-\n每个区域的血瓶和宝石的系数\n2 0 4\n0 0 0\n1 1 3\n打败红蝙蝠后,-0通往-+的门才会打开\n打败-+吸血鬼后,0-通过+-的门才会打开\n+-区打败双手剑士后才能离开",
        "在每次战斗后,地图1格外的方块会沿着战斗进行的方向飘移一格",
        "状态数字显示的分别是破墙镐,地震卷轴和中心对称飞行器的数量,对应快捷键分别是1,2,3",
        "boss层需要使用地震卷轴或是中心对称飞行器才能通过\n两个谜题层通过后均会获得3点攻守\n迷境 00的npc迷失勇者会提供大量属性\nboss魔攻",
        "本塔设置了常规推进,用破提前取属性,用飞提前取属性的3条路线"
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}