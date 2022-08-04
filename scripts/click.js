// Opens Menu when a Block is Clicked
function blockClick(elm, blockNumber) {
	if (landIsEmpty(blockNumber)==true&&DestroyToggle==false) {
	Element = elm;
	ElementBlockNumber = blockNumber;
	Menu.style.display='flex';
	}
	else if (landIsEmpty(blockNumber)==false&&DestroyToggle) {
		document.querySelector('.b' + blockNumber).style.backgroundImage = 'none';
		if(landBlocks[blockNumber]=='house'){housesNo-=1;PeepsCap-=20;if(PeepsCap<Peeps){Peeps=PeepsCap}}
		else if(landBlocks[blockNumber]=='farm'){farmsNo-=1}
		else if(landBlocks[blockNumber]=='factory'){factoryNo-=1}
		else if(landBlocks[blockNumber]=='fort'){armySecurity-=150}
		landBlocks[blockNumber]='empty'
	}
}

// Closes Menu
closeBuild.addEventListener('click', () =>{Menu.style.display='none'}); 

// What To Buld
function build(what) {
	if(what=='houses'&&Coins>=50){Element.style.backgroundImage='url("img/house.png")';housesNo+=1;PeepsCap+=20;Coins-=50;Menu.style.display='none';landBlocks[ElementBlockNumber]='house'}
	else if(what=='crops'&&Coins>=5){Element.style.backgroundImage='url("img/crops.png")';farmsNo+=1;Coins-=5;Menu.style.display='none';landBlocks[ElementBlockNumber]='farm';farmsBlocks.push([ElementBlockNumber, 100]);}
	else if(what=='factory'&&Coins>=100){Element.style.backgroundImage='url("img/factory.gif")';factoryNo+=1;Coins-=100;Menu.style.display='none';landBlocks[ElementBlockNumber]='factory'}
	else if(what=='fort'&&Coins>=200){Element.style.backgroundImage='url("img/fort.png")';Coins-=200;Menu.style.display='none';landBlocks[ElementBlockNumber]='fort';armySecurity+=150;}
}