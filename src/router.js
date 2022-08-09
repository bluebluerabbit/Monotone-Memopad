import { createWebHistory, createRouter } from "vue-router"; // 라이브러리 import
import Write from './components/MemoWrite.vue';
import Main from './/App.vue';
const routes = [
  {
    path: '/write',
    component: Write,
  },
  {
    path: '/',
    componet: Main,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;