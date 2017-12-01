<template>
  <div class="dashboard">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-8">

            <!-- search -->
            <!-- <div class="search">
              <input class="btn" type="search" name="search"/>
              Botao pesquisa
              <span class="search-icon"></span> -->
            </div>
          </div>
        </div>
      </div>
    </header>
  	<div class="container">
      <div class="col-md-6">
        <h1>Projects</h1>
        <div class="projects" v-for="item in dashboard">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <button @click="addProject">Add Project</button>
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
    },
    addProject () {
      this.$router.push({name: 'addproject'})
    }
  }
}
</script>

<style type="text/css" src="../assets/css/dashboard.css"></style>
