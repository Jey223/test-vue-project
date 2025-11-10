import { createApp } from 'vue'
import App from './App.vue'

// import CalculatorList from './components/CalculatorList.vue';
import FunDay from './components/FunDay.vue';

const app = createApp(App);

// app.component('calculator-buttons', CalculatorList )

app.component('fun-day', FunDay )


app.mount('#app')
