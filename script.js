console.log('vue ok', Vue);


const app = Vue.createApp({
    data(){
        return{
            firstName:'Buon inizio'
        }
    }
});

app.mount('#root');