//TEST 1 MCQ 
var pos = 0,
    test, test_status, question, chA, chB, chC, chD, correct = 0;
// The above code is the various variables used in this work being declared as variables 
var questions = [
    ["What is the full meaning of CBN?", "Central Branch of Nigeria", "CBN", "Central Branch of Naija", "Central Bank of Nigeria", "D"],
    ["Who is the current CBN govenor?", "Soludo", "Emefiele", "Sanusi", "Lamido", "B"],
    ["Which of this is not a type of tax?", "Consumption Tax", "Value Removed Tax", "Property Tax", "Personal Income Tax", "B"],
    // ["What is a Dog's favorite Meal?", "Rice", "Beans", "Bone", "Cereals", "C"],
    // ["What is 10 * 3?", "30", "4", "14", "10", "A"]
    // This is a multidimensional array that takes in a list of questions with their options and correct answer.
];

var solutions = [
    [" What is the full meaning of CBN? <br><br><b>ANS= Central Bank of Nigeria</b> (Option D)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me a second."],
    ["Who is the current CBN govenor? <br><br><b>ANS= Emefiele</b> (Option B)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me a minute."],
    ["Which of this is not a type of tax? <br><br><b>ANS= Value Removed Tax</b> (Option B)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me an hour."],
    // ["What is 4 * 4? <br><br><b>ANS= 16</b> (Option A)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain how you add 10 and 4. Give me a minute."]
    // This is a multidimensional array that takes in a list of solutions for the questipns array above.
];


function _(x) {
    return document.getElementById(x);
    // This is a function that takes in a parameter which is an ID name.
}


