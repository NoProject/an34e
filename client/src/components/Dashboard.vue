<template>
  <div class="dashboard">
    <header></header>
  	<div class="container">
      <div class="col-md-6">
        <h1>Projects</h1>
        <div class"projects" v-for="project in projects">
          <h1>{{project.title}}</h1>
          <p>{{project.description}}</p>
        </div>
      </div>
    </div>
  </div>
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
