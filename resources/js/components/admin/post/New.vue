<template>
	<div>
		<section class="content">
			<div class="container-fluid">
				<div class="row justify-content-around">
					<div class="col-md-10">
						<!-- general form elements -->
						<div class="card card-primary">
							<div class="card-header">
								<h3 class="card-title">Add New Post</h3>
							</div>
							<!-- /.card-header -->
							<!-- form start -->
							<form role="form" v-on:submit.prevent="addPost()" enctype="multipart/form-data">
								<div class="card-body">
									<div class="form-group">
										<label for="postId">Post title</label>
										<input :class="{ 'is-invalid': form.errors.has('title') }" 
										v-model="form.title"
										name="title" 
										type="text" 
										class="form-control" 
										id="postId" 
										placeholder="Enter Post title">
										<has-error :form="form" field="title"></has-error>
									</div>

									<div class="form-group">
										<label for="description">Post description</label>
										
										<!-- <textarea :class="{ 'is-invalid': form.errors.has('description') }" 
										v-model="form.description"
										name="description" 
										type="text" 
										class="form-control" 
										id="description" 
										placeholder="Enter Post description"></textarea> -->
										
										<markdown-editor v-model="form.description"></markdown-editor>

										<has-error :form="form" field="description"></has-error>
									</div>

									<div class="form-group">
										<label for="category">Select Category</label>
										<select class="form-control" 
											name="cat_id" 
											:class="{ 'is-invalid': form.errors.has('cat_id') }"
											v-model="form.cat_id"
											>
											
											<option disabled value="">Select Category</option>
											<option 
												v-bind:value="category.id"
												v-for="category in getAllCategory"
												v-model="form.cat_id"
												>{{ category.name }}</option>
										</select>
										<has-error :form="form" field="cate_id"></has-error>
									</div>
									
									<div class="form-group">
										<label for="photo">File input</label>
										<!-- <div class="custom-file">
											<input type="file" 
												:class="{ 'is-invalid': form.errors.has('photo') }" 
												id="photo"
												class="custom-file-input"
											>
											<label class="custom-file-label" for="exampleInputFile">Choose file</label>
										</div> -->

										<input type="file" 
											:class="{ 'is-invalid': form.errors.has('photo') }" 
											id="photo"
											class="form-control"
											v-on:change="changePhoto($event)"
											>
										<img v-bind:src="form.photo" style="width: 100px">
										<has-error :form="form" field="photo"></has-error>
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
		name: 'New',
		data (){
			return {
				form: new Form({
					title: '',
					description: '',
					cat_id: '',
					photo: '',

				})
			}
		},
		mounted() {
			this.$store.dispatch("allCategory");
			// this.getAllCategory();
		},
		computed: {
			getAllCategory(){
				return this.$store.getters.getCategory
			}
		},
		methods: {
			addPost() {
				this.form.post('add-post')
					.then(() => {
						this.$router.push('/post-list')

						Toast.fire({
							type: 'success',
							title: 'Post added successfully'
						})
					})
					.catch(() => {

					})
			},
			changePhoto(event){
				let file = event.target.files[0];
				let reader = new FileReader();
				
				if(file.size > 500000){
					Swal.fire({
						type: 'error',
						title: 'Oops...',
						text: 'Something went wrong!'
					})
				}
				else{
					reader.onload = event => {
						this.form.photo = event.target.result;

				    //console.log(event.target.result);
				    // console.log(reader.result)
					};

					reader.readAsDataURL(file);
				}
				
			}

		}
	}
</script>

<style scoped>
	
</style>