function renderSolution() {
    // This is the function that will render each solutions one after the other.

    test = _("accttest1");
    // The variable test is given a value of the function whose parameter is the "test" ID. 
    // Refer to function _(x) to understand better.

    if (pos >= solutions.length) {
        _("accttest1_status").innerHTML = "End of Solutions.";
        test.innerHTML = "<h3></h3>"
        test.innerHTML += "<button onclick= 'renderQuestion()'> Take questions again </button>";
        test.innerHTML += "<a href= '../acctTest1/acctessay1.html'><button> Essay Questions </button></a>";
        test.innerHTML += "<a href= '../acctTest2/acctmcq2.html'><button> Go to Test 2 >> </button></a>";
        pos = 0;
        correct = 0;
        return false;
        // This allows for solutions to stop running after getting to the last no of question
        // as seen in the solutions array.
    }

    _("accttest1_status").innerHTML = "Solution " + (pos + 1) + " of " + solutions.length;
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

    test = _("accttest1");
    // The variable test is given a value of the function whose parameter is the "test" ID


    if (pos >= questions.length) {
        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2>";
        test.innerHTML += "<button onclick= 'renderSolution()'> Check Solutions </button>";
        test.innerHTML += "<a href= '../acctTest1/acctessay1.html'><button> Essay Questions </button></a>";
        test.innerHTML += "<a href= '../acctTest2/acctmcq2.html'><button> Go to Test 2 >> </button></a>";
        _("accttest1_status").innerHTML = "Test Completed"
        pos = 0;
        correct = 0;
        return false;
        // This allows for test to stop running and mark examinee after getting to the last no of question
        // as seen in the array. It also presents a button that allows one to either check solutions or go to next test.
    }

    test_status = _("accttest1_status")
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



// TEST 1 ESSAY
var pos1b = 0,
    test1b, test1b_status, question1b, cA, cB, cC, cD;
// The above code is the various variables used in this work being declared as variables 
var q_s1b = [
    ["List and explain the different types of Taxes you know.", "<u><b>Solution</b></u>", "According to FIRS there are nine(9) types of taxes in Nigeria: <br>Companies Income Tax (CIT), Petroleum Profit Tax(PPT), Value Added Tax (VAT), <br>Personal Income Tax (PIT), Withholding Tax (WHT), Educational Tax (EDT), <br>Stamp Duties (STD), Capital Gains Tax (CGT)"],
    ["List the past 5 governors of the Central bank of Nigeria.", "<u><b>Solution</b></u>", "Emefiele."],
    ["Why is it important to Study Accounting?", "<u><b>Solution</b></u>", "Value Removed Tax."],
    // ["What is a Dog's favorite Meal?", "Rice", "Beans", "Bone", "Cereals", "C"],
    // ["What is 10 * 3?", "30", "4", "14", "10", "A"]
    // This is a multidimensional array that takes in a list of questions with their options and correct answer.
];



function _(x) {
    return document.getElementById(x);
    // This is a function that takes in a parameter which is an ID name.
}



function renderQuestion1b() {
    // This is the function that will render each questions and options one after the other.

    test1b = _("accttest1b");
    // The variable test is given a value of the function whose parameter is the "test" ID
    if (pos1b >= q_s1b.length) {
        test1b.innerHTML = "<h2> Well-Done!</h2>";
        test1b.innerHTML += "<a href= '../acctTest1/acctmcq1.html'><button> MCQ Questions </button></a>";
        test1b.innerHTML += "<a href= '../acctTest2/acctTest2Home.html'><button> Go to Test 2 >> </button></a>";
        _("accttest1b_status").innerHTML = "Test Completed";
        pos1b = 0;
        return false;
    }

    test1b_status = _("accttest1b_status")
    test1b_status.innerHTML = "Question " + (pos1b + 1) + " of " + q_s1b.length;
    // This function is still the same as the one for _("test") and it's work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Question 1 to Question 2 and like that.

    question1b = q_s1b[pos1b][0];
    cA = q_s1b[pos1b][1];
    cB = q_s1b[pos1b][2];
    // These lines are stating that while position is at a particular number, question,chA,B,C should input
    // the various questions as aligned below and according to their index in the inner array in the solutions array.

    test1b.innerHTML = "<h2>" + question1b + "</h2>";
    test1b.innerHTML += "<h3>" + cA + "<br>" + "</h3>";
    test1b.innerHTML += cB + "<br>";
    test1b.innerHTML += "<button onclick= 'previousQuestion1b()'> Previous </button>";
    test1b.innerHTML += "<button onclick= 'checkAnswer1b()'> Next </button>";
    //This is just an arrangement of how the questions and options 
    // and buttons that will be called or displayed all through the test
}


function previousQuestion1b() {
    // This function is to allow one to go to previous Question from current question
    if (pos1b < 1) {
        // correct = 0;
        return false;
        // This conditional prevents the previous button from working if the position is less than 1
        // This helps to prevent an occurence such as Question 0 of 4
    }
    pos1b--;
    renderQuestion1b();
    // This is telling the page that when previousQuestion() is called,
    // it should go to previous position and render the question for that position.
}




function checkAnswer1b() {


    pos1b++;
    renderQuestion1b();

    // This is telling the page to go to next question and call the function "renderQuestion" again
}

window.addEventListener("load", renderQuestion1b, false);



//TEST 2 MCQ 
var pos2 = 0,
    test2, test2_status, question2, chA2, chB2, chC2, chD2, correct2 = 0;
// The above code is the various variables used in this work being declared as variables 
var questions2 = [
    ["What is the full meaning of .....?", "Central Branch of Nigeria", "CBN", "Central Branch of Naija", "Central Bank of Nigeria", "D"],
    ["Who is the current .....?", "Soludo", "Emefiele", "Sanusi", "Lamido", "B"],
    ["Which of this is not a type of .....?", "Consumption Tax", "Value Removed Tax", "Property Tax", "Personal Income Tax", "B"],
    // ["What is a Dog's favorite Meal?", "Rice", "Beans", "Bone", "Cereals", "C"],
    // ["What is 10 * 3?", "30", "4", "14", "10", "A"]
    // This is a multidimensional array that takes in a list of questions with their options and correct answer.
];

var solutions2 = [
    [" What is the full meaning of .......? <br><br><b>ANS= Central Bank of Nigeria</b> (Option D)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me a second."],
    ["Who is the current .......? <br><br><b>ANS= Emefiele</b> (Option B)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me a minute."],
    ["Which of this is not a type of .......? <br><br><b>ANS= Value Removed Tax</b> (Option B)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me an hour."],
    // ["What is 4 * 4? <br><br><b>ANS= 16</b> (Option A)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain how you add 10 and 4. Give me a minute."]
    // This is a multidimensional array that takes in a list of solutions for the questipns array above.
];


function _(x) {
    return document.getElementById(x);
    // This is a function that takes in a parameter which is an ID name.
}


function renderSolution2() {
    // This is the function that will render each solutions one after the other.

    test2 = _("accttest2");
    // The variable test is given a value of the function whose parameter is the "test" ID. 
    // Refer to function _(x) to understand better.

    if (pos2 >= solutions2.length) {
        _("accttest2_status").innerHTML = "End of Solutions.";
        test2.innerHTML = "<h3></h3>"
        test2.innerHTML += "<button onclick= 'renderQuestion2()'> Take questions again </button>";
        test2.innerHTML += "<a href= '../acctTest2/acctessay2.html'><button> Essay Questions </button></a>";
        test2.innerHTML += "<a href= '../acctTest3/acctTest3Home.html'><button> Go to Test 3 >> </button></a>";
        pos2 = 0;
        correct2 = 0;
        return false;
        // This allows for solutions to stop running after getting to the last no of question
        // as seen in the solutions array.
    }

    _("accttest2_status").innerHTML = "Solution " + (pos2 + 1) + " of " + solutions2.length;
    // This function is still the same as the one for _("test") and its work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Solution 1 to Solution 2 and like that.

    solution2 = solutions2[pos2][0];
    chA2 = solutions2[pos2][1];
    chB2 = solutions2[pos2][2];
    // These lines are stating that while position is at a particular number(e.g pos 1), solution,chA,B should input
    // the various solutions as aligned below and according to their index in the inner array in the solutions array.

    test2.innerHTML = "<h3>" + solution2 + "</h3>";
    test2.innerHTML += "<h3>" + chA2 + "</h3>";
    test2.innerHTML += "<h3>" + chB2 + "</h3>";
    test2.innerHTML += "<button onclick= 'previousSolution2()'> Previous </button>";
    test2.innerHTML += "<button onclick= 'checkSolution2()'> Next </button>";
    //This is just an arrangement of how the solutions and buttons that will be called or displayed all through the test.
}

function previousSolution2() {
    // This function is to allow one to go to previous solution from current solution
    // test = _("test"); 
    if (pos2 < 1) {
        // correct = 0;
        return false;
        // This conditional prevents the previous button from working if the position is less than 1
        // This helps to prevent an occurence such as Solution 0 of 4
    }

    pos2--;
    renderSolution2();
    // This is telling the page that when previousSolution() is called,
    // it should go to previous position and render the solution for that position.
}

function checkSolution2() {
    for (var i = 0; i <= solutions2.length; i++) {
        pos2++
        renderSolution2();
        // This is telling the page to go to next position and call the function "renderSolution"  for that position
    }
}

function renderQuestion2() {
    // This is the function that will render each questions and options one after the other.

    test2 = _("accttest2");
    // The variable test is given a value of the function whose parameter is the "test" ID


    if (pos2 >= questions2.length) {
        test2.innerHTML = "<h2> You got " + correct2 + " of " + questions2.length + " questions correct</h2>";
        test2.innerHTML += "<button onclick= 'renderSolution2()'> Check Solutions </button>";
        test2.innerHTML += "<a href= '../acctTest2/acctessay2.html'><button> Essay Questions </button></a>";
        test2.innerHTML += "<a href= '../acctTest3/acctmcq3.html'><button> Go to Test 3 >> </button></a>";
        _("accttest2_status").innerHTML = "Test Completed"
        pos2 = 0;
        correct2 = 0;
        return false;
        // This allows for test to stop running and mark examinee after getting to the last no of question
        // as seen in the array. It also presents a button that allows one to either check solutions or go to next test.
    }

    test2_status = _("accttest2_status")
    test2_status.innerHTML = "Question " + (pos2 + 1) + " of " + questions2.length;
    // This function is still the same as the one for _("test") and it's work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Question 1 to Question 2 and like that.

    question2 = questions2[pos2][0];
    chA2 = questions2[pos2][1];
    chB2 = questions2[pos2][2];
    chC2 = questions2[pos2][3];
    chD2 = questions2[pos2][4];
    // These lines are stating that while position is at a particular number, question,chA,B,C should input
    // the various questions as aligned below and according to their index in the inner array in the solutions array.

    test2.innerHTML = "<h3>" + question2 + "</h3>";
    test2.innerHTML += "A) " + chA2 + "    <input type = 'radio' name = 'choices2' value = 'A'> " + " <br>";
    test2.innerHTML += "B) " + chB2 + "    <input type = 'radio' name = 'choices2' value = 'B'> " + " <br>";
    test2.innerHTML += "C) " + chC2 + "    <input type = 'radio' name = 'choices2' value = 'C'> " + " <br>";
    test2.innerHTML += "D) " + chD2 + "    <input type = 'radio' name = 'choices2' value = 'D'> " + " <br>";
    test2.innerHTML += "<button onclick= 'previousQuestion2()'> Previous </button>";
    test2.innerHTML += "<button onclick= 'checkAnswer2()'> Next </button>";
    //This is just an arrangement of how the questions and options 
    // and buttons that will be called or displayed all through the test
}


function previousQuestion2() {
    // This function is to allow one to go to previous Question from current question
    if (pos2 < 1) {
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

    pos2--;
    renderQuestion2();
    // This is telling the page that when previousQuestion() is called,
    // it should go to previous position and render the question for that position.
}




function checkAnswer2() {
    var choices2 = document.getElementsByName("choices2");
    for (var i = 0; i < choices2.length; i++) {

        if (choices2[i].checked) {

            var choice2 = choices2[i].value;
            if (choice2 == questions2[pos2][5]) {
                correct2++;
            }
        }
        // The var choices is given a value to check options with names "choices" and 
        // treat them as an array and also that when these choices array are checked, a choice is determined by it's value "A,B,C".



        // but when the choice value is equal to the value for answer on the questions array, 
        // the number of "CORRECT" should increase.
    }
    pos2++;
    renderQuestion2();

    // This is telling the page to go to next question and call the function "renderQuestion" again
}

window.addEventListener("load", renderQuestion2, false);



// TEST 2 ESSAY
var pos2b = 0,
    test2b, test2b_status, question2b, c2A, c2B, c2C, c2D;
// The above code is the various variables used in this work being declared as variables 
var q_s2b = [
    ["List and explain.................", "<u><b>Solution</b></u>", "There are nine(9) types of taxes in Nigeria: <br>Companies Income Tax (CIT), Petroleum Profit Tax(PPT), Value Added Tax (VAT), <br>Personal Income Tax (PIT), Withholding Tax (WHT), Educational Tax (EDT), <br>Stamp Duties (STD), Capital Gains Tax (CGT)"],
    ["Past 5 governors of the Central bank of Nigeria..........", "<u><b>Solution</b></u>", ""],
    ["Should one study Accounting?", "<u><b>Solution</b></u>", "Maybe, Maybe Not."],
    // ["What is a Dog's favorite Meal?", "Rice", "Beans", "Bone", "Cereals", "C"],
    // ["What is 10 * 3?", "30", "4", "14", "10", "A"]
    // This is a multidimensional array that takes in a list of questions with their options and correct answer.
];



function _(x) {
    return document.getElementById(x);
    // This is a function that takes in a parameter which is an ID name.
}



function renderQuestion2b() {
    // This is the function that will render each questions and options one after the other.

    test2b = _("accttest2b");
    // The variable test is given a value of the function whose parameter is the "test" ID
    if (pos2b >= q_s2b.length) {
        test2b.innerHTML = "<h2> Well-Done!</h2>";
        test2b.innerHTML += "<a href= '../acctTest2/acctmcq2.html'><button> MCQ Questions </button></a>";
        test2b.innerHTML += "<a href= '../acctTest3/acctTest3Home.html'><button> Go to Test 3 >> </button></a>";
        _("accttest2b_status").innerHTML = "Test Completed";
        pos2b = 0;
        return false;
    }

    test2b_status = _("accttest2b_status")
    test2b_status.innerHTML = "Question " + (pos2b + 1) + " of " + q_s2b.length;
    // This function is still the same as the one for _("test") and it's work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Question 1 to Question 2 and like that.

    question2b = q_s2b[pos2b][0];
    c2A = q_s2b[pos2b][1];
    c2B = q_s2b[pos2b][2];
    // These lines are stating that while position is at a particular number, question,chA,B,C should input
    // the various questions as aligned below and according to their index in the inner array in the solutions array.

    test2b.innerHTML = "<h2>" + question2b + "</h2>";
    test2b.innerHTML += "<h3>" + c2A + "<br>" + "</h3>";
    test2b.innerHTML += c2B + "<br>";
    test2b.innerHTML += "<button onclick= 'previousQuestion2b()'> Previous </button>";
    test2b.innerHTML += "<button onclick= 'checkAnswer2b()'> Next </button>";
    //This is just an arrangement of how the questions and options 
    // and buttons that will be called or displayed all through the test
}


function previousQuestion2b() {
    // This function is to allow one to go to previous Question from current question
    if (pos2b < 1) {
        // correct = 0;
        return false;
        // This conditional prevents the previous button from working if the position is less than 1
        // This helps to prevent an occurence such as Question 0 of 4
    }
    pos2b--;
    renderQuestion2b();
    // This is telling the page that when previousQuestion() is called,
    // it should go to previous position and render the question for that position.
}




function checkAnswer2b() {


    pos2b++;
    renderQuestion2b();

    // This is telling the page to go to next question and call the function "renderQuestion" again
}

window.addEventListener("load", renderQuestion2b, false);


//TEST 3 MCQ 
var pos3 = 0,
    test3, test3_status, question3, chA3, chB3, chC3, chD3, correct3 = 0;
// The above code is the various variables used in this work being declared as variables 
var questions3 = [
    ["The process of transferring entries from journal to ledger account is?", "Journalising", "Posting", "Summarising", "Single accounting", "B"],
    ["Creditors' accounts are kept in the?", "Sales ledger", "General ledger", "Private ledger", "Purchases ledger", "D"],
    ["Recording of transactions in accounting is known as?", "Data processing", "Balancing of accounts", "Book keeping", "Reconciliation", "C"],
    // ["What is a Dog's favorite Meal?", "Rice", "Beans", "Bone", "Cereals", "C"],
    // ["What is 10 * 3?", "30", "4", "14", "10", "A"]
    // This is a multidimensional array that takes in a list of questions with their options and correct answer.
];

var solutions3 = [
    ["The process of transferring entries from journal to ledger account is? <br><br><b>ANS= .......</b> (Option B)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me a second."],
    ["Creditors' accounts are kept in the? <br><br><b>ANS= ......</b> (Option D)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me a minute."],
    ["Recording of transactions in accounting is known as? <br><br><b>ANS= Value Removed Tax</b> (Option C)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain the solution. Give me an hour."],
    // ["What is 4 * 4? <br><br><b>ANS= 16</b> (Option A)", "<br><u><b>Explanation</b></u>", "I probably should use this space to explain how you add 10 and 4. Give me a minute."]
    // This is a multidimensional array that takes in a list of solutions for the questipns array above.
];


function _(x) {
    return document.getElementById(x);
    // This is a function that takes in a parameter which is an ID name.
}


function renderSolution3() {
    // This is the function that will render each solutions one after the other.

    test3 = _("accttest3");
    // The variable test is given a value of the function whose parameter is the "test" ID. 
    // Refer to function _(x) to understand better.

    if (pos3 >= solutions3.length) {
        _("accttest3_status").innerHTML = "End of Solutions.";
        test3.innerHTML = "<h3></h3>"
        test3.innerHTML += "<button onclick= 'renderQuestion3()'> Take questions again </button>";
        test3.innerHTML += "<a href= '../acctTest3/acctessay3.html'><button> Essay Questions </button></a>";
        test3.innerHTML += "<a href= '#'><button> Go to Test 4 >> </button></a>";
        pos3 = 0;
        correct3 = 0;
        return false;
        // This allows for solutions to stop running after getting to the last no of question
        // as seen in the solutions array.
    }

    _("accttest3_status").innerHTML = "Solution " + (pos3 + 1) + " of " + solutions3.length;
    // This function is still the same as the one for _("test") and its work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Solution 1 to Solution 2 and like that.

    solution3 = solutions3[pos3][0];
    chA3 = solutions3[pos3][1];
    chB3 = solutions3[pos3][2];
    // These lines are stating that while position is at a particular number(e.g pos 1), solution,chA,B should input
    // the various solutions as aligned below and according to their index in the inner array in the solutions array.

    test3.innerHTML = "<h3>" + solution3 + "</h3>";
    test3.innerHTML += "<h3>" + chA3 + "</h3>";
    test3.innerHTML += "<h3>" + chB3 + "</h3>";
    test3.innerHTML += "<button onclick= 'previousSolution3()'> Previous </button>";
    test3.innerHTML += "<button onclick= 'checkSolution3()'> Next </button>";
    //This is just an arrangement of how the solutions and buttons that will be called or displayed all through the test.
}

function previousSolution3() {
    // This function is to allow one to go to previous solution from current solution
    // test = _("test"); 
    if (pos3 < 1) {
        // correct = 0;
        return false;
        // This conditional prevents the previous button from working if the position is less than 1
        // This helps to prevent an occurence such as Solution 0 of 4
    }

    pos3--;
    renderSolution3();
    // This is telling the page that when previousSolution() is called,
    // it should go to previous position and render the solution for that position.
}

function checkSolution3() {
    for (var i = 0; i <= solutions3.length; i++) {
        pos3++
        renderSolution3();
        // This is telling the page to go to next position and call the function "renderSolution"  for that position
    }
}

function renderQuestion3() {
    // This is the function that will render each questions and options one after the other.

    test3 = _("accttest3");
    // The variable test is given a value of the function whose parameter is the "test" ID


    if (pos3 >= questions3.length) {
        test3.innerHTML = "<h2> You got " + correct3 + " of " + questions3.length + " questions correct</h2>";
        test3.innerHTML += "<button onclick= 'renderSolution3()'> Check Solutions </button>";
        test3.innerHTML += "<a href= '../acctTest3/acctessay3.html'><button> Essay Questions </button></a>";
        test3.innerHTML += "<a href= '#'><button> Go to Test 4 >> </button></a>";
        _("accttest2_status").innerHTML = "Test Completed"
        pos3 = 0;
        correct3 = 0;
        return false;
        // This allows for test to stop running and mark examinee after getting to the last no of question
        // as seen in the array. It also presents a button that allows one to either check solutions or go to next test.
    }

    test3_status = _("accttest3_status")
    test3_status.innerHTML = "Question " + (pos3 + 1) + " of " + questions3.length;
    // This function is still the same as the one for _("test") and it's work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Question 1 to Question 2 and like that.

    question3 = questions3[pos3][0];
    chA3 = questions3[pos3][1];
    chB3 = questions3[pos3][2];
    chC3 = questions3[pos3][3];
    chD3 = questions3[pos3][4];
    // These lines are stating that while position is at a particular number, question,chA,B,C should input
    // the various questions as aligned below and according to their index in the inner array in the solutions array.

    test3.innerHTML = "<h3>" + question3 + "</h3>";
    test3.innerHTML += "A) " + chA3 + "    <input type = 'radio' name = 'choices3' value = 'A'> " + " <br>";
    test3.innerHTML += "B) " + chB3 + "    <input type = 'radio' name = 'choices3' value = 'B'> " + " <br>";
    test3.innerHTML += "C) " + chC3 + "    <input type = 'radio' name = 'choices3' value = 'C'> " + " <br>";
    test3.innerHTML += "D) " + chD3 + "    <input type = 'radio' name = 'choices3' value = 'D'> " + " <br>";
    test3.innerHTML += "<button onclick= 'previousQuestion3()'> Previous </button>";
    test3.innerHTML += "<button onclick= 'checkAnswer3()'> Next </button>";
    //This is just an arrangement of how the questions and options 
    // and buttons that will be called or displayed all through the test
}


function previousQuestion3() {
    // This function is to allow one to go to previous Question from current question
    if (pos3 < 1) {
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

    pos3--;
    renderQuestion3();
    // This is telling the page that when previousQuestion() is called,
    // it should go to previous position and render the question for that position.
}




function checkAnswer3() {
    var choices3 = document.getElementsByName("choices3");
    for (var i = 0; i < choices3.length; i++) {

        if (choices3[i].checked) {

            var choice3 = choices3[i].value;
            if (choice3 == questions3[pos3][5]) {
                correct3++;
            }
        }
        // The var choices is given a value to check options with names "choices" and 
        // treat them as an array and also that when these choices array are checked, a choice is determined by it's value "A,B,C".



        // but when the choice value is equal to the value for answer on the questions array, 
        // the number of "CORRECT" should increase.
    }
    pos3++;
    renderQuestion3();

    // This is telling the page to go to next question and call the function "renderQuestion" again
}

window.addEventListener("load", renderQuestion3, false);



// TEST 3 ESSAY
var pos3b = 0,
    test3b, test3b_status, question3b, c3A, c3B, c3C, c3D;
// The above code is the various variables used in this work being declared as variables 
var q_s3b = [
    ["State five features of an income and expenditure account", "<u><b>Solution</b></u>", "The five features of an income and expenditure account is ........"],
    ["Explain Liquidity ratios", "<u><b>Solution</b></u>", "Liquidity ratios are ..........."],
    ["Explain Capital reserves", "<u><b>Solution</b></u>", "Capital reserves are ........"],
    // ["What is a Dog's favorite Meal?", "Rice", "Beans", "Bone", "Cereals", "C"],
    // ["What is 10 * 3?", "30", "4", "14", "10", "A"]
    // This is a multidimensional array that takes in a list of questions with their options and correct answer.
];



function _(x) {
    return document.getElementById(x);
    // This is a function that takes in a parameter which is an ID name.
}



function renderQuestion3b() {
    // This is the function that will render each questions and options one after the other.

    test3b = _("accttest3b");
    // The variable test is given a value of the function whose parameter is the "test" ID
    if (pos3b >= q_s3b.length) {
        test3b.innerHTML = "<h2> Well-Done!</h2>";
        test3b.innerHTML += "<a href= '../acctTest3/acctmcq3.html'><button> MCQ Questions </button></a>";
        test3b.innerHTML += "<a href= '#'><button> Go to Test 4 >> </button></a>";
        _("accttest3b_status").innerHTML = "Test Completed";
        pos3b = 0;
        return false;
    }

    test3b_status = _("accttest3b_status")
    test3b_status.innerHTML = "Question " + (pos3b + 1) + " of " + q_s3b.length;
    // This function is still the same as the one for _("test") and it's work is to change the innerHTML to the new value.
    // The new value (pos) changes after clicking next hence test status changes from Question 1 to Question 2 and like that.

    question3b = q_s3b[pos3b][0];
    c3A = q_s3b[pos3b][1];
    c3B = q_s3b[pos3b][2];
    // These lines are stating that while position is at a particular number, question,chA,B,C should input
    // the various questions as aligned below and according to their index in the inner array in the solutions array.

    test3b.innerHTML = "<h2>" + question3b + "</h2>";
    test3b.innerHTML += "<h3>" + c3A + "<br>" + "</h3>";
    test3b.innerHTML += c3B + "<br>";
    test3b.innerHTML += "<button onclick= 'previousQuestion3b()'> Previous </button>";
    test3b.innerHTML += "<button onclick= 'checkAnswer3b()'> Next </button>";
    //This is just an arrangement of how the questions and options 
    // and buttons that will be called or displayed all through the test
}


function previousQuestion3b() {
    // This function is to allow one to go to previous Question from current question
    if (pos3b < 1) {
        // correct = 0;
        return false;
        // This conditional prevents the previous button from working if the position is less than 1
        // This helps to prevent an occurence such as Question 0 of 4
    }
    pos3b--;
    renderQuestion3b();
    // This is telling the page that when previousQuestion() is called,
    // it should go to previous position and render the question for that position.
}


function checkAnswer3b() {


    pos3b++;
    renderQuestion3b();

    // This is telling the page to go to next question and call the function "renderQuestion" again
}

window.addEventListener("load", renderQuestion3b, false);