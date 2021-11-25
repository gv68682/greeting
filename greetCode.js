const greetCode =  (name) => {

    if(name === null){
        return "Hello there!" ;
    }
    else if(Array.isArray(name)){
        let str = name.join(', ');
        return "Hello, " + str;
    }
    else if(name  === name.toUpperCase()){
        return "HELLO " + name + "!"
    }
    else{
        return "Hello, " + name;
    }  
}
module.exports = greetCode;
//export default(greet);
//export {greetCode};