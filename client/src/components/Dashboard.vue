<template>
	<!-- template here -->
</template>
<script>
import ProjectServices from '@/services/ProjectServices'

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
      const response = await ProjectServices.get()
      this.projects = response.data
    }
  }
}
</script>