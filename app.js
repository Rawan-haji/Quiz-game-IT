//getelementbyid means that connect js and html also search to match for the id
const letstart = document.getElementById('start-btn');
// addEventListener for example the user will click the the code will work
if(letstart){
    letstart.addEventListener('click',(element)=>{
        window.location.href="category.html"
    })
}
//for next page computer basics
const computerBasic=document.getElementById('computer-btn');
if(computerBasic){
    computerBasic.addEventListener('click',(element)=>{
        window.location.href="computer.html"
    })
}

//for next page programming
const programmingPage=document.getElementById('programming-btn');
if(programmingPage){
    programmingPage.addEventListener('click',(element)=>{
        window.location.href="programming.html"
    })
}