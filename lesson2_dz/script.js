// var money = "Ваш бюджет на месяц?";
// var time = "Введите дату в формате YYYY-MM-DD";
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
budget: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: false,
};

let q3 = prompt("Во сколько обойдется?");
let q4 = prompt("Во сколько обойдется?");







// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");


//     if  ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses [a] = b;
//     } else {

//     }
// }


let a = prompt("Введите обязательную статью расходов в этом месяце", "");
let b = prompt("Во сколько обойдется?", "");


// let i = 0;   while
// while (i < 2) {

//     if  ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     i++;
//     appData.expenses [a] = b;
//     } else {

//     }
// }

let i = 0;
do {

    if  ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
    console.log("done");
    i++;
    appData.expenses [a] = b;
    } else {

    } }
    while (i < 2);





appData.moneyPerDay = (appData.budget/ 30);

alert("Ежедневній бюджет" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальній уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {

console.log("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000) {

    console.log("Вісокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }