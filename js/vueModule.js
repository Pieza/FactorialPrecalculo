/* Create a Vue instance
    Save instance into a variable to make vue methods accesible to other scripts
*/

var vueModule = new Vue({
    template: '#app',
    data: function() {
        return {
            number: null, //The number we want to know the factorial
            result: null, //Factorial of number
            steps: "",     //Steps to get factorial
            listen: false,  //Is the mic listening
            instructions: false, //Display instructions
            canvas: false, //Display instructions
            leap: false,
            data1 : 0,
            data2 : 0,
            data3 : 0,
            data4 : 0,
            data5 : 0,
            data6 : 0,
            data8 : 0,
            data7 : 0,
            data9 : 0,
            data10 : 0,
        }
    },
    methods: {
        getFactorial(n) {
            if(n >= 0){
                if (n == 0){ //If number is 0, return 0
                    this.steps += 0 + " x " + n;
                  return 0; 
                }
                if (n == 1){ //If number is 1, return 1
                    this.steps += " x " + n;
                    return  1; 
                  }
                if (n != this.number)
                  this.steps += " x " + n;
                else
                  this.steps += n;
                return n * this.getFactorial(n-1); //We use recursion to multiply n by n - 1 until we reach 0
                this.result = n;
            } else {
                this.steps = 'No se puede calcular el factorial de un número negativo';
                return 'No existe';          
            }             
          },
          getResult(){     
              this.result = null;
              this.steps = "";
              if(this.number != null){
                this.result = this.getFactorial(this.number); //Set result value to print it into screen
              }
          },
          clear(){  //Use this method to clear numbers at screen
            this.number = null; 
            this.result = null;
            this.steps = "";
          },
          toggle(){
              this.listen = !this.listen;
              if(this.listen){
                  annyang.start();
              } else {
                  annyang.abort();
              }         
          },
          toggleLeap(){
            this.leap = !this.leap;
          },
          showSteps(){
              $('.ui.modal')
               .modal('show');
          },
          hideSteps(){
            $('.ui.modal')
             .modal('hide');
          },
          toggleInstructions(){ //hide/show instructions
            this.instructions = !this.instructions;
          },
          toggleCanvas(){ //hide/show instructions
            this.canvas = !this.canvas;
          }
    }
}).$mount('#app'); 