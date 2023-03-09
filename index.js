// Code your solutions in this file

function writeCards(nameArray, gift) {
    let thankYous = [];

    for (let i = 0; i < nameArray.length; i++) {
        thankYous.push(`Thank you, ${nameArray[i]}, for the wonderful ${gift} gift!`)
    }
    // debugger
    return(thankYous);
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

