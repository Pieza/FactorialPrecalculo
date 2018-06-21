
if (annyang) {
    // This comands are specific words we expect
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


    var regex = /\d+/;  //Regex patern to get only numbers
    annyang.addCallback('result', function(phrases) {
      phrases.forEach(word => {
        var wordToNumber = word.match(regex); //match words that are numbers
        if(wordToNumber != null){
          return vueModule.number = word;   //Set number with the one heard 
        }
      });
    });

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
