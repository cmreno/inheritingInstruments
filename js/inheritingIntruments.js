// Cody Reno / N320 / July 12 2021

class Instrument {
    constructor (family, verb, loudness){
        this.family=family;
        this.verb=verb;
        this.loudness=loudness;
    }
    play(){
        console.log("The " + this.family +" "+ this.verb + " " + this.loudness)
    }
}

class Woodwind extends Instrument{
constructor(family, verb, loudness){
    super(family,verb);
    this.loudness=loudness;
}
}

class Percussion extends Instrument{
    constructor(family, verb, loudness){
        super(family,verb);
        this.loudness=loudness;
    }
}

class String extends Instrument{
    constructor(family, verb, loudness){
        super(family,verb);
        this.loudness=loudness;
    }
}

var flute=new Woodwind("Woodwind", "blows","gently");
var drum=new Percussion("Percussion", "drums", "loudly");
var guitar=new String("String","strums","softly");

myArray=[flute.play(), drum.play(),guitar.play()];

for (i=0;i>=myArray.length;i++){
    myArray[i];
}