export default {
	state: {
		category: [],
		post: []
	},
	getters: {
		getCategory(state){
			return state.category;
		},
		getPost(state){
			return state.post;
		}
	},
	mutations: {
		categories(state, data){
			return state.category = data;
		},
		posts(state, data){
			return state.post = data;
		}
	},
	actions: {
		allCategory: ({commit}) => {
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
					context.commit('posts', response.data.posts); //chuyen response nhan duoc vao ham posts
				})
				.catch(() => {

				})
		}
	}
}