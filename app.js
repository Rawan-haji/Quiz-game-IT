//getelementbyid means that connect js and html also search to match for the id
const letstart = document.getElementById('start-btn');
// addEventListener for example the user will click the the code will work
if(letstart){
    letstart.addEventListener('click',(element)=>{
        window.location.href="category.html"
    })
}
// --- أكواد التنقل بين الصفحات ---
const computerBasic = document.getElementById('computer-btn');
if(computerBasic){
    computerBasic.addEventListener('click', () => {
        window.location.href = "computer.html";
    });
}

const programmingPage = document.getElementById('programming-btn');
if(programmingPage){
    programmingPage.addEventListener('click', () => {
        window.location.href = "programming.html";
    });
}


// --- نظام الأسئلة العادي والبسيط جداً ---
let score = 0;
let score2=0

// إمساك الأزرار الثلاثة والعنوان من الصفحة
const mainQuestion = document.getElementById('f-q')
const btn1 = document.getElementById('f-correct')
const btn2 = document.getElementById('s-false')
const btn3 = document.getElementById('t-false')

const secQuestion=document.getElementById('FirstQustion')
const Pbtn1=document.getElementById('programming-btn1')
const Pbtn2=document.getElementById('programming-btn2')
const Pbtn3=document.getElementById('programming-btn3')

const result=document.querySelector('#result')
const result2=document.querySelector('#result2')
const staButton=document.querySelector("#start-btn")

const re = document.querySelector('#restart')
const re2=document.querySelector('#restart2')





