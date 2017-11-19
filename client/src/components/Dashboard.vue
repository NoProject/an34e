<template>
	<!-- template here -->
</template>
<script>
	import ProjectSevices from '@/services/ProjectSevices'

	export default {
		name: 'dashboard',
		data () {
			return {
				projects: []
			}
		},
    mounted () {
    	this.getProjects()
    },
    methods: {
    	async getProjects () {
    		await const response = ProjectSevices.get()
    		this.projects = response.data
    	}
    }
	}
</script>