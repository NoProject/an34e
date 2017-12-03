<template>
  <div class="tasks">
    <div class="show-tasks">
      <div class="high-priority">
      	<div v-for="item in highTasks">
          <router-link v-bind:to="{name: 'see-task', params: {id: item._id} }">
            <h3>{{item.name}}</h3>
          </router-link>
      	</div>
      </div>
      <div class="med-priority">
	      <div v-for="item in medTasks">
          <router-link v-bind:to="{name: 'see-task', params: {id: item._id}}">
	      	  <h3>{{item.name}}</h3>
          </router-link>
	      </div>
      </div>
      <div class="low-priority">
      	<div v-for="item in lowTasks">
          <router-link v-bind:to="{name: 'see-task', params: {id: item._id} }">
            <h3>{{item.name}}</h3>
          </router-link>
      	</div>
      </div>
      <button @click="addTask">Create task</button>
    </div>
    <addTask id="addTask"></addTask>
  </div>
</template>

<script>
  import TasksServices from '@/services/TasksServices.js'
  import addTask from './addTask.vue'
  
  export default {
    name: 'tasks',
    data () {
      return {
        highTasks: [],
        medTasks: [],
        lowTasks: []
      }
    },
    mounted () {
      this.getTasks()
      window.$('#addTask').hide()
    },
    methods: {
      async getTasks () {
        await TasksServices.getTasks({
          name: this.$route.params.name
        }, (res) => {
          let tasks = res.data.tasks
          this.highTasks = tasks.filter((item) => {
            return item.priority === '3'
          })
          this.medTasks = tasks.filter((item) => {
            return item.priority === '2'
          })
          this.lowTasks = tasks.filter((item) => {
            return item.priority === '1'
          })
        })
      },
      addTask () {
        window.$('.show-tasks').fadeOut(() => {
          window.$('#addTask').fadeIn()
        })
      }
    },
    components: {
      addTask: addTask
    }
  }
</script>