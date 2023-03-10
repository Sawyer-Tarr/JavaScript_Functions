// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function printOdds(count) {


    if (count > 0) {
        for (let i = 1; i < count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            };
            
        }
    }
   if (count < 0) {
        for (let j = -1; j >= count; j--) {
        
            if (j % 2 != 0) {
                console.log(j);
            };
            
        }
        
    }
     
}
console.log(printOdds(10));

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

// function checkAge(userName, age) {
    
//     let belowSixTeen = `Sorry ${userName}, but you ned to wait until you're 16.`
//     let aboveSixTeen = `Congrats ${userName} you can drive.`

//     if (age >= 16) {
//         console.log(aboveSixTeen);
//     }
//     else {
//         console.log(belowSixTeen);
//     }

    
// }

// checkAge("Sawyer", 27);

// // Exercise 3 Section
// console.log("EXERCISE 3:\n==========\n");
// function coodinates(x, y) {
//     if (x == 0 && y == 0) {
//         console.log("The point is at 0,0.")
//     }
//     else if (y == 0) {
//         console.log("The point is on the y axis.")
//     }
//     else if (x == 0){
//         console.log("This point is on the x axis.")
//     }
//     else if (x > 0 && y > 0) {
//         console.log("The point is in Quadrant 1.")
//     }
//     else if (x < 0 && y > 0) {
//         console.log("The point is in Quadrant 2.")
//     }
//     else if (x < 0 && y < 0) {
//         console.log("The point is in Quadrant 3.")
//     }
//     else if (x > 0 && y < 0) {
//         console.log("The point is in Quadrant 4.")
//     }
    
// }

// coodinates(5,0);

// Exercise 4 Section
// console.log("EXERCISE 4:\n==========\n");
// function isATriangle(side1, side2, side3){
//     let triangle = true;
    
//     if (side1 + side2 <= side3 && side2 + side3 <= side1 && side1 + side3 <= side2) {
        
//         triangle = false;
//         console.log("This is not a triangle.")
   
//     }
    
//     if (triangle)
//     {
//         if (side1 == side2 && side2 == side3) {
//             console.log("This is an equilateral triangle.")
//         }
//         else if(side1 != side2 && side2 != side3) {
//             console.log("This is a scalene triangle.")
//         }
//         else if (side1 == side2 || side2 == side3 || side1 == side3){
//             console.log("This is a isosceles triangle.")
//         }
//     }
// }

// Exercise 5 Section
// console.log("EXERCISE 5:\n==========\n");
// function dataUse(planLimit, day, usage) {
//     let daysLeft = 30 - day;
//     let recommendedUse = planLimit / 30;
//     let actualUse = usage / day;
//     let dailylimit = "";
//     let adjustment = "";
//     let overage = (actualUse * 30) - planLimit; 
//     let newRecmdUse = (planLimit - usage) / daysLeft;


    

//     if (recommendedUse > actualUse) {
       
//         dailylimit = "UNDER";
//         adjustment = `Continuing this low usuage will roll over ${overage * (-1)} GB for next month.`
//     }
//     else if (recommendedUse < actualUse){
//         dailylimit = "EXCEEDING";
//         adjustment = `Continuing this high usuage will exceed your data plan by ${overage} GB.`

//     }
//     else {
//         dailylimit = "RIGHT ON";
//         adjustment = `You are using the exact amount of data for your plan.`
//     }

//     console.log(`${day} days used, ${daysLeft} days remaining`);
//     console.log(`Average recommended daily use: ${recommendedUse.toFixed(2)}`);
//     console.log(`You are ${dailylimit} your average daily (${actualUse.toFixed(2)} GB/Day).`);
//     console.log(`${adjustment}`);
//     if (recommendedUse < actualUse) {
//         console.log(`To stay below your data plan, use no more than ${newRecmdUse.toFixed(2)} GB/Day.`);
//     }
    

// }

// dataUse(100, 15, 75);