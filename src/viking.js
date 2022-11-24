// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health; 
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
}    
    receiveDamage(theDamage) 
        this.health -= (theDamage); {
} 
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
    super (health, strength);
    this.name = name;
    }
    battleCry (){
        return "Odin owns you all!";
    }
}
   receiveDamage(theDamage) {
        this.health -= (theDamage);
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage´;
        }
        else 
            return "${this.name} + "died in the combat";
        } 
    let Sascha = new Viking("Sascha", "34","10")
    Sascha.receiveDamage(3);

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(theDamage){
        this.health -= (theDamage);
            if (this.health > 0) {
                return `A Saxon has received ${theDamage} points of damage′
            }
    else
        return () {
            'Saxon has died in the combat'; 
    }
}
}