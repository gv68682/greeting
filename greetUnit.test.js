const greetCode = require("./greetCode.js")

describe('greetCode', () => {

    it('greet user', () => {
        //Test 1   
       let name = "Elizabeth";
       expect(greetCode(name)).toBe('Hello, Elizabeth')    
   });

   it('greet user, null validation', () => {
    //Test 2  
   let name = null;
   expect(greetCode(name)).toBe('Hello there!')    
    });

    it('greet all users from an array', () => {
        //Test 3  
       let name = ['Jose', 'Pep'];
       expect(greetCode(name)).toBe('Hello, Jose, Pep')    
    });

    it('greet all upper case users', () => {
        //Test 4  
       let name = "JOSE";
       expect(greetCode(name)).toBe('HELLO JOSE!')    
    });
})