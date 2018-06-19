if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'hola': function() {
        $('#tpsreport').animate({bottom: '-100px'});
      }
    };
    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.setLanguage("es-MX");

    annyang.addCallback('result', function(phrases) {
      console.log('Speech recognized. Possible sentences said:');
      console.log(phrases);
    });
    
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }