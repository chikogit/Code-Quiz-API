var totalScore = 0;
var nextQuestion = -1; 
var timeLeft = 0;
var quizTimer;
var feedbackEl = document.querySelector("#feedback");

const questions = [
    {
        questionTitle: "What does a comment look like in JavaScript?",
        choices: ["'This is a comment in JavaScript!'","!This a comment in JavaScript!", "//This is a comment in JavaScript!", "This is a comment in JavaScript!"],
        answer: "//This is a comment in JavaScript!" //answer is C
    },
        
    {
        questionTitle: "How do you declare a function?",
        choices: ["Function name()", "Class = Function()", "Method Function = ()", "var function = function()"],
        answer: "Function name()" //answer is A
    },

    {
        questionTitle: "Arrays are a special type of objects in JavaScript. What can they store exactly in them?",
        choices: ["Strings", "Booleans", "Other arrays", "All of the Above"],
        answer: "All of the Above"
        //answer is D
    },

    {
        questionTitle: "Which boolean operator represents 'And'?",
        choices: ["&&", "||", "?!", "*"],
        answer: "&&"
        //answer is A
    },
        
    {
        questionTitle: "Which statements are true about functions in JavaScript?",
        choices: ["Functions must always have an identifier.", "Functions cannot be reused.", "None of the above.", "Functions cannot use outside variables in their own functions."],
        answer: "None of the above." //answer is C
    },

    {
        questionTitle: "What is 'null' exactly?",
        choices: ["Null represents the absence of a value.","Null is a variable representing what is within a function.", "Null represents the number 0.", "Null means nothing in JavaScript."],
        answer: "Null represents the absence of a value." //answer is A
    },
    
    {
        questionTitle: "What is the object method in JavaScript?",
        choices: ["The object method houses various arrays for a function to use.", "The object method creates objects.", "The object method is an object with a function associated with the method.", "The object method involves an object that is inserted within a function."],
        answer: "The object method is an object with a function associated with the method.", //answer is C
    },
    
    {
        questionTitle: "How is a conditional statement in JavaScript declared?",
        choices: ["The for loop", "The var function statement", "The while loop", "The if else statement"],
        answer: "The if else statement" //answer is D
    },

    {
        questionTitle: "What operator is used to assign a value to a variable?",
        choices: ["Nothing!","=", "?", "+="],
        answer: "="
        //answer is A
    },        

    {
        questionTitle: "A variable not declared within a function but outside of a function is known as a...",
        choices: ["An undefined variable","A local variable", "A global variable", "A variable"],
        answer: "A global variable" //answer is C
    },

]