function enemys() {

}
//1, 2, 5, 9, 10, 11, 18, 20, 21, 22, 23, 25, 30, 40, 55, 60
enemys.prototype.init = function () {
    // 怪物属性初始化定义：
    this.enemys = {
        'greenSlime': {'name': '绿幽灵', 'hp': 2, 'atk': 1, 'def': 0, 'money': 1, 'experience': 0, 'special': 18},
        'redSlime': {'name': '蓝幽灵', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 18},
        'blackSlime': {'name': '红幽灵', 'hp': 2, 'atk': 20, 'def': 0, 'money': 0, 'experience': 0, 'special': 18},
        'slimelord': {'name': '幽灵', 'hp': 2, 'atk': 100, 'def': 0, 'money': 10, 'experience': 0, 'special': 18},
        'bat': {'name': '血瓶', 'hp': 2, 'atk': -1, 'def': 0, 'money': 2, 'experience': 0, 'special': 0},
        'bigBat': {'name': '血瓶', 'hp': 2, 'atk': -2, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redBat': {'name': '血瓶', 'hp': 2, 'atk': -5, 'def': 0, 'money': 5, 'experience': 0, 'special': 0},
        'vampire': {'name': '血瓶', 'hp': 2, 'atk': -9, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeleton': {'name': '血瓶', 'hp': 2, 'atk': -10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonSoilder': {'name': '血瓶', 'hp': 2, 'atk': -11, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonCaptain': {'name': '血瓶', 'hp': 2, 'atk': -18, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'ghostSkeleton': {'name': '血瓶', 'hp': 2, 'atk': -20, 'def': 0, 'money': 8, 'experience': 0, 'special': 0},
        'zombie': {'name': '血瓶', 'hp': 2, 'atk': -21, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'zombieKnight': {'name': '血瓶', 'hp': 2, 'atk': -22, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'rock': {'name': '血瓶', 'hp': 2, 'atk': -23, 'def': 0, 'money': 4, 'experience': 0, 'special': 0},
        'slimeMan': {'name': '血瓶', 'hp': 2, 'atk': -25, 'def': 0, 'money': 11, 'experience': 0, 'special': 0}, // 模仿怪的攻防设为0就好
        'bluePriest': {'name': '血瓶', 'hp': 2, 'atk': -30, 'def': 0, 'money': 3, 'experience': 0, 'special': 0},
        'redPriest': {'name': '血瓶', 'hp': 2, 'atk': -40, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'brownWizard': {'name': '血瓶', 'hp': 2, 'atk': -55, 'def': 0, 'money': 16, 'experience': 0, 'special': 0}, // 领域怪需要加value表示领域伤害的数值
        'redWizard': {'name': '血瓶', 'hp': 2, 'atk': -60, 'def': 0, 'money': 160, 'experience': 0, 'special': 0},
        'yellowGuard': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 10, 'experience': 0, 'special': 0},
        'blueGuard': {'name': '血瓶', 'hp': 2, 'atk': -16, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redGuard': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'swordsman': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 6, 'experience': 0, 'special': 0},
        'soldier': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'yellowKnight': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redKnight': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'darkKnight': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'blackKing': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 1000, 'experience': 1000, 'special': 0, 'bomb': false}, // 加入 'bomb': false 代表该怪物不可被炸弹或圣锤炸掉
        'yellowKing': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'greenKing': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'blueKnight': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 9, 'experience': 0, 'special': 0},
        'goldSlime': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'poisonSkeleton': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'poisonBat': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 14, 'experience': 0, 'special': 0},
        'steelRock': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonPriest': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonKing': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'skeletonWizard': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redSkeletonCaption': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'special': 0},
        'badHero': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'demon': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'demonPriest': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'goldHornSlime': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redKing': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'whiteKing': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 17, 'experience': 0, 'special': 0},
        'blackMagician': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 12, 'experience': 0, 'special': 0, 'bomb': false}, // 吸血怪需要在后面添加value代表吸血比例
        'silverSlime': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 15, 'experience': 0, 'special': 0},
        'swordEmperor': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'whiteHornSlime': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'badPrincess': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'badFairy': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'grayPriest': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'redSwordsman': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 7, 'experience': 0, 'special': 0},
        'whiteGhost': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'poisonZombie': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 13, 'experience': 0, 'special': 0},
        'magicDragon': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'octopus': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'darkFairy': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
        'greenKnight': {'name': '血瓶', 'hp': 2, 'atk': 10, 'def': 0, 'money': 0, 'experience': 0, 'special': 0},
    }
}

