// var money = "Ваш бюджет на месяц?";
// var time = "Введите дату в формате YYYY-MM-DD";
let money, time;

function start() {

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

while(isNaN(money)  || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");

}

}

start();

let appData = {
budget: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: true,
};



function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
    
    
        if  ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses [a] = b;
        } else {
        i=i - 1;
        }
    }
}

chooseExpenses();













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

// let i = 0;
// do {

//     if  ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     i++;
//     appData.expenses [a] = b;
//     } else {

//     } }
//     while (i < 2);







    function checkSavings() {
 if (appData.savings == true) {
     let save = prompt("Какова сумма накоплений?"),
        percent = prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц в Вашего депозита: " + appData.monthIncome);
    }

}

checkSavings();

function detectDayBudget() {
    if (appData.budget !=null) {
        let budg = prompt("Ваш бюджет на месяц?"),
            days = prompt("Сколько дней в месяце?");
           appData.DayBudget = (budg / days);

           alert("Ежедневній бюджет :" + appData.DayBudget);
      }
   
   }

   detectDayBudget();


   function detectLevel() {
if(appData.moneyPerDay < 100) {
    alert("Минимальній уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {

alert("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000) {

    alert("Вісокий уровень достатка");
    } else {
        alert("Произошла ошибка");
    }
}

    detectLevel();

    
function chooseOptExpenses() {
    for (let i = 0; i < 2; i++) {
        let opt = prompt("Статья необязательных расходов?", "");


        appData.optionalExpenses [i] = opt;
        console.log(appData.optionalExpenses);
        }
    }

chooseOptExpenses();