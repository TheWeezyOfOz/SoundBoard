
function preload(){
	eversmile = loadSound("eversmile.mp3");
	rain = loadSound("rain.mp3");
	caveOfMirrors = loadSound("caveOfMirrors.mp3");
	dangerForest = loadSound("dangerForest.mp3");
	happyPlains = loadSound("happyPlains.mp3");
	dangerPlains = loadSound("test.mp3");
	market = loadSound("market.mp3");
	tavern = loadSound("test.mp3");
	battle = loadSound("test.mp3");
}

function setup(){
	createCanvas(0,0);

	AA = new Chunky("AA.", eversmile, "Eversmile");
	AB = new Chunky("AB.", rain, "Rain");
	AC = new Chunky("AC.", caveOfMirrors, "Cave Of Mirrors");

	BA = new Chunky("BA.", dangerForest, "Dangerous Forest");
	BB = new Chunky("BB.", happyPlains, "Happy Plains");
	BC = new Chunky("BC.", dangerPlains, "Dangerous Plains");

	CA = new Chunky("CA.", market, "Market Place");
	CB = new Chunky("CB.", tavern, "Tavern");
	CC = new Chunky("CC.", battle, "Battle Time!");

}

class Chunky {

	constructor(pref, s, title){
		this.pref = pref;
		this.s = s;
		this.title = createElement("h3", title);

		this.sliderVolume = createSlider(0, 1, 0.2, 0.01);
		this.buttonStart = createButton("Start");
		this.buttonPause = createButton("Pause");
		this.buttonStop	= createButton("Stop");

		this.title.parent(pref + "title");
		this.sliderVolume.parent(pref + "slider");
		this.buttonStart.parent(pref + "buttons");
		this.buttonPause.parent(pref + "buttons");
		this.buttonStop.parent(pref + "buttons");

		this.buttonStart.mousePressed(function(){
			if(!s.isPlaying()){
				s.loop();
			}
		});
		this.buttonPause.mousePressed(function(){
			if(s.isPlaying()){
				s.pause();
			}
		});
		this.buttonStop.mousePressed(function(){
			if(s.isPlaying()){
				s.stop();
			}
		});
	}
}


function draw() {
	background(0);
	AA.s.setVolume(AA.sliderVolume.value());
	AB.s.setVolume(AB.sliderVolume.value());
	AC.s.setVolume(AC.sliderVolume.value());

}
