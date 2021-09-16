const littleYacht = {
    hornSound: "Ride of the Walkeries",
    playHorn: function() {
      console.log(this.hornSound);
    }
};

//littleYacht.playHorn(); 

const biggerYacht = {
  hornSound: "Fog Horn",
  playHorn: littleYacht.playHorn
};

biggerYacht.playHorn(); 