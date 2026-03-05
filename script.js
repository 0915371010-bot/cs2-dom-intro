console.log("Script started");

// Variable to track the number of clicks
let clicks = 0;

// click value
let clickValue = 1;
// Variable to store the click display h1 element
let clickDisplay = document.getElementById("click-display");

// variable for level display
let levelDisplay = document.getElementById("level-display");
// Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

// Called each time the image is clicked
function handleClick() {
    console.log("click");

    // count the click
    clicks = clicks + clickValue;
    // Update display with new value
    clickDisplay.innerText = "Clicks: " + clicks;

    if(clicks == 10){
        alert("Congrats you have reach level 2, click we now be worth 2");
        levelDisplay.innerText = "Level 2";
        clickValue = 2;
    }
}