enemys.prototype.getEnemys = function (enemyId) {
    if (enemyId == undefined) {
        return this.enemys;
    }
    return this.enemys[enemyId];
}

enemys.prototype.hasSpecial = function (special, test) {
    return special!=0 && (special%100 == test || this.hasSpecial(parseInt(special/100), test));
}

enemys.prototype.getSpecialText = function (enemyId) {
    if (enemyId == undefined) return "";
    var special = this.enemys[enemyId].special;
    var text = [];
    if (this.hasSpecial(special, 1)) text.push("先攻");
    if (this.hasSpecial(special, 2)) text.push("魔攻");
    if (this.hasSpecial(special, 3)) text.push("坚固");
    if (this.hasSpecial(special, 4)) text.push("2连击");
    if (this.hasSpecial(special, 5)) text.push("3连击");
    if (this.hasSpecial(special, 6)) text.push("4连击");
    if (this.hasSpecial(special, 7)) text.push("破甲");
    if (this.hasSpecial(special, 8)) text.push("反击");
    if (this.hasSpecial(special, 9)) text.push("净化");
    if (this.hasSpecial(special, 10)) text.push("模仿");
    if (this.hasSpecial(special, 11)) text.push("吸血");
    if (this.hasSpecial(special, 12)) text.push("中毒");
    if (this.hasSpecial(special, 13)) text.push("衰弱");
    if (this.hasSpecial(special, 14)) text.push("诅咒");
    if (this.hasSpecial(special, 15)) text.push("领域");
    if (this.hasSpecial(special, 16)) text.push("夹击");
    if (this.hasSpecial(special, 17)) text.push("仇恨");
    //changed
    if (this.hasSpecial(special, 18)) text.push("分裂");
    return text.join("  ");
}

enemys.prototype.getDamage = function (monsterId) {
    var monster = core.material.enemys[monsterId];
    var hero_atk = core.status.hero.atk, hero_def = core.status.hero.def, hero_mdef = core.status.hero.mdef;
    var mon_hp = monster.hp, mon_atk = monster.atk, mon_def = monster.def, mon_special = monster.special;
    var damage = this.calDamage(hero_atk, hero_def, hero_mdef, mon_hp, mon_atk, mon_def, mon_special);
    if (damage == 999999999) return damage;
    return damage + this.getExtraDamage(monster);
}

enemys.prototype.getExtraDamage = function (monster) {
    var extra_damage = 0;
    if (this.hasSpecial(monster.special, 11)) { // 吸血
        // 吸血的比例
        extra_damage = core.status.hero.hp * monster.value;
        extra_damage = parseInt(extra_damage);
    }
    if (this.hasSpecial(monster.special, 17)) { // 仇恨
        extra_damage += core.getFlag('hatred', 0);
    }
    return extra_damage;
}

// 临界值计算
enemys.prototype.getCritical = function (monsterId) {
    var monster = core.material.enemys[monsterId];
    if (this.hasSpecial(monster.special, 3) || this.hasSpecial(monster.special, 10)) return "???";
    var last = this.calDamage(core.status.hero.atk, core.status.hero.def, core.status.hero.mdef,
        monster.hp, monster.atk, monster.def, monster.special);
    if (last == 0) return 0;

    for (var i = core.status.hero.atk + 1; i <= monster.hp + monster.def; i++) {
        var damage = this.calDamage(i, core.status.hero.def, core.status.hero.mdef,
            monster.hp, monster.atk, monster.def, monster.special);
        if (damage < last)
            return i - core.status.hero.atk;
        last = damage;
    }
    return 0;
}

// 临界减伤计算
enemys.prototype.getCriticalDamage = function (monsterId) {
    var c = this.getCritical(monsterId);
    if (c == '???') return '???';
    if (c == 0) return 0;
    var monster = core.material.enemys[monsterId];
    // if (c<=0) return 0;
    var last = this.calDamage(core.status.hero.atk, core.status.hero.def, core.status.hero.mdef,
        monster.hp, monster.atk, monster.def, monster.special);
    if (last == 999999999) return '???';

    return last - this.calDamage(core.status.hero.atk + c, core.status.hero.def, core.status.hero.mdef,
        monster.hp, monster.atk, monster.def, monster.special);
}

