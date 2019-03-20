var pos = 0,
    test, test_status, question, chA, chB, chC, chD, correct = 0;
// The above code is the various variables used in this work being declared as variables 
var questions = [
    ["What is 10 + 4? Ps: I am just populating the rest of this question 1 to see the effect long questions have on the responsiveness of the page. So, kindly ignore this and check options.", "12", "14", "13", "10", "B"],
    ["What is 10 + 3?", "12", "4", "11", "13", "D"],
    ["What is 10 - 3?", "4", "7", "14", "10", "B"],
    ["What is a Dog's favorite Meal?", "Rice", "Beans", "Bone", "Cereals", "C"],
    ["What is 10 * 3?", "30", "4", "14", "10", "A"]
    // This is a multidimensional array that takes in a list of questions with their options and correct answer.
];

var solutions = [
    ["What is 10 + 4? Ps: I am just populating the rest of this question 1 to see the effect long questions have on the responsiveness of the page. So, kindly ignore this and check options. <br><br><b>ANS= 14</b> (Option A)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain how you add 10 and 4. Give me a minute."],
    ["What is 2 * 4? Ps: I am just populating the rest of this question 1 for no reason. <br><br><b>ANS= 8</b> (Option C)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain how you add 10 and 4. Give me a minute."],
    ["What is 10 - 3? So, kindly ignore this and check options. <br><br><b>ANS= 7</b> (Option E)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain how you add 10 and 4. Give me a minute."],
    ["What is 4 * 4? <br><br><b>ANS= 16</b> (Option A)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain how you add 10 and 4. Give me a minute."]
    // This is a multidimensional array that takes in a list of solutions for the questipns array above.
];


function _(x) {
    return document.getElementById(x);
    // This is a function that takes in a parameter which is an ID name.
}


function renderSolution() {
    // This is the function that will render each solutions one after the other.

    test = _("test");
    // The variable test is given a value of the function whose parameter is the "test" ID. 
    // Refer to function _(x) to understand better.

    if (pos >= solutions.length) {
        _("test_status").innerHTML = "End of Solutions.";
        test.innerHTML = "<h3></h3>"
        test.innerHTML += "<button onclick= 'renderQuestion()'> Take questions again </button>";
        test.innerHTML += "<a href= 'paper1_test2.html'><button> Go to Test 2 >> </button></a>";
        pos = 0;
        correct = 0;
        return false;
        // This allows for solutions to stop running after getting to the last no of question
        // as seen in the solutions array.
    }

    _("test_status").innerHTML = "Solution " + (pos + 1) + " of " + solutions.length;
    // This function is still the same as the one for _("test") and its work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Solution 1 to Solution 2 and like that.

    solution = solutions[pos][0];
    chA = solutions[pos][1];
    chB = solutions[pos][2];
    // These lines are stating that while position is at a particular number(e.g pos 1), solution,chA,B should input
    // the various solutions as aligned below and according to their index in the inner array in the solutions array.

    test.innerHTML = "<h3>" + solution + "</h3>";
    test.innerHTML += "<h3>" + chA + "</h3>";
    test.innerHTML += "<h3>" + chB + "</h3>";
    test.innerHTML += "<button onclick= 'previousSolution()'> Previous </button>";
    test.innerHTML += "<button onclick= 'checkSolution()'> Next </button>";
    //This is just an arrangement of how the solutions and buttons that will be called or displayed all through the test.
}

function previousSolution() {
    // This function is to allow one to go to previous solution from current solution
    // test = _("test"); 
    if (pos < 1) {
        // correct = 0;
        return false;
        // This conditional prevents the previous button from working if the position is less than 1
        // This helps to prevent an occurence such as Solution 0 of 4
    }

    pos--;
    renderSolution();
    // This is telling the page that when previousSolution() is called,
    // it should go to previous position and render the solution for that position.
}

function checkSolution() {
    for (var i = 0; i <= solutions.length; i++) {
        pos++
        renderSolution();
        // This is telling the page to go to next position and call the function "renderSolution"  for that position
    }
}

function renderQuestion() {
    // This is the function that will render each questions and options one after the other.

    test = _("test");
    // The variable test is given a value of the function whose parameter is the "test" ID


    if (pos >= questions.length) {
        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2>";
        test.innerHTML += "<button onclick= 'renderSolution()'> Check Solutions </button>";
        test.innerHTML += "<a href= 'paper1_test2.html'><button> Go to Test 2 >> </button></a>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
        // This allows for test to stop running and mark examinee after getting to the last no of question
        // as seen in the array. It also presents a button that allows one to either check solutions or go to next test.
    }

    test_status = _("test_status")
    test_status.innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    // This function is still the same as the one for _("test") and it's work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Question 1 to Question 2 and like that.

    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    // These lines are stating that while position is at a particular number, question,chA,B,C should input
    // the various questions as aligned below and according to their index in the inner array in the solutions array.

    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "A) " + chA + "    <input type = 'radio' name = 'choices' value = 'A'> " + " <br>";
    test.innerHTML += "B) " + chB + "    <input type = 'radio' name = 'choices' value = 'B'> " + " <br>";
    test.innerHTML += "C) " + chC + "    <input type = 'radio' name = 'choices' value = 'C'> " + " <br>";
    test.innerHTML += "D) " + chD + "    <input type = 'radio' name = 'choices' value = 'D'> " + " <br>";
    test.innerHTML += "<button onclick= 'previousQuestion()'> Previous </button>";
    test.innerHTML += "<button onclick= 'checkAnswer()'> Next </button>";
    //This is just an arrangement of how the questions and options 
    // and buttons that will be called or displayed all through the test
}


function previousQuestion() {
    // This function is to allow one to go to previous Question from current question
    if (pos < 1) {
        // correct = 0;
        return false;
        // This conditional prevents the previous button from working if the position is less than 1
        // This helps to prevent an occurence such as Question 0 of 4
    }

    // for (var i = 0; i > pos; i++) {
    //     test = _("test");
    //     choices = document.getElementsByName("choices");

    //     if (pos <= questions.length) {
    //         test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2>";
    //         test.innerHTML += "<button onclick= 'renderSolutions()'> Check Solutions </button>";
    //         test.innerHTML += "<button onclick= ''> Take Test 2 </button>";
    //         _("test_status").innerHTML = "Test Completed";
    //         pos = 0;
    //         correct = 0;
    //         return false;
    //     }
    // }

    pos--;
    renderQuestion();
    // This is telling the page that when previousQuestion() is called,
    // it should go to previous position and render the question for that position.
}




function checkAnswer() {
    var choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {

        if (choices[i].checked) {

            var choice = choices[i].value;
            if (choice == questions[pos][5]) {
                correct++;
            }
        }
        // The var choices is given a value to check options with names "choices" and 
        // treat them as an array and also that when these choices array are checked, a choice is determined by it's value "A,B,C".



        // but when the choice value is equal to the value for answer on the questions array, 
        // the number of "CORRECT" should increase.
    }
    pos++;
    renderQuestion();

    // This is telling the page to go to next question and call the function "renderQuestion" again
}

window.addEventListener("load", renderQuestion, false);