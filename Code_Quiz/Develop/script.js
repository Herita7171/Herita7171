var quiz = document.querySelector(".quiz-content");
var startButton = document.querySelector(".btn");
startButton.style.marginTop = "24px";
var title = document.querySelector("#title");
var content = document.querySelector("#content");
var checkScore = document.querySelector("#checkScore");
var timerElement = document.querySelector(".timer-text");
var topNav = document.querySelector("#topNav");
var border = document.querySelector(".border");
var scoreBoard = document.createElement("p");
var ansPrompt = document.createElement("p");
ansPrompt.className = "text-muted";
ansPrompt.style.fontStyle = "italic";
ansPrompt.style.padding = "0px";
ansPrompt.style.marginLeft = "25px";
ansPrompt.style.marginBottom = "30px";
ansPrompt.style.borderTop = "0px";
border.appendChild(ansPrompt);

var timerCount = 90;
var index = 1;
var totalScores = 0;
var hasFinished = false;
var wrongAns = false;
var newDiv = document.createElement("div");
newDiv.className = "d-flex flex-row align-items-center question-title";
quiz.appendChild(newDiv);
var mark;
var question;
var listGroup;
var ans1;
var ans2;
var ans3;
var ans4;
var dashboard = document.createElement("div");
var result = document.createElement("p");
var form = document.createElement("form");
var initialInput = document.createElement("div");
var input = document.createElement("label");
input.style.padding = "0px";
input.style.border = "0px";
input.style.marginLeft = "9px";
input.setAttribute("for", "initialInput");
input.textContent = "Enter initials:";
var typedText = document.createElement("input");
typedText.setAttribute("type", "text");
typedText.setAttribute("id", "userInitials");
typedText.className = "form-control";
var submitBtn = document.createElement("button");
submitBtn.className = "btn btn-primary";
submitBtn.setAttribute("type", "submit");
submitBtn.textContent = "Submit";
initialInput.appendChild(input);
initialInput.appendChild(typedText);
form.appendChild(initialInput);
var empty = document.createElement("br");
form.appendChild(empty);
form.appendChild(submitBtn);

// array to store all the questions
var questions = ["Which tag is an extension to HTML that can enclose any number of JavaScript statements?",
                 "Choose the server-side JavaScript object?",
                 "Choose the client-side JavaScript object?",
                 "Which of the following is not considered a JavaScript operator?",
                 "Using which statement is how you test for a specific condition?",
                 "Which of the following best describes JavaScript?",
                 "Which of the following best describes JavaScript?"];
var ansLetters = ["A", "B", "C", "D"];
var solutions = ["A", "C", "D", "B", "B", "D"];
var scores = [1, 2, 2, 1, 2, 2];
var keys1 = ["<SCRIPT>", " <BODY>", "<HEAD>", " <TITLE>"];
var keys2 = ["FileUpLoad", "Function", "File", "Date"];
var keys3 = ["Database", "Cursor", "Client", "FileUpLoad"];
var keys4 = ["new", "this", "delete", "typeof"];
var keys5 = ["Select", "If", "Switch", "For"];
var keys6 = ["a low-level programming language.", "a scripting language precompiled in the browser.", "a compiled scripting language.", "an object-oriented scripting language."];
var keysArray = [keys1, keys2, keys3, keys4, keys5, keys6];

