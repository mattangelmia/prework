function placeHorizontal(thePlayer, command) {
    if (thePlayer.y >= 0 && thePlayer.y < 2) {
        if (command === 'l') {
            thePlayer.y--;
        } else {
            thePlayer.y++;
        }

        console.log(`the Player has position: x=${thePlayer.x}, y=${thePlayer.y}`);
    } else {
        console.log("dont place player outside of the board!");
    }
}

const player = {
    x: 1,
    y: 1,
    path: [{ x: 1, y: 1 }]
};


