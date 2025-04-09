const character = "!";
const count = 10;
const rows = []; //["         !         ","        !!!        ","       !!!!!       "]
let inverted = 2;

function padRow(rowNumber, rowCount) { //1, 10 2,10
    let a = " ".repeat(rowCount - rowNumber); //" ".repeat(9), "         ", " ".repeat(8) "        " " ".repeat(7) "       "
    console.log("a is" + a);

    let b = character.repeat(2 * rowNumber - 1);//!.repeat(1) !, !.repeat(3) !!!, !.repeat(5) !!!!!
    console.log("b is" + b);

    let c = " ".repeat(rowCount - rowNumber); //"         ","        ", "       "
    console.log("c is" + c);

    return a + b + c; // "         !         ", "        !!!        ", "       !!!!!       "
}


for (let i = 1; i <= count; i++) { //i=1;true 2, true, i=3 true 
    console.log("inverted is " + inverted);
    if (inverted ) { //false
        rows.unshift(padRow(i, count));
    } else {
        const d = padRow(i, count) //1, 10  "         !         " 2,10 "        !!!        ", 3,10 "       !!!!!       "
        rows.push(d); //["         !         ","        !!!        ","       !!!!!       "]

    }
}

let result = ""

for (const row of rows) {
    result = result + row + "\n"; //""+ "         !         " + "        !!!        " + "       !!!!!       ";
}

console.log(result);
//"         !         "
//"        !!!        "
//"       !!!!!       "