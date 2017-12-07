<template>
  <div class="dashboard">
    <div class="main">
      <h1>Projects<br></h1>
      <div class="container">
        <div class="projects" v-for="item in dashboard">
          <div v-if="item.name !== null ">
          <router-link v-bind:to="{name: 'tasks', params: {name : item.name} }">
            {{ item.name }}
          </router-link>
          <p>{{ item.description }}</p>  
          </div>
        </div>
      </div>
      <button @click="addProject">Add Project</button>
    </div>
    <addProject id="addProject"></addProject>
  </div>
</template>
<script>
import ProjectServices from '@/services/ProjectServices'
import addProject from './addProject.vue'

export default {
  name: 'dashboard',
  data () {
    return {
      dashboard: []
    }
  },
  mounted () {
    this.getProjects()
    window.$('#addProject').hide()
  },
  methods: {
    async getProjects () {
      await ProjectServices.get((res) => {
        this.dashboard = res.data.projects
      })
    },
    addProject () {
      window.$('.main').fadeOut(() => {
        window.$('#addProject').fadeIn()
      })
    }
  },
  components: {
    addProject: addProject
  }
}
</script>

<style type="text/css" src="../assets/css/dashboard.css" scoped></style>
