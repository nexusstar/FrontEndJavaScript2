/**
 * Created by nexusstar on 31.03.15.
 */

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Panda(name, gender){
    if(!(this instanceof Panda)){
        return new Panda(name, gender, weight);
    }
    this.name = name;

    if (["male","female"].indexOf(gender) === -1){
        gender = 'female';
    }
    this.gender = gender;

    this.weight = 20;
}

Panda.prototype.isMale = function(){
    return this.gender === 'male';
};

Panda.prototype.isFemale = function(){
    return this.gender ==='female';
};

Panda.prototype.eat = function(bamboo){

    var isLazy = this.weight >= 80;

    if(this.weight <= 80) {
        return this.weight + food;
    }

    if (this.weight >= 80 && !isLazy) {
        this.name += "Lazzy Panda ";
    }

};

Panda.prototype.toString = function(){
    return [this.name, "is a", this.gender, "panda which weighs", this.weight].join(" ");
};

Panda.prototype.mate = function(anotherPanda){

    var motherName = "";
    var fatherName = "";
    var babyGender = "";
    var babyName = "";
    babyGender = ["female", "male"][getRandomInt(0 , 2)];

};
