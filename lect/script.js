
if (num < 49) {
    console.log ("Neverno")
}
else if (num >100) {console.log("mnogo")}
else { 
    console.log("verno")
}

(num == 50) ? console.log("verno") : console.log("neverno");

switch (num) {
    case num < 49:
        console.log ("Neverno");
        break;
    case num > 100:
        console.log("mnogo");
        break;
    case 50:
        console.log("verno");
        break;
    default:
        console.log("chtoto ne tak");
        break;

}
let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i)
}