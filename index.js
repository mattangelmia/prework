// function calculator(num1, num2, operator) {
//     // makes sure user always passes three args
//     if (!num1 || !num2 || !operator) {
//         console.log('provide both numbers and operator!');
//         return;
//     }
//     // makes sure user passes numeric values
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log('Please add a numeric value only!');
//         return;
//     }

//     // make sure the user passes one of the valid operators (+, -, *, /)
//     if (operator !== '+' && operator != '-' && operator != '*' && operator != '/') {
//         console.log('Please provide valid operator.');
//         return;
//     }

//     // initialize a variable that will hold the result
//     let result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//     }
//     let response = `${num1} ${operator} ${num2} = ${result}`;
//     return response;
// }


const player = {
    x: 1,
    y: 1
};

// define function
function placeHorizontal(thePlayer, command) {
    // if we move player to the left
    if (command === 'l') {
        // subtract from "y" property
        thePlayer.y--;
    } else {
        // or if we move player to the right
        // add to "y" property
        thePlayer.y++;
    }
    console.log(`Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);
}

// invoke function
placeHorizontal(player, 'l');
// => Player has position: x=1, y=0

placeHorizontal(player, 'l');
// => Player has position: x=1, y=-1 (!!!)

placeHorizontal(player, 'r');
  // => Player has position: x=1, y=0
