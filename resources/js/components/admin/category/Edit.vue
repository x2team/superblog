<template>
	<div>
		<section class="content">
			<div class="container-fluid">
				<div class="row justify-content-around">
					<div class="col-md-6">
						<!-- general form elements -->
						<div class="card card-primary">
							<div class="card-header">
								<h3 class="card-title">Edit Category: {{this.$route.params.id}}</h3>
							</div>
							<!-- /.card-header -->
							<!-- form start -->
							<form role="form" v-on:submit.prevent="updateCategory()">
								<div class="card-body">
									<div class="form-group">
										<label for="categoryId">Category Name</label>
										<input :class="{ 'is-invalid': form.errors.has('name') }" 
										v-model="form.name"
										name="name" 
										type="text" 
										class="form-control" 
										id="categoryId" 
										placeholder="Enter Category name">
										<has-error :form="form" field="name"></has-error>
									</div>
								</div>
								<!-- /.card-body -->

								<div class="card-footer">
									<button type="submit" class="btn btn-primary">Save</button>
								</div>
							</form>
						</div>
						<!-- /.card -->



					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Edit',
		mounted(){
			axios.get(`/edit-category/${this.$route.params.id}`)
				.then((response) => {

					this.form.fill(response.data.categories)
					
				})
				.catch(() => {

				})
		},
		data (){
			return {
				form: new Form({
					name: ''
				})
			}
		},
		methods: {
			updateCategory (){
				this.form.post(`/update-category/${this.$route.params.id}`)
					.then(() => {

						this.$router.push('/category-list')

						Toast.fire({
							type: 'success',
							title: 'Category edited successfully'
						})
					})
					.catch(() => {

					})
			}
		}
	}
</script>