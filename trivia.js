let nextBtn = document.querySelector('.nextBtn')
 
let result=[]
let category=[]
let questionPage=document.querySelector('.page')
let currentQuestion = null
let currentCategory = null
let rightAns
function renderQuestion(){
    let randomNum = parseInt(Math.random()*result.length)
    let del = result.splice(randomNum,1)
    currentQuestion = del[0]
    console.log(currentQuestion.question)
    let p1 = document.getElementById("category")
    let p2 = document.getElementById("question")
    p1.innerHTML = currentQuestion.category
    p2.innerHTML = currentQuestion.question
   
   
   
    //answers
   
   
    for (let i = 0;i < 4;i++){
        let index = 1+i
        const currentChoices = [currentQuestion.correctAnswer,...currentQuestion.incorrectAnswers]
       // console.log(`answer${index}`)
       document.getElementById(`answer${index}`).innerHTML = currentChoices[i]
        //document.getElementById("answer1").innerText = currentChoices[0]
        let correctButton = document.getElementById("answer1")
        correctButton.onclick = function(){
               alert("Correct")
        }
        for (let i=2;i<5;i++){
      let incorrectButton = document.getElementById(`answer${[i]}`)
 
            incorrectButton.onclick = function(){
                alert("Incorrect")
            }
         
           
    }
       
    }
}
let url = 'https://api.trivia.willfry.co.uk/questions?categories=food_and_drink,movies,music,history&limit=5'
 
const xhr = new XMLHttpRequest()
//console.log(xhr)
xhr.open('GET',url)
 
xhr.onload =function() {
    result = JSON.parse(xhr.responseText)
    console.log(result)
   
 
   
 
 
    nextBtn.onclick = function(){
     
        renderQuestion()
    }
   
   
 
 
}
 
 
xhr.send()

