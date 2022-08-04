// Animate Runs Per Frame
function animate() {
	// Increase Coins & Pops
	if(farmsNo>0){if(farmsDelay>=10){farmsDelay=0;Coins+=farmsNo;}}
	if(factoryNo>0){if(factoryDelay>=12){factoryDelay=0;Coins+= (factoryNo*8);}}
	if(Peeps<PeepsCap/2&&Happiness>24){if(housesDelay>=10){housesDelay=0;Peeps+=2;}}
	  else if(Peeps<PeepsCap&&Happiness>10){if(housesDelay>=10){housesDelay=0;Peeps+=1;}}
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
		alertFunction('attack');
	}
	armySpentTime--;
	if (armySpentTime==0) {
		document.querySelector('.b' + LastArmyElement).style.backgroundImage = 'none';
		isThereArmy = false
		landBlocks[LastArmyElement]='empty'
		alertFunction('none');
	}
}


function farmsDeath() {
	for (let i = 0; i < farmsBlocks.length; i++) {
			if (farmsBlocks[i][1]<=0) {
				document.querySelector('.b' + farmsBlocks[i][0]).style.backgroundImage = 'none';
				landBlocks[farmsBlocks[i][0]]='empty'
				farmsBlocks.splice(i,1);
			}else {
				farmsBlocks[i][1]--;
			}
	}
}

// Count the happiness, used in animate()
function countHappiness() {
	let score = 0;
	let unemployment = 0;
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
	if(factoryNo>0||farmsNo>0){unemployment=Peeps-(factoryNo*8+farmsNo*2)} // Unemployment = total peeps - employed

	if(unemployment<100){unemployment=0} // Make it greater than 0

	if(score>100){score=100} // Make it less than 100
	Happiness = Math.round(score); // Finale value given
}

;

window.setInterval(farmsDeath,1000);
window.setInterval(animate,250);


function alertFunction(topic) {
	if (topic=='attack'){alert.innerHTML='We Are Attacked!';alert.style.display='block';}
	else if (topic=='destroyBuild'){alert.innerHTML='Destruction Mode Enabled';alert.style.display='block';}

	else if (topic=='none'){alert.style.display='none';}
}