// updates web page content as the user clicks an answer
function updatePage() {
    title.style.display = "none";
    content.style.display = "none";
    startButton.remove();
    checkScore.onclick = null;
    document.getElementById("checkScore").style.color = "#696969";
    mark = document.createElement("h3");
    mark.className = "text-warning";
    mark.textContent = "Q.";
    question = document.createElement("h5");
    question.className = "mt-1 ml-2";
    question.textContent = questions[0];
    newDiv.appendChild(mark);
    newDiv.appendChild(question);
    listGroup = document.createElement("ul");
    listGroup.className = "list-group";

    ans1 = document.createElement("li");
    ans1.className = "list-group-item ml-2";
    ans1.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "orange";
    });
    ans1.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "white";
    });
    ans1.onclick = function() {
        if (index < 6) {
            question.textContent = questions[index];
            ans1.textContent = "A." + "\xa0\xa0\xa0\xa0" + keysArray[index][0];
            ans2.textContent = "B." + "\xa0\xa0\xa0\xa0" + keysArray[index][1];
            ans3.textContent = "C." + "\xa0\xa0\xa0\xa0" + keysArray[index][2];
            ans4.textContent = "D." + "\xa0\xa0\xa0\xa0" + keysArray[index][3];
            if (solutions[index - 1] === "A") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            index++;
        } else if (index >= 6) {
            if (solutions[index - 1] === "A") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            hasFinished = true;
        }
    }
    ans1.textContent = "A." + "\xa0\xa0\xa0\xa0" + keys1[0];

    ans2 = document.createElement("li");
    ans2.className = "list-group-item ml-2";
    ans2.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "orange";
    });
    ans2.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "white";
    });
    ans2.onclick = function() {
        if (index < 6) {
            question.textContent = questions[index];
            ans1.textContent = "A." + "\xa0\xa0\xa0\xa0" + keysArray[index][0];
            ans2.textContent = "B." + "\xa0\xa0\xa0\xa0" + keysArray[index][1];
            ans3.textContent = "C." + "\xa0\xa0\xa0\xa0" + keysArray[index][2];
            ans4.textContent = "D." + "\xa0\xa0\xa0\xa0" + keysArray[index][3];
            if (solutions[index - 1] === "B") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            index++;
        } else if (index >= 6) {
            if (solutions[index - 1] === "B") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            hasFinished = true;
        }
    }
    ans2.textContent = "B." + "\xa0\xa0\xa0\xa0" + keys1[1];

    ans3 = document.createElement("li");
    ans3.className = "list-group-item ml-2";
    ans3.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "orange";
    });
    ans3.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "white";
    });
    ans3.onclick = function() {
        if (index < 6) {
            question.textContent = questions[index];
            ans1.textContent = "A." + "\xa0\xa0\xa0\xa0" + keysArray[index][0];
            ans2.textContent = "B." + "\xa0\xa0\xa0\xa0" + keysArray[index][1];
            ans3.textContent = "C." + "\xa0\xa0\xa0\xa0" + keysArray[index][2];
            ans4.textContent = "D." + "\xa0\xa0\xa0\xa0" + keysArray[index][3];
            if (solutions[index - 1] === "C") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            index++;
        } else if (index >= 6) {
            if (solutions[index - 1] === "C") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            hasFinished = true;
        }
    }
    ans3.textContent = "C." + "\xa0\xa0\xa0\xa0" + keys1[2];

    ans4 = document.createElement("li");
    ans4.className = "list-group-item ml-2";
    ans4.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "orange";
    });
    ans4.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "white";
    });
    ans4.onclick = function() {
        if (index < 6) {
            question.textContent = questions[index];
            ans1.textContent = "A." + "\xa0\xa0\xa0\xa0" + keysArray[index][0];
            ans2.textContent = "B." + "\xa0\xa0\xa0\xa0" + keysArray[index][1];
            ans3.textContent = "C." + "\xa0\xa0\xa0\xa0" + keysArray[index][2];
            ans4.textContent = "D." + "\xa0\xa0\xa0\xa0" + keysArray[index][3];
            if (solutions[index - 1] === "D") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            index++;
        } else if (index >= 6) {
            if (solutions[index - 1] === "D") {
                wrongAns = false;
                totalScores += scores[index - 1];
            } else {
                wrongAns = true;
                timerCount -= 14;
            }
            displayAns();
            hasFinished = true;
        }
    }
    ans4.textContent = "D." + "\xa0\xa0\xa0\xa0" + keys1[3];

    quiz.appendChild(listGroup);
    listGroup.appendChild(ans1);
    listGroup.appendChild(ans2);
    listGroup.appendChild(ans3);
    listGroup.appendChild(ans4);
}

// notifies the user of the correctness of their choice
function displayAns() {
    if (!wrongAns) {
        ansPrompt.textContent = "Correct!";
    } else {
        ansPrompt.textContent = "Wrong...";
    }
}

