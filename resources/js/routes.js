
// import AdminHome from './components/admin/AdminHome.vue'

export let routes = [
  { path: '/home', component: require('./components/admin/AdminHome.vue').default },
  { path: '/post', component: require('./components/ExampleComponent.vue').default },
  { path: '/category-list', component: require('./components/admin/category/List.vue').default },
  { path: '/add-category', component: require('./components/admin/category/New.vue').default },
  // { path: '/bar', component: Bar }
]