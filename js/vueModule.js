/* Create a Vue instance
    Save instance into a variable to make vue methods accesible to other scripts
*/
var vueModule = new Vue({
    template: '#app',
    data: function() {
        return {
            number: null,   //The number we want to know the factorial
            result: null    //Factorial of number
        }
    },
    methods: {
        getFactorial(n) { 
            if (n == 0){ //If number is 0, return 1
              return 1; 
            }
            return n * this.getFactorial(n-1); //We use recursion to multiply n by n - 1 until we reach 0
            this.result = n;    
          },
          getResult(){     
              this.result = null;
              if(this.number != null){
                this.result = this.getFactorial(this.number); //Set result value to print it into screen
              }
          },
          clear(){  //Use this method to clear numbers at screen
            this.number = null; 
            this.result = null;
          }
    }
}).$mount('#app'); 