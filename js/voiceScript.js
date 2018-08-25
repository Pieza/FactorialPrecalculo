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
      'Silenciar': function() {
        vueModule.toggle();
      },
      'Borrar': function() {
        vueModule.clear();
      },
      'Limpiar': function() {
        vueModule.clear();
      },
      'Factorial de *number': function(number) { 
        getNumberOnWords(number);
        vueModule.getResult();
      },
      'Ver procedimiento': function() {
        vueModule.showSteps();
      },
      'Procedimiento': function() {
        vueModule.showSteps();
      },
      'Pasos': function() {
        vueModule.showSteps();
      },
      'Oultar': function() {
        vueModule.hideSteps();
      },
      'Cerrar procedimiento': function() {
        vueModule.hideSteps();
      },
      'Oultar procedimiento': function() {
        vueModule.hideSteps();
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

  }
