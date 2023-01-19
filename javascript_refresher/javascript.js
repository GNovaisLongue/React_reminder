const variables = () => {
  /*  
    VARIABLES
  
    'let' is the new 'var' keyword for general values that can be altered and changed in the code.
    'const' keyword doens't allow the value to be altered. It will stay as it is no matter what.
  
  */
  let a = "Hello";
  console.log(a);

  a = "Hello, My value got changed";
  console.log(a);

  const arr = [1, 2, 3, 4, 5];
  console.log(arr);

  // arr = [1, 3, 5, 7]; //TypeError: Assignment to constant variable.
  // console.log(arr);
};

const funcs = () => {
  /* 
    FUNCTIONS

    previous format for functions was using the keyword 'function':
    function myFunc(){
      ...
    }

    new format uses arrow functions. Is advised to add 'const' in front of it:
    myFunc = () =>{
      ...
    }

    arrow function allows to simplify and make the fuction's body shorter based on necessity
  */
  const sum = (n1, n2) => {
    console.log(n1 + n2); // you can show result inside function but it returns nothing to where it is called
  };
  const sub = (n1, n2) => {
    return n1 - n2; // you can return result to moment where function is called,
    //allowing the result to be used for something else.
  };
  const exponent = (n1) => n1 ** 2; //if there's just one variable, you can ommit parenthesis and 'return' keyword

  console.log(sum(2, 3)); //undefined
  console.log(sub(10, 2)); //8
  console.log(exponent(5)); //25
};

const importExport = () => {
  /* 
    IMPORT AND EXPORT METHOD 

    IMPORTS ARE ONLY ALLOWED TO BE PLACED AT THE VERY TOP AND OUTSIDE FUNCTIONS
    
    allow to import/export files and functions to other javascript files 
    as a way to access, organize and share variables, classes and objects.

    - having a file named 'data.js' containing at the end of the file 'export default data' 
    allows to import and access every information inside this 'data.js' file:
    import data from './data.js' <--- the name during import can be anything you want

    - having a file named 'functions.js' containing before their methods and variables 'export'
    allows to import that specific part from inside the 'function.js' file:
    import {proper name of the function/variable} from './function.js' <--- the name must be inside curly braces 
                                                                      and be the exact same present in the exported file

    having a file named 'utility_example.js'
    export const name = "William";

    export const append_1 = (string) => {
      return string.append("1");
    };

    // import { append_1, name } from "./utility_example";
  */
};

const classes = () => {
  /* 
    CLASS OBJECTS 

    Class is a basic structure for an object, that object being someone that will perform and action 
    or will be manipulated somehow inside the project.
    Classes can have variables and functions associated to it.

    class User{
      name = "name1"
      move = () =>{...} 
    }
  */

  /////////
  // General class that will be inherited
  class Bird {
    description = "I am a simple bird";
    //function
    birdDescription = () => {
      console.log(this.description);
    };
    fly = () => {
      console.log("I am flying!");
    };
  }
  // const bird = new Bird();
  // console.log(bird); //Bird { description: 'I am a simple bird' }
  // bird.birdDescription(); //I am a simple bird
  // bird.fly(); //I am flying!

  class Owl extends Bird {
    //inheriting parent's components and attributes
    description = "I am always watching and judging";
    name = "Nocturnowl";
    //function
    fly = () => {
      console.log("Silently Flying");
    };
    talk = () => {
      console.log("Hoot Hoot");
    };
  }

  const owl = new Owl();
  // console.log(owl);
  /* Owl {
    description: 'I am always watching and judging',
    name: 'Nocturnowl'
  } */
  owl.birdDescription(); //I am always watching and judging
  owl.fly(); //Silently Flying
  owl.talk(); //Hoot Hoot
};

const spreadRest = () => {
  /* 
    SPREAD AND REST OPERATOR
    '...' keyword
    const newArray = [...oldArray, 1, 2] <--- the keyword, in that case, for spreading brings every element from 'oldArray'
                                            to 'newArray' without the necessity to parse through every element in it.
    const newObj = {...oldObject, newProp: 5} <--- same for Objects, where every attribute is integrated to 'newObj'.
                                            If 'newProp' already existed, is gets overwritten.
    const func = (...args) => {
      args.sort() <--- every passed argument will be merged into an array and you can treat 'args' as an array
    }
  */
  const arr1 = ["hello", "world", 1, 2, 4, "A"];
  const arr2 = [...arr1, "10"];
  console.log(arr2);
};

const destructure = () => {
  /* 
    DESTRUCTURING
    const arr = [1, 2, 3, 4];
    [n1, , , n4] = arr; <--- allows to easily remove specific elements from an array and use separately 
  */

  const arr = ["hello", "world", 1, 2, 4, "A"];
  const [n1, n2, ...nn] = arr; // <--- JS doesn't complain if you don't add a type for the variable but you should
  console.log(n1, n2, nn); //hello world [ 1, 2, 4, 'A' ]

  const obj = {
    name: "A",
    date: "20/02",
    addr: "R. abc",
  };
  const { date } = obj; // <--- JS does complain if you forget the type for the variable
  console.log(date);
};

const references = () => {
  /* 
    REFERENCE AND PRIMITIVE TYPES
    variables pass the true value present onto another variable. Objects and Arrays pass the pointer onto another variable 
  */
  const person = {
    name: "max",
  };
  const person2 = person; // <--- the address in memory where 'person' is saved (it's pointer) is copied to 'person2' but not it's content
  person.name = "A";
  console.log(person2); // { name: 'A' }

  const person3 = {
    // <--- actually pass every attribute from 'person' to 'person3'
    ...person,
  };
  console.log(person3);
};

const refreshArray = () => {
  const nums = [1, 2, 3, 4, 5];
  const nums1 = nums.map((nums) => {
    return nums * 2;
  });
  console.log(nums1);
};

// variables();
// funcs();
// importExport();
// classes();
// spreadRest();
// destructure();
// references();
// refreshArray();
