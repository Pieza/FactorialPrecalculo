//Start leap motion recording
Leap.loop(function(obj) {
    //Count fingers on screen
    vueModule.number = obj.pointables.length;
});
