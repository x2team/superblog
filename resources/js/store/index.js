export default {
	state: {
		category: [],
		post: [],
		blogpost: [],
		singlepost: [],
		allCategoryPublic: [],
		latestPost: []
	},
	getters: {
		getCategory(state){
			return state.category;
		},
		getPost(state){
			return state.post;
		},
		getBlogPost(state){
			return state.blogpost;
		},
		singlePost(state){
			return state.singlepost;
		},
		allCategory_public(state){
			return state.allCategoryPublic;
		},
		latestPost(state){
			return this.state.latestPost;
		}
	},
	mutations: {
		categories(state, data){
			return state.category = data;
		},
		posts(state, data){
			return state.post = data;
		},
		getBlogPost(state, data){
			return state.blogpost = data;
		},
		singlePost(state, data){
			return state.singlepost = data;
		},
		allCategory_public(state, data){
			return state.allCategoryPublic = data;
		},
		getPostByCateId(state, data){
			state.blogpost = data;
		},
		getSearchPost(state, data){
			state.blogpost = data;
		},
		latestPost(state, data){
			state.latestPost = data;
		}
	},
	actions: {
		allCategory: ({commit}) => { //viet theo Vuejs learnwords
			axios.get('/category')
				.then((response) => {
					commit("categories", response.data.categories);
				})
				.catch(() => {

				})
		},
		allPost(context){
			axios.get('/post')
				.then((response) => {
					// console.log(response.data);
					context.commit('posts', response.data.posts); //chuyen response nhan duoc vao ham posts tren mutations
				})
				.catch(() => {

				})
		},
		getBlogPost(context){
			axios.get('/blogpost')
				.then((response) => {
					context.commit('getBlogPost', response.data.posts); 
				})
				.catch(() => {

				})
		},
		getPostById(context, payload){
			axios.get('/singlepost/'+payload)
				.then((response) => {
					context.commit('singlePost', response.data.post);
				})
				.catch(() => {

				})
		},
		allCategory_public: ( {commit} ) => {
			axios.get('/categories')
				.then((response) => {
					// console.log(response.data.categories);
					commit("allCategory_public", response.data.categories);
				})
				.catch(() => {

				})
		},
		getPostByCateId(context, payload){
			axios.get('/categorypost/'+payload)
				.then((res) => {
					// console.log(res.data.posts);
					context.commit("getPostByCateId", res.data.posts);
				})
		},
		searchPost(context, payload){
			axios.get('/search?s='+payload)
				.then((response) => {
					context.commit("getSearchPost", response.data.posts);	
				})
		},
		latestPost(context){
			axios.get('/latestpost')
				.then((response) => {
					context.commit("latestPost", response.data.posts);	
				})
		}
	}
}