// 1防减伤计算
enemys.prototype.getDefDamage = function (monsterId) {
    var monster = core.material.enemys[monsterId];
    return this.calDamage(core.status.hero.atk, core.status.hero.def, core.status.hero.mdef,
        monster.hp, monster.atk, monster.def, monster.special) -
        this.calDamage(core.status.hero.atk, core.status.hero.def + 1, core.status.hero.mdef,
            monster.hp, monster.atk, monster.def, monster.special)
}

enemys.prototype.calDamage = function (hero_atk, hero_def, hero_mdef, mon_hp, mon_atk, mon_def, mon_special) {
    // 魔攻
    if (this.hasSpecial(mon_special,2)) hero_def = 0;
    // 坚固
    if (this.hasSpecial(mon_special,3) && mon_def < hero_atk - 1) mon_def = hero_atk - 1;
    // 模仿
    if (this.hasSpecial(mon_special,10)) {
        mon_atk = hero_atk;
        mon_def = hero_def;
    }
    if (hero_atk <= mon_def) return 999999999; // 不可战斗时请直接返回999999999

    var per_damage = mon_atk - hero_def;
    //changed
    //if (per_damage < 0) per_damage = 0;
    // 2连击 & 3连击

    if (this.hasSpecial(mon_special, 4)) per_damage *= 2;
    if (this.hasSpecial(mon_special, 5)) per_damage *= 3;
    if (this.hasSpecial(mon_special, 6)) per_damage *= 4;

    var counterDamage = 0;
    // 反击
    if (this.hasSpecial(mon_special, 8)) counterDamage += parseInt(core.values.counterAttack * hero_atk);

    // 先攻
    var damage = mon_special == 1 ? per_damage : 0;
    // 破甲
    if (this.hasSpecial(mon_special, 7)) damage += parseInt(core.values.breakArmor * hero_def);
    // 净化
    if (this.hasSpecial(mon_special, 9)) damage = core.values.purify * hero_mdef;

    var turn = parseInt((mon_hp - 1) / (hero_atk - mon_def));
    var ans = damage + turn * per_damage + (turn + 1) * counterDamage;
    ans -= hero_mdef;

    //changed
    // 魔防回血
    return ans;

    // 魔防不回血
    // return ans <= 0 ? 0 : ans;
}

// 获得当前楼层的怪物列表
enemys.prototype.getCurrentEnemys = function () {
    var enemys = [];
    var used = {};
    var mapBlocks = core.status.thisMap.blocks;
    for (var b = 0; b < mapBlocks.length; b++) {
        if (core.isset(mapBlocks[b].event) && !(core.isset(mapBlocks[b].enable) && !mapBlocks[b].enable) && mapBlocks[b].event.cls == 'enemys') {
            var monsterId = mapBlocks[b].event.id;
            if (core.isset(used[monsterId])) continue;

            var monster = core.material.enemys[monsterId];
            var mon_atk = monster.atk, mon_def = monster.def;
            // 坚固
            if (this.hasSpecial(monster.special, 3) && mon_def < core.status.hero.atk - 1)
                mon_def = core.status.hero.atk - 1;
            if (this.hasSpecial(monster.special, 10)) {
                mon_atk=core.status.hero.atk;
                mon_def=core.status.hero.def;
            }

            enemys.push({
                'id': monsterId,
                'name': monster.name,
                'hp': monster.hp,
                'atk': mon_atk,
                'def': mon_def,
                'money': monster.money,
                'experience': monster.experience,
                'special': core.enemys.getSpecialText(monsterId),
                'damage': this.getDamage(monsterId),
                'critical': this.getCritical(monsterId),
                'criticalDamage': this.getCriticalDamage(monsterId),
                'defDamage': this.getDefDamage(monsterId)
            });

            used[monsterId] = true;
        }
    }

    enemys.sort(function (a, b) {
        if (a.damage == b.damage) {
            return a.money - b.money;
        }
        return a.damage - b.damage;
    });
    return enemys;
}

main.instance.enemys = new enemys();