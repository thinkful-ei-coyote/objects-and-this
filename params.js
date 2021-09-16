function sayName(name='Joe'){
    console.log(`Hi ${name}`);
}

let coolFunc =function(param){

}

let pokemon = {
    sayName:function(name="pikachu", color="blue"){
        console.log(`pokemon said ${name} and its color is ${color}`);
        sayName();
    }
}
pokemon.sayName()