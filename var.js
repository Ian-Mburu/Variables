let sum = 2 + 3 - 7

console.log(sum)

let q = "66" + 7
                    //Result will be 66 + 7 =667
console.log(q)

let q1 = 7 + 7 + "6"
                    //Results will be 7 + 7=14 then 14 + 6 =146
console.log(q1)

// Concatenation//

let x = "Ian";
let y = "Mburu";
let z = x + "" + y

console.log(z)


                 // Javascript 'Let' 

/* Variables declared with let have a block scope.
   Variables must be declared before use.
   Variables cannot be re-declared in the same scope.
*/


// Re declaring Variables 

        // Equal To

        let student1 = 70
        let student2 = 71
        let results = student1 == student2  //False

        console.log(results)

        let student3 = 90
        let student4 = 90
        let result = student3 == student4  // True
        
        console.log(result)

        // Equal value and type

        let toyota1 = "mark x"
        let toyota2 = "crown"
        let allT = toyota1 === toyota2  // False

        console.log(allT)

        let no1 = 44
        let no2 = 44
        let allNo = no1 === no2     // True

        console.log(allNo)

        //Not Equal

        let size1 = 69
        let size2 = 99
        let allSize = size1 != size2        // True

        console.log(allSize)

        let size3 = 23
        let size4 = 23
        let allSizes = size3 != size4       // False

        console.log(allSizes)

        //Not equal value or type

        let num1 = 10;
        let num2 = "10";

        if (num1 !== num2) {
            console.log("num1 and num2 are not equal in value or type.");
        } else {
            console.log("num1 and num2 are equal in value or type.");
        }

        // Greater Than 'greater than or equal to'

        let std1 = 66
        let std2 = 55
        let gtr = std1 > std2

        console.log(gtr)

        let std5 = 66
        let std6 = 55
        let gtr3 = std1 >= std2

        console.log(gtr3)

        // Less Than 'less-than or equal to'

        let std3 = 66
        let std4 = 55
        let gtr1 = std1 < std2

        console.log(gtr1)

        let std7 = 66
        let std8 = 55
        let gtr4 = std2 <= std1

        console.log(gtr4)

        // Ternary Operator

        let age = 25;
        let message = (age >= 18) ? "You are an adult" : "You are not an adult";

        console.log(message);

        let age2 = 12;
        let message2 = (age2 <= 18) ? "you are an adult " : "you are not an adult"

        console.log(message2)