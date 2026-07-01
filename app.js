//getelementbyid means that connect js and html also search to match for the id
const letstart = document.getElementById('start-btn');
// addEventListener for example the user will click the  code will work
if(letstart){
    letstart.addEventListener('click',(element)=>{
        window.location.href="category.html"
    })
}
//أكواد التنقل بين الصفحات 
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


// تشغيل السوال الاول لمن نبتدي
if (btn1 && btn2 && btn3) {
   
    btn1.addEventListener('click', clickQ1Correct);
    btn2.addEventListener('click', clickQ1Wrong);
    btn3.addEventListener('click', clickQ1Wrong);
    result.textContent=`Score ${score}`

}



// اذا اختار ذي الجواب بيزيد له نقطه
function clickQ1Correct() {
    score = score + 1;

    goToSecondQuestion();
}


function clickQ1Wrong() {
    goToSecondQuestion(); 
}

//السوال الثاني 
function goToSecondQuestion() {
    // تغير السوال  
    mainQuestion.textContent="Which of the following is an example of application software?"
        btn1.textContent="Windows"
        btn2.textContent="Microsoft word"
        btn3.textContent="CPU"

        result.textContent=`Score ${score}`

    // شلنا الاجوبه مال السوال الاول
    btn1.removeEventListener('click', clickQ1Correct);
    btn2.removeEventListener('click', clickQ1Wrong);
    btn3.removeEventListener('click', clickQ1Wrong);

    // ربطنا في الازره السوال الثاني
    btn1.addEventListener('click', clickQ2Wrong);
    btn2.addEventListener('click', clickQ2Correct); 
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

    btn1.addEventListener('click', clickQ3Correct) //الاختيار الاول اهو الصح
    btn2.addEventListener('click', clickQ3Wrong)
    btn3.addEventListener('click',clickQ3Wrong)
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
const winSound=new Audio('./audio/clap.mp3')
winSound.play()

}

if (re) {
    re.addEventListener('click', function() {
        window.location.href = "index.html";
    });
}

//programming
if(Pbtn1&&Pbtn2&&Pbtn3){
Pbtn1.addEventListener('click',click1Correct)
Pbtn2.addEventListener('click',click1Wrong)
Pbtn3.addEventListener('click',click1Wrong)
result2.textContent=`Score ${score2}`
}
function click1Correct(){
    score2++
    Pqustion()
    //finishQuiz2()
}
function click1Wrong(){
Pqustion()
//finishQuiz2()
}

function Pqustion(){
    secQuestion.textContent="Which CSS selector has the highest specificity"
    Pbtn1.textContent="Class selector(.menu)"
    Pbtn2.textContent="Element selector (p)"
    Pbtn3.textContent="ID selector(#menu)"
result2.textContent=`Score ${score2}`
    Pbtn1.removeEventListener('click',click1Correct)
    Pbtn2.removeEventListener('click',click1Wrong)
    Pbtn3.removeEventListener('click',click1Wrong)

    Pbtn1.addEventListener('click',click2Wrong)
    Pbtn2.addEventListener('click',click2Wrong)
    Pbtn3.addEventListener('click',click2Correct)

    

}
function click2Correct(){
        score2++
        Pqustion2()
  //     finishQuiz2()
    }
    function click2Wrong(){
        Pqustion2()
    //    finishQuiz2()

    }
function Pqustion2(){
secQuestion.textContent="Which JavaScript method removes the last element from an array"
Pbtn1.textContent="shift()"
Pbtn2.textContent="pop()"
Pbtn3.textContent="splice()"
result2.textContent=`Score ${score2}`


    Pbtn1.removeEventListener('click', click2Wrong)
    Pbtn2.removeEventListener('click', click2Wrong)
    Pbtn3.removeEventListener('click', click2Correct)



Pbtn1.addEventListener('click',click3wr)
Pbtn2.addEventListener('click',click3Cor)
Pbtn3.addEventListener('click',click3wr)


}

function click3Cor(){
    score2++
    Pqustion3()
    //finishQuiz2()

}
function click3wr(){
    Pqustion3()
    //finishQuiz2()

}

function Pqustion3(){
secQuestion.textContent="Which CSS layout system is primarily designed for one-dimensional layouts"
Pbtn1.textContent="Grid"
Pbtn2.textContent="Flexbox"
Pbtn3.textContent="position"
result2.textContent=`Score ${score2}`

Pbtn1.removeEventListener('click',click3wr)
Pbtn2.removeEventListener('click',click3Cor)
Pbtn3.removeEventListener('click',click3wr)

Pbtn1.addEventListener('click',click4Wrong)
Pbtn2.addEventListener('click',click4Correct)
Pbtn3.addEventListener('click',click4Wrong)


}

function click4Correct(){
    score2++
    Pqustion4()
    //finishQuiz2()
    
}
function click4Wrong(){
Pqustion4()
//finishQuiz2()

}
function Pqustion4(){
    secQuestion.textContent='Which CSS value centers items horizontally in Flexbox container'
    Pbtn1.textContent='align-item:center'
    Pbtn2.textContent="justify-content: center"
    Pbtn3.textContent="text-align: center"
result2.textContent=`Score ${score2}`
    Pbtn1.removeEventListener('click',click4Wrong)
    Pbtn2.removeEventListener('click',click4Correct)
    Pbtn3.removeEventListener('click',click4Wrong)

    Pbtn1.addEventListener('click',click5Wrong)
    Pbtn2.addEventListener('click',click5Correct)
    Pbtn3.addEventListener('click',click5Wrong)
    result2.textContent=`Score ${score2}`

 function click5Correct(){
    score2++
  finishQuiz2()
 }
 function click5Wrong(){
    finishQuiz2()
}}
function finishQuiz2() {
    secQuestion.textContent = "Quiz Finished! 🎉 Your final score is: " + score2 + " out of 5";
    result2.textContent = ''
    // يختفون الازره
    Pbtn1.style.display = "none";
    Pbtn2.style.display = "none";
    Pbtn3.style.display = "none";

    const winSound=new Audio('./audio/clap.mp3')
winSound.play()
}
re2.addEventListener('click',function() {
       window.location.href="index.html"

 }) 











