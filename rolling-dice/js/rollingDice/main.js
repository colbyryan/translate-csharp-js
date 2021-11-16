// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")


for (let i = 0; i < 10; i++) {
    die1 = Roll();
    die2 = Roll();

    let message = `${die1} + ${die2} == ${die1.Value + die2.Value}`
    if (die1.Value === die2.Value) {
        message += " DOUBLES!"
    }

    console.log(message)
}

const dieRoll = () => {
    let dieValue = new Random().Next(1, 6)
    let die = new Die(dieValue)
    return (
        die
    )
}


const createDie = (value) => {
    return {
        value,
        toString: () => {
            let dieString = "unknown"
            let dieStringArray = ["dummy", "one", "two", "three", "four", "five", "six"]
            dieString = dieStringArray[this.value]
            return dieString
        }
    }

}