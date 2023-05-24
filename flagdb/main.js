
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://czmfcpgcubbgzihtxdfd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6bWZjcGdjdWJiZ3ppaHR4ZGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0NDcyNjYsImV4cCI6MTk5ODAyMzI2Nn0.GTh_WDiFd3blzi81rU9GasvKe4UgTwebQTlqjhuPNE8"
const supabase = createClient(supabaseUrl, supabaseKey)
const db = 'flagHighScores' //make sure to use the name of the TABLE not the project


//returns an array with the id, score, and name
async function getScore() {

  const { data, error } = await supabase
    .from(db)
    // .select('id, name, score')
    .select('id,score, name')
    .limit(1)
    .single()


  return data


}

//updates the database with a high score given the user's name and score 
async function updateScore(name, score) {
  let highScoreData = await getScore()
  console.log(`highScoreData = ${highScoreData['score']}`)
  const { error } = await supabase
    .from(db)
    .update({ name: name, score: score })
    .eq('id', highScoreData['id'])

}

const countryCode = Object.entries({ // returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object . 
  "ad": "Andorra",
  "ae": "United Arab Emirates",
  "af": "Afghanistan",
  "ag": "Antigua and Barbuda",

  "al": "Albania",
  "am": "Armenia",
  "ao": "Angola",
  "aq": "Antarctica",
  "ar": "Argentina",
  "as": "American Samoa",
  "at": "Austria",
  "au": "Australia",
  "aw": "Aruba",
  "az": "Azerbaijan",
  "ba": "Bosnia and Herzegovina",
  "bb": "Barbados",
  "bd": "Bangladesh",
  "be": "Belgium",
  "bf": "Burkina Faso",
  "bg": "Bulgaria",
  "bh": "Bahrain",
  "bi": "Burundi",
  "bj": "Benin",
  "bl": "Saint Barthélemy",
  "bn": "Brunei",
  "bo": "Bolivia",
  "br": "Brazil",
  "bs": "Bahamas",
  "bt": "Bhutan",
  "bw": "Botswana",
  "by": "Belarus",
  "bz": "Belize",
  "ca": "Canada",
  "cd": "DR Congo",
  "cf": "Central African Republic",
  "cg": "Republic of the Congo",
  "ch": "Switzerland",
  "ci": "Côte d'Ivoire (Ivory Coast)",
  "ck": "Cook Islands",
  "cl": "Chile",
  "cm": "Cameroon",
  "cn": "China",
  "co": "Colombia",
  "cr": "Costa Rica",
  "cu": "Cuba",
  "cv": "Cape Verde",
  "cw": "Curaçao",
  "cy": "Cyprus",
  "cz": "Czechia",
  "de": "Germany",
  "dj": "Djibouti",
  "dk": "Denmark",
  "dm": "Dominica",
  "do": "Dominican Republic",
  "dz": "Algeria",
  "ec": "Ecuador",
  "ee": "Estonia",
  "eg": "Egypt",
  "eh": "Western Sahara",
  "er": "Eritrea",
  "es": "Spain",
  "et": "Ethiopia",
  "fi": "Finland",
  "fj": "Fiji",
  "fm": "Micronesia",
  "fr": "France",
  "ga": "Gabon",
  "gb": "United Kingdom",
  "gd": "Grenada",
  "ge": "Georgia",
  "gf": "French Guiana",
  "gh": "Ghana",
  "gl": "Greenland",
  "gm": "Gambia",
  "gn": "Guinea",
  "gq": "Equatorial Guinea",
  "gr": "Greece",
  "gs": "South Georgia",
  "gt": "Guatemala",
  "gw": "Guinea-Bissau",
  "gy": "Guyana",
  "hk": "Hong Kong",
  "hn": "Honduras",
  "hr": "Croatia",
  "ht": "Haiti",
  "hu": "Hungary",
  "id": "Indonesia",
  "ie": "Ireland",
  "il": "ItsNOTrael",
  "in": "India",
  "iq": "Iraq",
  "ir": "Iran",
  "is": "Iceland",
  "it": "Italy",
  "je": "Jersey",
  "jm": "Jamaica",
  "jo": "Jordan",
  "jp": "Japan",
  "ke": "Kenya",
  "kg": "Kyrgyzstan",
  "kh": "Cambodia",
  "ki": "Kiribati",
  "km": "Comoros",
  "kn": "Saint Kitts and Nevis",
  "kp": "North Korea",
  "kr": "South Korea",
  "kw": "Kuwait",
  "kz": "Kazakhstan",
  "la": "Laos",
  "lb": "Lebanon",
  "lc": "Saint Lucia",
  "li": "Liechtenstein",
  "lk": "Sri Lanka",
  "lr": "Liberia",
  "ls": "Lesotho",
  "lt": "Lithuania",
  "lu": "Luxembourg",
  "lv": "Latvia",
  "ly": "Libya",
  "ma": "Morocco",
  "mc": "Monaco",
  "md": "Moldova",
  "me": "Montenegro",
  "mf": "Saint Martin",
  "mg": "Madagascar",
  "mh": "Marshall Islands",
  "mk": "North Macedonia",
  "ml": "Mali",
  "mm": "Myanmar",
  "mn": "Mongolia",
  "mr": "Mauritania",
  "mt": "Malta",
  "mu": "Mauritius",
  "mv": "Maldives",
  "mw": "Malawi",
  "mx": "Mexico",
  "my": "Malaysia",
  "mz": "Mozambique",
  "na": "Namibia",
  "ne": "Niger",
  "ng": "Nigeria",
  "ni": "Nicaragua",
  "nl": "Netherlands",
  "no": "Norway",
  "np": "Nepal",
  "nr": "Nauru",
  "nu": "Niue",
  "nz": "New Zealand",
  "om": "Oman",
  "pa": "Panama",
  "pe": "Peru",
  "pf": "French Polynesia",
  "pg": "Papua New Guinea",
  "ph": "Philippines",
  "pk": "Pakistan",
  "pl": "Poland",
  "ps": "Palestine",
  "pt": "Portugal",
  "pw": "Palau",
  "py": "Paraguay",
  "qa": "Qatar",
  "ro": "Romania",
  "rs": "Serbia",
  "ru": "Russia",
  "rw": "Rwanda",
  "sa": "Saudi Arabia",
  "sb": "Solomon Islands",
  "sc": "Seychelles",
  "sd": "Sudan",
  "se": "Sweden",
  "sg": "Singapore",
  "si": "Slovenia",
  "sj": "Svalbard and Jan Mayen",
  "sk": "Slovakia",
  "sl": "Sierra Leone",
  "sm": "San Marino",
  "sn": "Senegal",
  "so": "Somalia",
  "sr": "Suriname",
  "ss": "South Sudan",
  "st": "São Tomé and Príncipe",
  "sv": "El Salvador",
  "sy": "Syria",
  "sz": "Eswatini (Swaziland)",
  "td": "Chad",
  "tg": "Togo",
  "th": "Thailand",
  "tj": "Tajikistan",
  "tl": "Timor-Leste",
  "tm": "Turkmenistan",
  "tn": "Tunisia",
  "to": "Tonga",
  "tr": "Turkey",
  "tt": "Trinidad and Tobago",
  "tv": "Tuvalu",
  "tw": "Taiwan",
  "tz": "Tanzania",
  "ua": "Ukraine",
  "ug": "Uganda",
  "us": "United States",
  "uy": "Uruguay",
  "uz": "Uzbekistan",
  "va": "Vatican City (Holy See)",
  "vc": "Saint Vincent and the Grenadines",
  "ve": "Venezuela",
  "vn": "Vietnam",
  "vu": "Vanuatu",
  "ws": "Samoa",
  "xk": "Kosovo",
  "ye": "Yemen",
  "za": "South Africa",
  "zm": "Zambia",
  "zw": "Zimbabwe"
})

