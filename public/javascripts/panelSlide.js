
doSlide = function(currentPanel, nextPanel, selectedLocation) {
  
  function runSlide() {
    console.log("Here!");
    // get effect type from
    var selectedEffect = "slide";
    // most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 0 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }
    // run the effect
    $(currentPanel).hide("slide", { direction: "right"}, 1000, function () {$(nextPanel).toggle( selectedEffect, options, 500); if(nextPanel == "#createMap"){getMap(nextPanel, selectedLocation);}});
     };
     
    // set effect from select menu value
    runSlide();
  }; 
  
  function getMap(nextPanel, selectedLocation)
  {
    if(nextPanel == "#createMap")
    {
      if(selectedLocation)
        initPreSelMap();
      else
        initNearbyMap();
    }
  }
  