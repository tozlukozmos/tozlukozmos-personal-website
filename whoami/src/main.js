import { createApp } from 'vue';
import App from './App.vue';
import Style from './assets/Style.css';

const app = createApp(App);
app.use(Style);
app.mount('#app');
