import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import $bus from './utils/Events';
import $pages from './data';

const app = createApp(App);
app.use(router);

app.provide('$pages', $pages);
app.provide('$bus', $bus);

app.mount('#app');