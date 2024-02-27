const points = [
    "Это точно",
    "Без сомнений",
    "Ты можешь положиться на это",
    "Да, безусловно",
    "Это определённо так",
    "Насколько я вижу это, да",
    "Вероятно",
    "Да",
    "Перспективы хорошие",
    "Знаки указывают на да",
   "Ответ туманный, попробуй ещё раз",
"Лучше не говорить тебе сейчас",
"Спроси ещё раз позже",
"Сейчас не могу предсказать",
"сконцентрируйся и спроси ещё раз",
"Не рассчитывай на это",
"Перспективы не очень хорошие",
"Мои источники говорят нет",
"очень сомнительно",
"Мой ответ нет"
];
document.getElementById("response").innerHTML=points;

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="18px";
    setTimeout(timeup, 4000);

    function timeup(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize ="120px";
        document.getElementById("clear").value="";
    }
}