/* Create a Vue instance
    Here we create the module app
*/
var vueModule = new Vue({
    template: '#app',
    data: function() {
        return {
            number: null,
            result: null
        }
    },
    methods: {
        getFactorial(n) { 
            if (n == 0){ //Si el número es 0, el factorial es 1
              return 1; 
            }
            return n * this.getFactorial(n-1); //Usamos recursividad
            this.result = n;
          },
          getResult(){
              this.result = null;
              if(this.number != null){
                this.result = this.getFactorial(this.number);
              }
          },
          clear(){
            this.number = null;
            this.result = null;
          }
    }
}).$mount('#app'); 