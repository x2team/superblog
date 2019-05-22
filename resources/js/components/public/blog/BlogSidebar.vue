<template>
	<span id="sidebar">
		<div class="span4">
			<aside class="right-sidebar">
				<div class="widget">
					<form class="form-search">
						<input
							v-on:keyup="realSearch"
							v-model="keyword"
							placeholder="Type something" 
							type="text" 
							class="input-medium search-query">
						<button 
							v-on:click.prevent="realSearch"
							type="submit" 
							class="btn btn-square btn-theme">Search</button>
					</form>
				</div>


				<div class="widget">
					<h5 class="widgetheading">Categories</h5>
					<ul class="cat">
						<li v-for="category in allCategory_public">
							<i class="icon-angle-right"></i>
							<router-link :to="`/categories/${category.id}`">{{ category.name }}</router-link>
						</li>
						
					</ul>
				</div>


				<div class="widget">
					<h5 class="widgetheading">Latest posts</h5>
					<ul class="recent">

						<li v-for="(post, index) in blogPost" v-if="index<5">
							<img :src="`upload/image/${post.photo}`" class="pull-left" width="65px" height="65px" />
							<h6><router-link :to="`blog/${post.id}`">{{ post.title }}</router-link></h6>
							<p>
								{{ post.description | sortlength(100, "...") }}
							</p>
						</li>
						
					</ul>
				</div>

				<!-- <div class="widget">
					<h5 class="widgetheading">Popular tags</h5>
					<ul class="tags">
						<li><a href="#">Web design</a></li>
						<li><a href="#">Trends</a></li>
						<li><a href="#">Technology</a></li>
						<li><a href="#">Internet</a></li>
						<li><a href="#">Tutorial</a></li>
						<li><a href="#">Development</a></li>
					</ul>
				</div> -->


			</aside>
		</div>
	</span>
</template>




<script>
	export default {
		name: "BlogSidebar",
		data(){
			return {
				keyword: '',
			}
		},
		mounted() {
			this.$store.dispatch('allCategory_public');
			this.$store.dispatch('getBlogPost');
		},
		computed: {
			allCategory_public(){
				return this.$store.getters.allCategory_public;
			},
			blogPost(){
				return this.$store.getters.getBlogPost;
			}
		},
		methods: {
			realSearch(){
				this.$store.dispatch('searchPost', this.keyword);
			}
		}

	}
</script>

<style scoped>

</style>