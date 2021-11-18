// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

const GetAllSpells = () => {
    let allSpells = [
        {
            Name: "Turn Enemy into a newt",
            IsEvil: true,
            EnergyRequired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyRequired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyRequired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyRequired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyRequired: 2921.5
        }
    ]
    return allSpells

}
const MakeEvilSpellBook = (allSpells) => {
    const evilBook = {}
    evilBook.Title = "Evil Book",
        evilBook.Spells = allSpells.filter(spell => spell.IsEvil)
    return evilBook
}

const MakeGoodSpellBook = (allSpells) => {
    const goodBook = {}
    goodBook.Title = "Good Book",
        goodBook.Spells = allSpells.filter(spell => !spell.IsEvil)
    return goodBook
}


const allSpells = GetAllSpells();

let goodBook1 = MakeGoodSpellBook(allSpells);
let evilBook1 = MakeEvilSpellBook(allSpells);



const DisplaySpellBook = (book) => {
    console.log(book.Title)
    book.Spells.forEach(spell => {
        console.log(` ${spell.Name}`)
    });
}

DisplaySpellBook(goodBook1);
console.log("")
DisplaySpellBook(evilBook1);