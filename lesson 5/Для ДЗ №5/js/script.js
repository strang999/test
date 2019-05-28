let menuItem = document.getElementsByClassName("menu-item"),
    menu = document.getElementsByClassName("menu")[0],
    column = document.getElementsByClassName("column"),
    adv = document.getElementsByClassName("adv")[0],
    menuLi = document.createElement("li"),
    div = document.getElementsByTagName("div"),
    body = document.getElementsByTagName("body")[0],
    title = document.getElementsByTagName("title"),
    answer = document.getElementsByClassName("prompt")[0];

    menu.insertBefore(menuItem[2], menuItem[1]);
                                            
    menuLi.classList.add("menu-item");
    menuLi.textContent = "Пятый елемент";
    menu.appendChild(menuLi);

   adv.style.display = "none";


    body.style.background = "url(../img/apple_true.jpg)";

div.title.innerHTML = "Мы продаем только подлинную технику Apple";

var question = prompt("Как вы относитесь к технике Apple?");
answer.innerHTML = (question);
