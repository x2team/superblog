<template>
	<div>
		<section class="content">
			<div class="container-fluid">
				<div class="row justify-content-around">
					<div class="col-md-6">
						<!-- general form elements -->
						<div class="card card-primary">
							<div class="card-header">
								<h3 class="card-title">Add New Category</h3>
							</div>
							<!-- /.card-header -->
							<!-- form start -->
							<form role="form" v-on:submit.prevent="addCategory()">
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
									<button type="submit" class="btn btn-primary">Add</button>
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
		data (){
			return {
				form: new Form({
					name: ''
				})
			}
		},
		methods: {
			addCategory (){
				this.form.post('/add-category')
				.then((response) => {
					console.log(response.data)

					Toast.fire({
						type: 'success',
						title: 'Category added successfully'
					})
				})
				.catch(() => {

				})

			}
		}
	}
</script>