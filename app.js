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


// المرحلة 1: تشغيل السؤال الأول عند فتح الصفحة
if (btn1 && btn2 && btn3) {
    // نربط الأزرار الثلاثة بوظائف السؤال الأول
    btn1.addEventListener('click', clickQ1Correct);
    btn2.addEventListener('click', clickQ1Wrong);
    btn3.addEventListener('click', clickQ1Wrong);
    result.textContent=`Score ${score}`

}



// اذا اختار ذي الجواب بيزيد له نقطه
function clickQ1Correct() {
    score = score + 1;// زيادة النقطة لأن الجواب الأول صح (Solid State Drive)

    goToSecondQuestion();
}


function clickQ1Wrong() {
    goToSecondQuestion(); // انتقال فقط بدون نقاط
}

//السوال الثاني 
function goToSecondQuestion() {
    // 1. تغيير الكلمات على الشاشة باستخدام  
    mainQuestion.textContent="Which of the following is an example of application software?"
        btn1.textContent="Windows"
        btn2.textContent="Microsoft word"
        btn3.textContent="CPU"

        result.textContent=`Score ${score}`

    // شلنا الاجوبه مال السوال الاول
    btn1.removeEventListener('click', clickQ1Correct);
    btn2.removeEventListener('click', clickQ1Wrong);
    btn3.removeEventListener('click', clickQ1Wrong);

    // 3. ربط الأزرار بوظائف السؤال الثاني الجديدة
    btn1.addEventListener('click', clickQ2Wrong);
    btn2.addEventListener('click', clickQ2Correct); // الخيار الثاني هو الصح هنا (Microsoft word)
    btn3.addEventListener('click', clickQ2Wrong);
}



function clickQ2Correct() {
    score = score + 1;
    goToThirdQuestion();
}

function clickQ2Wrong() {
    goToThirdQuestion();
}


// السوال 3

function goToThirdQuestion() {
    mainQuestion.textContent="Which device connects a computer to a network?"
        btn1.textContent="Network Interface card"
        btn2.textContent="Sound card"
        btn3.textContent="Power supply"
        result.textContent=`Score ${score}`
    btn1.removeEventListener('click', clickQ2Wrong)
    btn2.removeEventListener('click', clickQ2Correct)
    btn3.removeEventListener('click', clickQ2Wrong)

    btn1.addEventListener('click', clickQ3Correct) // الخيار الأول هو الصح هنا (Network Interface card)
    btn2.addEventListener('click', clickQ3Wrong)
    btn3.addEventListener('click', clickQ3Wrong)
}

function clickQ3Correct() {
    score = score + 1;
     goToFourthQuestion()
}

function clickQ3Wrong() {
    goToFourthQuestion()
}

function goToFourthQuestion(){
 mainQuestion.textContent= "Which protocol is mainly used to load web pages"
    btn1.textContent="FTP"
    btn2.textContent="HTTP"
    btn3.textContent="Bluetooth"
    result.textContent=`Score ${score}`
btn1.removeEventListener('click',clickQ3Correct)
btn2.removeEventListener('click',clickQ3Wrong)
btn3.removeEventListener('click',clickQ3Wrong)

btn1.addEventListener('click',clickQ4Wrong)
btn2.addEventListener('click',clickQ4Correct)
btn3.addEventListener('click',clickQ4Wrong)
}
 function clickQ4Correct(){
    score=score+1
    goToFiveQuestion()
 }
 function clickQ4Wrong(){
    goToFiveQuestion()
 }

 function goToFiveQuestion(){
    mainQuestion.textContent= "What does USB stand for"
        btn1.textContent="User Storage Bus"
        btn2.textContent="Universal Serial Bus"
        btn3.textContent="United Serial Board"
        result.textContent=`Score ${score}`
    btn1.removeEventListener('click',clickQ4Wrong)
    btn2.removeEventListener('click',clickQ4Correct)
    btn3.removeEventListener('click',clickQ4Wrong)

    btn1.addEventListener('click',clickQ5Wrong)
    btn2.addEventListener('click',clickQ5Correct)
    btn3.addEventListener('click',clickQ5Wrong)
     function clickQ5Correct(){
        score=score+1
        finishQuiz()
     }
     function clickQ5Wrong(){
        finishQuiz()
     }
    
 }
 

// نهايه اللعبه


function finishQuiz() {
    mainQuestion.textContent = "Quiz Finished! 🎉 Your final score is: " + score + " out of 5";
    result.textContent = ''
    // يختفون الازره
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";


}










