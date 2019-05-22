
// import AdminHome from './components/admin/AdminHome.vue'

export let routes = [
  { path: '/home', component: require('./components/admin/AdminHome.vue').default },
  // { path: '/post', component: require('./components/ExampleComponent.vue').default },
  { path: '/category-list', component: require('./components/admin/category/List.vue').default },
  { path: '/add-category', component: require('./components/admin/category/New.vue').default },
  { path: '/edit-category/:id', component: require('./components/admin/category/Edit.vue').default },

  // Post
  { path: '/post-list', component: require('./components/admin/post/List.vue').default },
  { path: '/add-post', component: require('./components/admin/post/New.vue').default },
  { path: '/edit-post/:id', component: require('./components/admin/post/Edit.vue').default },




  //FontEnd Routes
	{ path: '/', component: require('./components/public/PublicHome.vue').default },
	{ path: '/blog', component: require('./components/public/blog/BlogPost.vue').default },
	{ path: '/blog/:id', component: require('./components/public/blog/SingleBlog.vue').default },
	{ path: '/categories/:id', component: require('./components/public/blog/BlogPost.vue').default },
]