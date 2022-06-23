import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent';

const routes = [
    { path: '/', component: HomeComponent },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router)

app.mount('#app')