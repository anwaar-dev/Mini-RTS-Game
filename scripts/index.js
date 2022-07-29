let Element; // Last Block that was clicked
let ElementBlockNumber; // Last Block that was clicked

let Coins = 160; // Money
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



let stormBlock = document.querySelector('#stormBlock');
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
	else if(what=='crops'&&Coins>=5){Element.style.backgroundImage='url("img/crops.png")';farmsNo+=1;Coins-=5;Menu.style.display='none';landBlocks[ElementBlockNumber]='filled'}
	else if(what=='factory'&&Coins>=100){Element.style.backgroundImage='url("img/factory.gif")';factoryNo+=1;Coins-=100;Menu.style.display='none';landBlocks[ElementBlockNumber]='filled'}

}




// Animate Runs Per Frame
function animate() {
	const animationId = window.requestAnimationFrame(animate)

	// Increase Coins & Pops
	if(farmsNo>0){if(farmsDelay>=200){farmsDelay=0;Coins+=farmsNo;}}
	if(factoryNo>0){if(factoryDelay>=250){factoryDelay=0;Coins+= (factoryNo*8);}}
	if(Peeps<PeepsCap){if(housesDelay>=140){housesDelay=0;Peeps+=1;}}
	  else if(Peeps<PeepsCap/2){if(housesDelay>=90){housesDelay=0;Peeps+=1;}}
	//if(stormDelay>=100){stormDelay=0;makeStorm();}

	farmsDelay++;
	factoryDelay++;
	housesDelay++;

	countHappiness();
	updateBars()

}
// Update Game Bars
function updateBars() {
	coinsBar.innerHTML='<span>'+Coins+'</span>';
	happinessBar.innerHTML='<span>'+Happiness+'%</span>';
	peepsBar.innerHTML='<span>'+Peeps+'</span>';
}

// Make Storm in the land
function makeStorm() {
	stormx = Math.floor(Math.random()* 23);
	stormy = Math.floor(Math.random()* 13);
	stormpower = Math.floor(Math.random()* 4 + 1);

	stormx = stormx*48;
	stormy = stormy*48;

    document.querySelector('#stormBlock').style.display = 'block';
    document.querySelector('#stormBlock').style.left = stormx + 'px';
    document.querySelector('#stormBlock').style.top = stormy + 'px';
}
//makeStorm()






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



function countHappiness() {
	let score = 0;
	score = 0;
	score += Coins/100;
	score += Peeps/10;
	score += farmsNo*2.5;
	score += PeepsCap/10;
	score = (score*100) /100;
	if(Peeps>farmsNo*2){score = score*0.98}
	if(Peeps>farmsNo*5){score = score*0.9}
	if(Peeps>farmsNo*10){score = score*0.8}
	if(Peeps>farmsNo*20){score = score*0.6}

	if(score>100){score=100}

	Happiness = Math.round(score);
	
}

animate();
