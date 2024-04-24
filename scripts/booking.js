/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let numOfDay = 0;
let dailyRate = 35;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let mondayButton = document.getElementById("monday");
mondayButton.addEventListener("click", monToggle);
let tuesdayButton = document.getElementById("tuesday");
tuesdayButton.addEventListener("click", tuesToggle);
let wednesdayButton = document.getElementById("wednesday");
wednesdayButton.addEventListener("click", wedToggle);
let thursdayButton = document.getElementById("thursday");
thursdayButton.addEventListener("click", thurToggle);
let fridayButton = document.getElementById("friday");
fridayButton.addEventListener("click", friToggle);

function monToggle() {
    if (mondayButton.classList.contains("clicked") == true) {
        mondayButton.classList.remove("clicked");
        numOfDay--;
    }
    else if (mondayButton.classList.contains("clicked") == false) {
        mondayButton.classList.add("clicked");
        numOfDay++;
    }

    recalculate()
}
function tuesToggle() {
    if (tuesdayButton.classList.contains("clicked") == true) {
        tuesdayButton.classList.remove("clicked");
        numOfDay--;
    }
    else if (tuesdayButton.classList.contains("clicked") == false) {
        tuesdayButton.classList.add("clicked");
        numOfDay++;
    }

    recalculate()
}
function wedToggle() {
    if (wednesdayButton.classList.contains("clicked") == true) {
        wednesdayButton.classList.remove("clicked");
        numOfDay--;
    }
    else if (wednesdayButton.classList.contains("clicked") == false) {
        wednesdayButton.classList.add("clicked");
        numOfDay++;
    }

    recalculate()
}
function thurToggle() {
    if (thursdayButton.classList.contains("clicked") == true) {
        thursdayButton.classList.remove("clicked");
        numOfDay--;
    }
    else if (thursdayButton.classList.contains("clicked") == false) {
        thursdayButton.classList.add("clicked");
        numOfDay++;
    }

    recalculate()
}
function friToggle() {
    if (fridayButton.classList.contains("clicked") == true) {
        fridayButton.classList.remove("clicked");
        numOfDay--;
    }
    else if (fridayButton.classList.contains("clicked") == false) {
        fridayButton.classList.add("clicked");
        numOfDay++;
    }

    recalculate()
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDays);

function clearDays() {
    mondayButton.classList.remove("clicked");
    numOfDay--;
    tuesdayButton.classList.remove("clicked");
    numOfDay--;
    wednesdayButton.classList.remove("clicked");
    numOfDay--;
    thursdayButton.classList.remove("clicked");
    numOfDay--;
    fridayButton.classList.remove("clicked");
    numOfDay--;

    recalculate()
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById("half");
halfButton.addEventListener("click", halfSwap)

function halfSwap() {
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    dailyRate = 20;

    recalculate()
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullButton = document.getElementById("full");
fullButton.addEventListener("click", fullSwap);

function fullSwap() {
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    dailyRate = 35;

    recalculate()
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    let total = document.getElementById("calculated-cost");

    total = numOfDay * dailyRate;

    document.getElementById("calculated-cost").innerHTML = total;
}

