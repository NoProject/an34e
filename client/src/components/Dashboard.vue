<template>
  <div class="dashboard">
    <header></header>
  	<div class="container">
      <div class="col-md-6">
        <h1>Projects</h1>
        <div class="projects" v-for="item in dashboard">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>  
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
      dashboard: []
    }
  },
  mounted () {
    this.getProjects()
  },
  methods: {
    async getProjects () {
      await ProjectServices.get((res) => {
        this.dashboard = res.data.projects
      })
    }
  }
}
</script>
