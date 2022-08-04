import { slash } from './spellData.js'
import { poison } from './spellData.js'

export var warriorData = {
    health: 12,
    armor: 2,
    speed: 3,
    energy: 3,
    frontRow: slash,
    middleRow: "cleave",
    backRow: "armorUp",
    position: "frontMiddle",

}

export var poisonMageData = {
    health: 6,
    armor: 1,
    speed: 4,
    energy: 5,
    frontRow: poison,
    middleRow: "poisonDart",
    backRow: "poisonExplosion",
    position: "frontLeft",
}
