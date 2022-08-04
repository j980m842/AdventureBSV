import { warriorData } from "./heroData.js";
import { poisonMageData } from "./heroData.js";
import { Hero } from "./Hero.js";

export let warrior = new Hero(
    warriorData.health, 
    warriorData.armor, 
    warriorData.speed, 
    warriorData.energy, 
    warriorData.frontRow, 
    warriorData.middleRow, 
    warriorData.backRow, 
    warriorData.position);

export let poisonMage = new Hero(
    poisonMageData.health, 
    poisonMageData.armor, 
    poisonMageData.speed, 
    poisonMageData.energy, 
    poisonMageData.frontRow, 
    poisonMageData.middleRow, 
    poisonMageData.backRow, 
    poisonMageData.position);