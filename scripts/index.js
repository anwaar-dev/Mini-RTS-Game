let Element; // Last Block that was clicked
let ElementBlockNumber; // Last Block that was clicked

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

// let stormBlock = document.querySelector('#stormBlock'); - 30/7/22
let Menu = document.querySelector('section');
let closeBuild = document.querySelector('#closeBuild');
let coinsBar = document.querySelector('.coinsBar');
let happinessBar = document.querySelector('.happinessBar');
let peepsBar = document.querySelector('.peepsBar');

// Opens Menu when a Block is Clicked
function blockClick(elm, blockNumber) {
	if (landIsEmpty(blockNumber)==true) {
	Element = elm;
	ElementBlockNumber = blockNumber;
	Menu.style.display='flex'
	}
}

// Closes Menu
closeBuild.addEventListener('click', () =>{Menu.style.display='none'}); 

// What To Buld
function build(what) {
	if(what=='houses'&&Coins>=50){Element.style.backgroundImage='url("img/house.png")';housesNo+=1;PeepsCap+=20;Coins-=50;Menu.style.display='none';landBlocks[ElementBlockNumber]='filled'}
	else if(what=='crops'&&Coins>=5){Element.style.backgroundImage='url("img/crops.png")';farmsNo+=1;Coins-=5;Menu.style.display='none';landBlocks[ElementBlockNumber]='filled';farmsBlocks.push([ElementBlockNumber, 100]);}
	else if(what=='factory'&&Coins>=100){Element.style.backgroundImage='url("img/factory.gif")';factoryNo+=1;Coins-=100;Menu.style.display='none';landBlocks[ElementBlockNumber]='filled'}
	else if(what=='fort'&&Coins>=200){Element.style.backgroundImage='url("img/fort.png")';Coins-=200;Menu.style.display='none';landBlocks[ElementBlockNumber]='filled';armySecurity+=150;}
}

// Animate Runs Per Frame
function animate() {
	// Increase Coins & Pops
	if(farmsNo>0){if(farmsDelay>=5){farmsDelay=0;Coins+=farmsNo;}}
	if(factoryNo>0){if(factoryDelay>=6){factoryDelay=0;Coins+= (factoryNo*8);}}
	if(Peeps<PeepsCap/2){if(housesDelay>=5){housesDelay=0;Peeps+=2;}}
	  else if(Peeps<PeepsCap){if(housesDelay>=5){housesDelay=0;Peeps+=1;}}
	farmsDelay++;
	factoryDelay++;
	housesDelay++;
	armyDelay++;

	countHappiness()
	updateBars()
	makeArmy()
}
// Update Game Bars
function updateBars() {
	coinsBar.innerHTML='<span>'+Coins+'</span>';
	happinessBar.innerHTML='<span>'+Happiness+'%</span>';
	peepsBar.innerHTML='<span>'+Peeps+'</span>';
}

// Make Army in land
function makeArmy() {
	armyOn = Math.floor(Math.random()* 196 +1);
	if (armyDelay>=armySecurity&&isThereArmy==false&&housesNo>0) {
 		document.querySelector('.b' + armyOn).style.backgroundImage = 'url("img/army.gif")';
	armyDelay = 0;
	isThereArmy = true;
	armySpentTime = 15;
	LastArmyElement = armyOn;
	}
	armySpentTime--;
	if (armySpentTime==0) {
		document.querySelector('.b' + LastArmyElement).style.backgroundImage = 'none';
		isThereArmy = false
		landBlocks[LastArmyElement]='true'
	}
}
makeArmy();

// Check if the land block is empty
function landIsEmpty(ele) {
	for (let i = 0; i < landBlocks.length; i++) {
		if(ele==i){
			if (landBlocks[i]=='filled') {
				return false
			}else {
				return true
			}
		}	
	}
}

function farmsDeath() {
	for (let i = 0; i < farmsBlocks.length; i++) {
			if (farmsBlocks[i][1]<=0) {
				document.querySelector('.b' + farmsBlocks[i][0]).style.backgroundImage = 'none';
				landBlocks[farmsBlocks[i][0]]='true'
				farmsBlocks.splice(i,1);
			}else {
				farmsBlocks[i][1]--;
			}
	}
}

// Count the happiness, used in animate()
function countHappiness() {
	let score = 0;
	score = 0;
	score += Coins/100; // Coins ++
	score += Peeps/10; // Peeps ++
	score += farmsNo*1.5; // Number of Farms ++
	score += PeepsCap/10; // Capacity of Peeps ++
	score = (score*100) /100; // Get %age of it
	if(Peeps>farmsNo*2){score = score*0.98} // Less fams, more Peeps --
	if(Peeps>farmsNo*5){score = score*0.9}  // ^
	if(Peeps>farmsNo*10){score = score*0.8} // ^
	if(Peeps>farmsNo*20){score = score*0.6} // ^
	if(armySecurity==1000){score = score*0.8} // More Forts,  ++
	if(armySecurity==2500){score = score*0.8}  // ^
	if(armySecurity==4000){score = score*0.8} // ^
	if(armySecurity==5500){score = score*0.8} // ^

	if(score>100){score=100} // Make it less than 100
	Happiness = Math.round(score); // Finale value given
}

;

window.setInterval(farmsDeath,1000);
window.setInterval(animate,250);