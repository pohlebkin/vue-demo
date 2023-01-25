import {createApp} from 'vue'
import App from '@/App.vue'
import UIS from '@/UI'

const app = createApp(App)

UIS.forEach((UI) => {
  app.component(UI.name, UI)
})

app.mount('#app')
