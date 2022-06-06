<template>
   	<div class="content">
   		<div class="container-fluid">
   			<div class="row">
				<div class="col-12 col-md-12">
					<h2>This is tags: {{msg}}</h2>
				</div>
			</div>
			<div>
				<table class="table table-snipped">
					<thead>
						<tr>
							<td>Sl. No</td>
							<td>Name</td>
							<td>Slug</td>
							<td>Status</td>
							<td>Action</td>
						</tr>
					</thead>
				</table>
			</div>
   		</div>
   	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Tags',
		data(){
			return{
				msg: "This is tags"
			}
		}
	}
</script>