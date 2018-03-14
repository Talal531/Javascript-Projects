var questions = [{
            question: "How to declare variable in javascript?",
            choices: ["variable", "VAR", "vari", "var"],
            correctAnswer: "var"
        },

        {
            question: "What is correct syntax of alert?",
            choices: ["alert[]", "alert{}", "alert()", "alert[]"],
            correctAnswer: "alert()"
        },

        {
            question: "Which event occurs when the user clicks an HTML element?",
            choices: ["onMouseClick()", "onmouseclick()", "onFocus()", "onclick()"],
            correctAnswer: "onclick()"
        },

        {
            question: "Inside which HTML element do we put the JavaScript?",
            choices: ["&lt;js&gt;", "&lt;scripting&gt;", "&lt;script&gt;", "&lt;javascript&gt;"],
            correctAnswer: "&lt;script&gt;"
        },

        {
            question: "Where is the correct place to insert a JavaScript?",
            choices: ["The &lt;head&gt section", "The &lt;body&gt; section", "The &lt;title&gt; section", "Both &lt;head&gt; and &lt;body&gt; section"],
            correctAnswer: "Both &lt;head&gt; and &lt;body&gt; section"
        },

        {
            question: "What is the correct syntax for referring to an external script called 'main.js'?",
            choices: ["&lt;script name='main.js'&gt;", "&lt;script href='main.js'&gt;", "&lt;script src='main.js'&gt;", "&lt;script link='main.js'&gt;"],
            correctAnswer: "&lt;script src='main.js'&gt;"
        },

        {
            question: "How do you call a function named 'HelloWorld'?",
            choices: ["HelloWorld()", "call HelloWorld()", "call function HelloWorld", "None of the above"],
            correctAnswer: "HelloWorld()"
        },

        {
            question: "How to write an IF statement in JavaScript?",
            choices: ["if i = 2", "if i = 2 then", "if i == 2 then", "if(i == 2)"],
            correctAnswer: "if(i == 2)"
        },

        {
            question: "How to write an IF statement for executing some code if 'i' is NOT equal to 8?",
            choices: ["if(i != 8)", "if(i <> 8)", "if i =! 8", "ifi <> 8"],
            correctAnswer: "if(i != 8)"
        },

        // {
        //     question: "How does a WHILE loop start?",
        //     choices: ["while (i <= 4)", "while (i <= 4; i++)", "while i=1 to 4", "None of the above"],
        //     correctAnswer: "while (i <= 4)"
        // },

    ]
    //----------------------------------------
    // variable declaration
    //----------------------------------------
    //----start-------
function logOut() {
    var logOut_btn = document.getElementById('logOut_btn');
    window.location = "registerAndLogin.html";
}

var currentQuestion = 0;
var correctAnswer = 0;
var _question, choiceA, choiceB, choiceC, choiceD;

var questionEl = document.getElementById('question');
var choiceEl = document.getElementById('choiceList');
var nextButtonEl = document.getElementById('nextButton');
var quizMessageEl = document.getElementById('quizMessage');
var resultEl = document.getElementById('result');
var resultPerEl = document.getElementById('resultPercentage');

// var showName = document.getElementById('showName');
//----End-------