// ends the quiz
function endGame() {
    timerElement.textContent = 0;
    mark.textContent = "";
    question.textContent = "All done!";
    listGroup.remove();
    quiz.appendChild(dashboard);
    dashboard.appendChild(result);
    result.style.padding = "0px";
    result.style.border = "0px";
    result.style.marginLeft = "9px";
    result.textContent = "Your final score is " + totalScores + ".";
    quiz.appendChild(form);
    typedText.onclick = function() {
        ansPrompt.textContent = "";
    }

    // add an event listener to the submit button
    submitBtn.onclick = function(e) {
        e.preventDefault();
        var userInit = document.getElementById("userInitials");
        topNav.textContent = "Highscores:";
        topNav.style.fontSize = "30px";
        result.remove();
        initialInput.remove();
        submitBtn.remove();
        question.remove();
        mark.remove();
        var record = new Object();
        record.userName = userInit.value;
        record.userScore = totalScores;
        var lastRecord = JSON.parse(localStorage.getItem("userScoreRecord"));
        if (lastRecord !== null) {
            lastRecord.push(record);
            localStorage.setItem("userScoreRecord", JSON.stringify(lastRecord));
            var newRecords = JSON.parse(localStorage.getItem("userScoreRecord"));
            for (var i = newRecords.length - 1; i >= 0; i--) {
                if (newRecords[i].userName.length !== 0) {
                    var newLine = document.createElement("br");
                    var span = document.createElement("span");
                    span.textContent = newRecords[i].userName + " - " + newRecords[i].userScore;
                    scoreBoard.appendChild(span);
                    scoreBoard.appendChild(newLine);
                } else {
                    var span = document.createElement("span");
                    var newLine = document.createElement("br");
                    span.textContent = "Unknown" + " - " + newRecords[i].userScore;
                    scoreBoard.appendChild(span);
                    scoreBoard.appendChild(newLine);
                }
            }
        } else {
            var userRecord = [];
            userRecord.push(record);
            localStorage.setItem("userScoreRecord", JSON.stringify(userRecord));
            if (record.userName.length !== 0) {
                var newLine = document.createElement("br");
                var span = document.createElement("span");
                span.textContent = record.userName + " - " + record.userScore;
                scoreBoard.appendChild(span);
                scoreBoard.appendChild(newLine);
            } else {
                var span = document.createElement("span");
                var newLine = document.createElement("br");
                span.textContent = "Unknown" + " - " + newRecords[i].userScore;
                scoreBoard.appendChild(span);
                scoreBoard.appendChild(newLine);
            }
        }
        scoreBoard.style.fontSize = "20px";
        scoreBoard.style.fontWeight = "normal";
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(scoreBoard);
        var clearBtn = document.createElement("button");
        clearBtn.className = "btn btn-primary border-success flex-item-right btn-success";
        clearBtn.type = "button";
        clearBtn.textContent = "Clear";
        clearBtn.style.position = "relative";
        clearBtn.style.marginLeft = "150px";
        clearBtn.onclick = function() {
            localStorage.clear();
            scoreBoard.textContent = "";
        }
        var backBtn = document.createElement("button");
        backBtn.className = "btn btn-primary border-info flex-item-left btn-info";
        backBtn.type = "button";
        backBtn.textContent = "Go Back";
        backBtn.onclick = function() {
            location.reload();
        }
        ansPrompt.remove();
        var bttns = document.createElement("div");
        bttns.className = "d-flex flex-row justify-content-center p-3 bg-white";
        bttns.appendChild(backBtn);
        bttns.appendChild(clearBtn);
        border.appendChild(bttns);
    }
}

// starts the timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount <= 0 || hasFinished) {
      // Clears interval
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function startGame() {
    startTimer();
    updatePage();
}


startButton.addEventListener("click", startGame);

// add an event listener to "View Highscores"
checkScore.onclick = function() {
    title.remove();
    content.remove();
    startButton.remove();
    topNav.textContent = "Highscores:";
    topNav.style.fontSize = "30px";
    result.remove();
    initialInput.remove();
    submitBtn.remove();
    var userHistory = JSON.parse(localStorage.getItem("userScoreRecord"));
    if (userHistory !== null) {
        for (var j = userHistory.length - 1; j >= 0; j--) {
            if (userHistory[j].userName.length !== 0) {
                var span = document.createElement("span");
                var newLine = document.createElement("br");
                span.textContent = userHistory[j].userName + " - " + userHistory[j].userScore;
                scoreBoard.appendChild(span);
                scoreBoard.appendChild(newLine);
            } else {
                var span = document.createElement("span");
                var newLine = document.createElement("br");
                span.textContent = "Unknown" + " - " + userHistory[j].userScore;
                scoreBoard.appendChild(span);
                scoreBoard.appendChild(newLine);
            }
        }
    } else {
        scoreBoard.textContent = "No history record.";
    }
    scoreBoard.style.fontSize = "20px";
    scoreBoard.style.fontWeight = "normal";
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(document.createElement("br"));
    newDiv.appendChild(scoreBoard);

    var backBtn = document.createElement("button");
    backBtn.className = "btn btn-primary border-info flex-item-left btn-info";
    backBtn.type = "button";
    backBtn.textContent = "Go Back";
    backBtn.style.marginBottom = "30px";
    backBtn.onclick = function() {
        location.reload();
    }
    ansPrompt.remove();
    var bttns = document.createElement("div");
    bttns.className = "d-flex flex-row justify-content-center p-3 bg-white";
    bttns.appendChild(backBtn);
    border.appendChild(bttns);
}