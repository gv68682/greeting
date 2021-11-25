const greetCode = require("./greetCode.js")

// var utils = require('course-utilities');
// var greetCode = utils.load("./greetCode.js", 'greetCode');

//import {greetCode} from "./greetCode.js"

describe('greetCode', () => {

    it('greetCode user', () => {
        //Test 1   
       let name = "Elizabeth";
       expect(greetCode(name)).toBe('Hello, Elizabeth')    
   });

   it('greetCode user, null validation', () => {
    //Test 2  
   let name = null;
   expect(greetCode(name)).toBe('Hello there!')    
    });

    it('greetCode all users from an array', () => {
        //Test 3  
       let name = ['Jose', 'Pep'];
       expect(greetCode(name)).toBe('Hello, Jose, Pep')    
    });

    it('greetCode all upper case users', () => {
        //Test 4  
       let name = "JOSE";
       expect(greetCode(name)).toBe('HELLO JOSE!')    
    });
})