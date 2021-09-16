const littleYacht = {
    hornSound: "Ride of the Walkeries",
    playHorn: function() {
      console.log(littleYacht.hornSound);
    }
};

//littleYacht.playHorn(); 

const biggerYacht = {
  hornSound: "Fog Horn",
  playHorn: littleYacht.playHorn
};

biggerYacht.playHorn(); 