function loadQuestion() {


    // -----------------------------------------------------------------------
    // check Questions Length and show status/result after completed the test
    // -----------------------------------------------------------------------

    if (currentQuestion >= questions.length) {
        clearInterval(_interval); // stop timer after complete test with in time
        var percentage = (100 / questions.length) * correctAnswer;
        resultPerEl.style.display = 'inline-block';
        if (percentage < 60) {
            questionEl.innerHTML = "Sorry! You have Failed";
            questionEl.style.color = "#f00";
            resultEl.innerHTML = "<h2>Correct: <br>" + correctAnswer + "</h2>";
            resultPerEl.innerHTML = "<h1>" + percentage.toFixed(2) + "%" + "</h1>"
        } else {
            questionEl.innerHTML = "Congratulations! You have Passed";
            questionEl.style.color = "0f0";
            resultEl.innerHTML = "<h2>Correct: <br>" + correctAnswer + "</h2>"; // show your number of correct answer
            resultPerEl.innerHTML = "<h1>" + percentage.toFixed(2) + "%" + "</h1>" //show your percentage
        }

        // quizMessageEl.style.display = 'block';
        // quizMessageEl.innerHTML = "Test Completed";




        choiceEl.style.display = 'none';

        // resultEl.innerHTML = "<h2>Correct: <br>" + correctAnswer + "</h2>";

        nextButtonEl.style.display = 'none';
        currentQuestion = 0;
        correctAnswer = 0;
        return false;
    }


    // ----------------------------------------------------
    // Render Questions dynamically
    // ----------------------------------------------------

    //get values from object
    quizMessageEl.style.display = 'none';
    resultPerEl.style.display = 'none';
    _question = questions[currentQuestion].question;
    choiceA = questions[currentQuestion].choices[0];
    // console.log(choiceA);
    choiceB = questions[currentQuestion].choices[1];
    choiceC = questions[currentQuestion].choices[2];
    choiceD = questions[currentQuestion].choices[3];


    //display/render values
    questionEl.innerHTML = "Q." + (currentQuestion + 1) + " " + _question;
    choiceEl.innerHTML = "<label><input type='radio' name='Choices' value='A'/> " + choiceA + "</label>";
    choiceEl.innerHTML += "<label><input type='radio' name='Choices' value='C'/> " + choiceB + "</label>";
    choiceEl.innerHTML += "<label><input type='radio' name='Choices' value='B'/> " + choiceC + "</label>";
    choiceEl.innerHTML += "<label><input type='radio' name='Choices' value='D'/> " + choiceD + "</label>";
}


// ----------------------------------------------------
// check answers correct or not
// ----------------------------------------------------
function checkAnswer() {

    var selectOption = document.querySelector('input[type=radio]:checked');
    if (!selectOption) {
        quizMessageEl.style.display = "block";
        quizMessageEl.innerHTML = "Please select one option";
        return false;
    }


    var _ChoiceEl = document.getElementsByName('Choices'); //get all the options in a single variable
    quizMessageEl.style.display = "none";

    // console.log(_ChoiceEl);

    for (var i = 0; i < _ChoiceEl.length; i++) { //loop through them 
        if (_ChoiceEl[i].checked) { //and user Checked option 
            var userChoice = questions[currentQuestion].choices[i]; //save into variable
        }


    }

    if (userChoice == questions[currentQuestion].correctAnswer) { //check user checked option matches the correct answer?
        correctAnswer += 1; //if user option matches the correct answer add 1 into correct Answer
        // console.log(correctAnswer)
    } else {}

    currentQuestion++;
    loadQuestion();

}

window.addEventListener("load", loadQuestion, false);







///////////////////////////////////////////////////////
//        countdown  Timer
/////////////////////////////////////////////////////////
var counter = 0;
var timeLeft = 300;

function convertSecond(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;

    if (min == 0 && sec == 0) {
        // alert('timeout');
        choiceEl.style.display = 'none';
        nextButtonEl.style.display = 'none'
            // questionEl.innerHTML = "test terminated";
        quizMessageEl.style.display = "block";
        quizMessageEl.innerHTML = "Time Finished";

        var percentage = (100 / questions.length) * correctAnswer;
        resultPerEl.style.display = 'inline-block';
        if (percentage < 60) {
            questionEl.innerHTML = "Sorry! You have Failed";
            questionEl.style.color = "#f00";
            resultEl.innerHTML = "<h2>Correct: <br>" + correctAnswer + "</h2>";
            resultPerEl.innerHTML = "<h1>" + percentage.toFixed(2) + "%" + "</h1>"
        } else {
            questionEl.innerHTML = "Congratulations! You have Passed";
            questionEl.style.color = "0f0";
            resultEl.innerHTML = "<h2>Correct: <br>" + correctAnswer + "</h2>";
            resultPerEl.innerHTML = "<h1>" + percentage.toFixed(2) + "%" + "</h1>"
        }

        clearInterval(_interval);

    }

    return "0" + min + "min" + " : " + sec + "sec";

}



function setup() {

    var timer = document.getElementById('timer');
    timer.innerHTML = convertSecond(timeLeft - counter);

    function timeIT() {
        counter++;
        timer.innerHTML = convertSecond(timeLeft - counter);



    }
    _interval = setInterval(timeIT, 1000)
}
setup();