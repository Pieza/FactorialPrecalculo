
if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'Calcular': function() {
        vueModule.getResult();
      },
      'Borrar': function() {
        vueModule.clear();
      }
    };
    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.setLanguage("es-MX");

    annyang.addCallback('result', function(phrases) {
      alert(phrases);
    });
    
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
