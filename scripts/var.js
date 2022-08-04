let Element; // Last Block that was clicked
let ElementBlockNumber; // Last Block that was clicked
let DestroyToggle = false; // Last Block that was clicked

let Coins = 60; // Money
let Happiness = 0; // Happiness
let Peeps = 5; // Population pr number of people
let PeepsCap = 5; // Miximum Population alowed
let factoryNo = 0; // No of Factories 
let farmsNo = 0; // No of Farms
let farmsDelay = 0; // Farms will pay after this Delay 
let factoryDelay = 0; // Factory will pay after this Delay 
let housesNo = 0; // No of Houses
let housesDelay = 0; // Peeps will come after this Delay
let stormDelay = 0; // Storm will come after this Delay
let armyDelay = 100; // the only Time an army can show
let armySpentTime = 0; // Army will show on block for this time
let isThereArmy = false; // What block contained army last time ?
let armySecurity = 100; // How often will army show up

let alert = document.querySelector('alert');
let Menu = document.querySelector('section');
let closeBuild = document.querySelector('#closeBuild');
let coinsBar = document.querySelector('.coinsBar');
let happinessBar = document.querySelector('.happinessBar');
let peepsBar = document.querySelector('.peepsBar');
