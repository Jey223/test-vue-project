import { createApp } from 'vue'
import App from './App.vue'

import CalculatorList from './components/CalculatorList.vue';

const app = createApp(App);

app.component('calculator-buttons', CalculatorList )

app.mount('#app')
