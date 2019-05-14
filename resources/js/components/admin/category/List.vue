<template>
	<div>
		<section class="content">
			<div class="row justify-content-around">
				<div class="col-8">
					<div class="card">
						<div class="card-header">
							<h3 class="card-title">Hover Data Table</h3>

							<div class="card-tools">
								<button class="btn btn-success" data-toggle="modal">
									<router-link to="/add-category" style="color:white">Add Category</router-link>
								</button>
							</div>
						</div>
						<!-- /.card-header -->
						<div class="card-body">
							<table id="example2" class="table table-bordered table-hover">
								<thead>
									<tr>
										<th>STT</th>
										<th>Name</th>
										<th>Date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(category, index) in getAllCategory" v-bind:key="category.id">
										<td>{{category.id}}</td>
										<td>
											{{category.name}}
										</td>
										<td>{{category.created_at | timeformat}}</td>
										<td>
											<router-link :to="`/edit-category/${category.id}`">Edit</router-link>
											<a href="" v-on:click.prevent="deleteCategory(category.id)">Delete</a>
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
		data (){
			return {

			}
		},
		name: 'List',
		mounted (){
			this.$store.dispatch("allCategory");
		},
		methods: {
			deleteCategory (id){
				axios.get('/category/'+id)
					.then(() => {
						this.$store.dispatch("allCategory");
						Toast.fire({
							type: 'success',
							title: 'Category deleted successfully'
						})
					})
			}
		},
		computed: {
			getAllCategory(){
				return this.$store.getters.getCategory

			}
			
		}
	}
</script>

<style scoped>
	
</style>