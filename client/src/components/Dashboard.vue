<template>
  <div class="dashboard">
    <h1>Projects</h1>
  	<div class="container">
      <div class="projects" v-for="item in dashboard">
        <div v-if="item.name !== null ">
        <router-link v-bind:to="{name: 'tasks', params: {name : item .name} }">  
          {{ item.name }}
        </router-link>
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

<style type="text/css" src="../assets/css/dashboard.css" scoped></style>
