import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogView from '../views/BlogView.vue';
import ArticleView from '../views/ArticleView.vue';
import MarketView from '../views/MarketView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import BigProjectView from '@/views/BigProjectView.vue';
import Error404 from '@/views/Error404.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/article', name: 'article', component: ArticleView },
  {
    path: '/market',
    name: 'market',
    component: MarketView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/projectDetails',
    name: 'bigProject',
    component: BigProjectView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: Error404,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
