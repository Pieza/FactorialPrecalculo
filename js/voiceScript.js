const regex = new RegExp('^[0-9]+$');  //Regex patern to get only numbers

if (annyang) {
    // This comands are specific words we expect
    var commands = {
      'Calcular': function() {
        vueModule.getResult();
      },
      'Deja de escucharme': function() {
        vueModule.toggle();
      },
      'Borrar': function() {
        vueModule.clear();
      },
      'Factorial de *number': function(number) { 
        getNumberOnWords(number);
        vueModule.getResult();
      }
    };
    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.setLanguage("es-MX");
    
    annyang.addCallback('result', function(phrases) {
      phrases.forEach(word => {
        getNumberOnWords(word);
      });
    });

    //Function to get numbers
    function getNumberOnWords(word){
      var wordToNumber = word.match(regex); //match words that are numbers
      if(wordToNumber != null){
        return vueModule.number = word;   //Set number with the one heard 
      }
    }

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
