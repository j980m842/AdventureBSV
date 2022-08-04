import { warrior } from "./heroGenerator.js";
import { poisonMage } from "./heroGenerator.js";

console.log(warrior.health);
console.log(poisonMage.health);
while(warrior.energy>=warrior.frontRow.energyCost || poisonMage.energy>=poisonMage.frontRow.energyCost){
if(poisonMage.energy >= warrior.energy){

if(poisonMage.energy >=poisonMage.frontRow.energyCost){
    console.log("poison mage casts poison!");
    poisonMage.energy = poisonMage.energy - poisonMage.frontRow.energyCost;
    console.log('warrior takes ' + (poisonMage.frontRow.damage) + ' damage!')
    warrior.health = warrior.health - poisonMage.frontRow.damage;
    } else console.log("poison mage out of energy!")
}
if(warrior.energy>=warrior.frontRow.energyCost){
    console.log("warrior casts slash!");
    warrior.energy = warrior.energy - warrior.frontRow.energyCost;
    console.log('poison mage takes ' + (warrior.frontRow.power - poisonMage.armor) + ' damage!')
    poisonMage.health = poisonMage.health - (warrior.frontRow.power - poisonMage.armor);
} else console.log('warrior out of energy!')

console.log("warrior health = " + warrior.health)
console.log("poison mage health = " + poisonMage.health)

warrior.health>1 ? console.log('warrior lives!'): console.log('warrior died...')
poisonMage.health>1 ? console.log('poison mage lives!'): console.log('poison mage died...')

//if(warrior.health<1){
//    console.log("warrior died!")
//}
//if(poisonMage.health<1){
//    console.log("poison mage died!")
//}

}



