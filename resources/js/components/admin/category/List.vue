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
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Trident</td>
										<td>Internet
											Explorer 4.0
										</td>
										<td>
											<a href="">Edit</a>
											<a href="">Delete</a>
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
		name: 'List'
	}
</script>

<style scoped>
	
</style>