//creaetes an array of countries the user got wrong to store in the array
let wrongCountries = []



//grabs the HTML elements and assigns them to JS variable names
let timerBox = document.querySelector("#timer")
let startButton = document.querySelector("#startButton")
let flag = document.getElementById("flag")
let mainDiv = document.querySelector("#mainDiv")
let wrongDiv = document.querySelector("#wrongDiv")

//creates necessary HTML elements
let userInput = document.createElement("input");



//gets relevant int values
let score = 0
let countryTotal = countryCode.length //gets total number of countries in the dictionary

//when start button is clicked the timer starts and the startGame() method is called
startButton.addEventListener('click', timer);
startButton.addEventListener('click', startGame)


//sets some style attributes
scoreText.innerHTML = score + "/" + countryTotal
flag.style.visibility = "hidden"
mainDiv.style.visibility = "hidden"
wrongDiv.style.visibility = "hidden"

let scoreArray = await getScore() //gets an array of the id, name, and score of the highest scorer in the database

//function to run the game when they click start
function startGame() {

  startButton.style.display = "none" //hides the button

  //makes the image area for the flag visible and makes the main div visible
  flag.style.visibility = "visible"
  mainDiv.style.visibility = "visible"

  //creates user input space and appends it to the page in the correct spot
  mainDiv.appendChild(userInput)


  shuffle(countryCode) //shuffles the array 

  let currentName = loadNewFlag() //loads a new flag and sets the name of the currently displayed flag to the variable currentName

  userInput.addEventListener('keypress', function (e) { //if the user presses a key
    if (e.key == "Enter") {      //if the user enters the "enter" key
      if (userInput.value == "") {   //if the user clicked enter without any value, they get alerted to enter in a value again
        alert("Please enter a value")
      }
      else {

        checkGuess(currentName) //calls the checkGuess function with the actual country name as a parameter

        currentName = loadNewFlag() //loads a new flag and changes the currentName value again

        userInput.value = "" //clears the input box


      }
    }


  })



}

