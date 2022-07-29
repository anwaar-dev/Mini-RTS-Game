let Element; // Last Block that was clicked

let Coins = 0; // Money
let Peeps = 5; // Population
let PeepsCap = 5; // Miximum Population alowed
let farmsNo = 0; // No of Farms
let farmsDelay = 0; // Farms will pay after this Delay
let housesNo = 0; // No of Houses
let housesDelay = 0; // Peeps will come after this Delay
let stormDelay = 0; // Storm will come after this Delay


let stormBlock = document.querySelector('#stormBlock');
let Menu = document.querySelector('section');
let closeBuild = document.querySelector('#closeBuild');
let coinsBar = document.querySelector('.coinsBar');
let peepsBar = document.querySelector('.peepsBar');


// Opens Menu when a Block is Clicked
function blockClick(elm) {
	Element = elm;
	Menu.style.display='flex'
}

// Closes Menu
closeBuild.addEventListener('click', () =>{Menu.style.display='none'}); 

// What To Buld
function build(what) {
	if(what=='houses'){Element.style.backgroundImage='url("img/house.png")';housesNo+=1;PeepsCap+=20;}
	else if(what=='crops'){Element.style.backgroundImage='url("img/crops.png")';farmsNo+=1;}
	Menu.style.display='none'
}

// Animate Runs Per Frame
function animate() {
	const animationId = window.requestAnimationFrame(animate)
	
	coinsBar.innerHTML='<span>'+Coins+'</span>';
	peepsBar.innerHTML='<span>'+Peeps+'</span>';
	if(farmsNo>0){if(farmsDelay>=100){farmsDelay=0;Coins+=farmsNo;}}
	if(Peeps<PeepsCap){if(housesDelay>=180){housesDelay=0;Peeps+=1;}}
	if(stormDelay>=100){stormDelay=0;makeStorm();}

	farmsDelay++;
	housesDelay++;
}

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
makeStorm()
animate();
