function loadQuestion(){if(currentQuestion>=questions.length)return questionEl.innerHTML="Thank You..!",quizMessageEl.style.display="block",quizMessageEl.innerHTML="Test Completed",choiceEl.style.display="none",nextButtonEl.style.display="none",currentQuestion=0,!1;quizMessageEl.style.display="none",_question=questions[currentQuestion].question,choiceA=questions[currentQuestion].choices[0],choiceB=questions[currentQuestion].choices[1],choiceC=questions[currentQuestion].choices[2],choiceD=questions[currentQuestion].choices[3],questionEl.innerHTML="Q."+(currentQuestion+1)+" "+_question,choiceEl.innerHTML="<label><input type='radio' name='Choices' value='A'/> "+choiceA+"</label>",choiceEl.innerHTML+="<label><input type='radio' name='Choices' value='C'/> "+choiceC+"</label>",choiceEl.innerHTML+="<label><input type='radio' name='Choices' value='B'/> "+choiceB+"</label>",choiceEl.innerHTML+="<label><input type='radio' name='Choices' value='D'/> "+choiceD+"</label>"}function checkAnswer(){currentQuestion++,console.log(currentQuestion),loadQuestion()}var questions=[{question:"How to declare variable in javascript?",choices:["variable","VAR","vari","var"],correctAnswer:3},{question:"What is correct syntax of alert?",choices:["alert[]","alert{}","alert()","alert[]"],correctAnswer:2},{question:"What is the event of click function?",choices:["onMouseClick()","onmouseclick()","onclick","onclick()"],correctAnswer:3},{question:"What is the event of click function?",choices:["onMouseClick()","onmouseclick()","onclick","onclick()"],correctAnswer:3},{question:"What is the event of click function?",choices:["onMouseClick()","onmouseclick()","onclick","onclick()"],correctAnswer:3}],currentQuestion=0,correctAnswer=0,quizOver=!1,_question,choiceA,choiceB,choiceC,choiceD,questionEl=document.getElementById("question"),choiceEl=document.getElementById("choiceList"),nextButtonEl=document.getElementById("nextButton"),quizMessageEl=document.getElementById("quizMessage");window.addEventListener("load",loadQuestion,!1);