import { createApp } from 'vue';
import App from '@/App.vue';
import uis from '@/ui';

const app = createApp(App);

uis.forEach(ui => {
    app.component(ui.name, ui);
});

app.mount('#app');