//function that will load a new flag and temporarily store the values of the country code and its name
//will also return the name of the country 
function loadNewFlag() {

  let currentPair = countryCode.pop() //pops the last key and value pair off of the array
  console.log(currentPair)

  let currentCode = currentPair[0] //sets the country code equal to the key that was popped

  let currentName = currentPair[1] //sets the country's full name equal to the value that was popped

  flag.src = `https://flagcdn.com/w320/${currentCode}.png` //the `s make sure the ${} represents a Template Literal, easily changing the src for the image :)

  console.log(countryCode)
  return currentName //returns the name of the country

}


//function that will show the end screen of the game
function endGame() {

  //sets the style attributes and making some elements visible and unvisible
  userInput.style.display = "none"
  flag.style.display = "none"
  wrongDiv.style.visibility = "visible"
  mainDiv.style.padding = "2%"

  //creates an H2 element 
  let endText = document.createElement("h2")
  mainDiv.appendChild(endText)



  if (score > scoreArray["score"] || scoreArray["score"] == "null") { //if the high score in the data base is less than the user's score OR if there is nothing in the data base

    let userName = prompt("New high score! Type your name in to be recorded as a high scorer") //prompts user to enter in their name and sets the value to userName
    updateScore(userName, score) //updates database with the user's score
    endText.innerHTML = "Your score: " + score + "/" + countryTotal + "<br><br>High Scores: " + userName + "-----------" + score //displays user's score and high scores 
  }

  else { //if user did NOT achieve a high score 
    //displays user's score and high scores 
    endText.innerHTML = "Your score: " + score + "/" + countryTotal + "<br><br>High Scores: " + JSON.stringify(scoreArray["name"]).replace("\"", "").replace("\"", "") + "  -----------  " + JSON.stringify(scoreArray["score"])
  }


  let wrongText = document.querySelector("#wrongText") //grabs the wrong Text element from HTML

  //for all the elements in the wrongCountries array, add it to the wrong Text element along with a line break
  for (let x = 0; x < wrongCountries.length; x++) {
    wrongText.innerHTML += wrongCountries[x] + "<br>"
  }


}


//function that checks the users guess and either increment the score or tells them they were wrong 
function checkGuess(currentCountry) {


  //makes the guess and the country lower case for comparison
  let guess = userInput.value.toLowerCase()
  currentCountry = currentCountry.toLowerCase()



  if (guess.localeCompare(currentCountry) == 0) { //if the user's guess matches up with the actual country name
    //updates the score value and updates the displayed score
    score++
    scoreText.innerHTML = score + "/" + countryTotal
  }

  else { //if the user's guess is wrong...
    wrongCountries.push(currentCountry) //adds the actual country name to the wrong countries array 
    alert("Wrong. The correct answer was " + currentCountry) //alerts the user by telling them they were wrong and what the actual country name is
  }
}



function shuffle(array) { //function shuffles the array 
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

}


function timer() { //timer function 

  //declares and initializes the minute and second variables
  let minute = 4;
  let second = 60;


  let timerID = setInterval(function () {  //will repeat the code in it multiple times at regular intervals
    second--; //subtracts a second
    if (second < 10) {
      timerBox.innerHTML = minute + ":0" + second; //if the second is less than 10, reformats from :9 to :09 (example)
      if (second == 0) {
        if (minute == 0) {
          clearInterval(timerID) //Stops timer so it doesn't go into the negatives
          endGame() //also calls the endgame function 
        }
        //else, subtracts a minute and sets second as 60 so it's displayed as 59 in the next iteration
        minute--;
        second = 60;
      }
    }
    else {
      timerBox.innerHTML = minute + ":" + second; //formats the time correctly
    }
  }, 1000);//executes the above code every 1000 miliseconds
}










