// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const Roll = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let dieStringArray = ["dummy", "one", "two", "three", "four", "five", "six"]

for (let i = 0; i < 10; i++) {
    die1 = Roll(1, 6);
    die2 = Roll(1, 6);

    let message = `${dieStringArray[die1]} + ${dieStringArray[die2]} = ${die1 + die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }

    console.log(message)
}


