<template>
	<div>
		<section class="content">
			<div class="row justify-content-around">
				<div class="col-12">
					<div class="card">
						<div class="card-header">
							<h3 class="card-title">Post List</h3>

							<div class="card-tools">
								<button class="btn btn-success" data-toggle="modal">
									<router-link to="/add-post" style="color:white">Add Post</router-link>
								</button>
							</div>
						</div>
						<!-- /.card-header -->
						<div class="card-body">
							<table id="example2" class="table table-bordered table-hover">
								<thead>
									<tr>
										<th>STT</th>
										<th>User</th>
										<th>Category</th>
										<th>Title</th>
										<th>Des</th>
										<th>Photo</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(post, index) in getAllPost" v-bind:key="post.id">
										<td>{{post.id}}</td>
										<td v-if="post.user">{{ post.user.name }}</td>
										<td v-if="post.category">{{ post.category.name }}</td>
										<td>{{post.title | sortlength(20, "---")}}</td>
										<td>{{post.description | sortlength(30, "...") }}</td>
										<td><img v-bind:src="ourImage(post.photo)" style="width: 60px" alt=""></td>
										<td>
											<router-link :to="`edit-post/${post.id}`">Edit</router-link>
											<a href="" v-on:click.prevent="deletePost(post.id)">Delete</a>
										</td>
									</tr>
								</tbody>
								
							</table>
						</div>
						<!-- /.card-body -->
					</div>
					<!-- /.card -->


					

				</div>
				<!-- /.col -->
			</div>
			<!-- /.row -->
		</section>
	</div>
</template>

<script>
	export default {
		name: "List",
		data (){
			return {

			}
		},
		mounted (){
			this.$store.dispatch("allPost");
		},
		computed: {
			getAllPost(){
				return this.$store.getters.getPost
			}
		},
		methods: {
			ourImage(img){
				return "upload/image/"+img;
			},
			deletePost(id){
				axios.delete('/delete/'+id)
					.then(() => {

						this.$store.dispatch("allPost");
						Toast.fire({
							type: 'success',
							title: 'Post deleted successfully'
						})
					})
					.catch(() => {

					})
			}
		}
	}
</script>

<style scoped>
	
</style>