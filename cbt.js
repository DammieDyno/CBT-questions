let show = document.getElementById("show")
let index = 0




let quest = [
    {
        question: "QUESTION: what is your favorite course?",
        option: ["OPTION: html,CSS, Javascript, bootstrap"],
        anwser: "ANWSER:CSS."
    },
    {
        question: "QUESTION: what is your favorite color in code?",
        option: ["OPTION:Red,Teal, brown, black"],
        anwser:"ANWSER:Teal."
    },
    {
        question: "QUESTION:what is your favorite food?",
        option: ["OPTION: spag,beans,rice,yam"],
        anwser: "ANWSER:beans."
    },
    {
        question: "QUESTION: what is your favorite sport?",
        option: ["OPTION:Lawn tennis,basketball, baseball, football"],
        anwser: "ANWSER:Football."
    },
    {
        question: "QUESTION:what is your favorite  ?",
        option: ["OPTION:html,CSS, Javascript, bootstrap"],
        anwser: "ANWSER:CSS."
    }
]

function showcase() {
    show.innerHTML = `<h3>
    ${quest[index].question}<br>
    ${quest[index].option}<br>
    ${quest[index].anwser}<br>
</h>`
}
showcase()
function next() {
    if (index == quest.length - 1) {
        index = 0
    } else {
        index++
    }
    showcase()
}
function previous() {
    if (index = 0) {
        index == quest.length - 1
    } else {
        index--
    }
    showcase()
}