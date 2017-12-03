<template>
  <div class="tasks">
    <div class="show-tasks">
      <div class="high-priority">
      	<div v-for="item in highTasks">
          <div class="task" @click="seeTask(item)">
            <h3>{{item.name}}</h3>            
          </div>
      	</div>
      </div>
      <div class="med-priority">
	      <div v-for="item in medTasks">
          <div class="task" @click="seeTask(item)">
            <h3>{{item.name}}</h3>            
          </div>
	      </div>
      </div>
      <div class="low-priority">
      	<div v-for="item in lowTasks">
          <div class="task" @click="seeTask(item)">
            <h3>{{item.name}}</h3>            
          </div>
      	</div>
      </div>
      <button @click="addTask">Create task</button>
    </div>
    <addTask id="addTask"></addTask>
    <seeTask id="seeTask" :task="this.task"></seeTask>
  </div>
</template>

<script>
  import TasksServices from '@/services/TasksServices.js'
  import addTask from './addTask.vue'
  import seeTask from './seeTask'
  
  export default {
    name: 'tasks',
    data () {
      return {
        task: '',
        highTasks: [],
        medTasks: [],
        lowTasks: []
      }
    },
    mounted () {
      this.getTasks()
      window.$('#addTask').hide()
      window.$('#seeTask').hide()
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
      },
      seeTask (item) {
        window.$('.show-tasks').fadeOut(() => {
          window.$('#seeTask').fadeIn()
          this.task = item
          console.log(this.task.user_on)
        })
      }
    },
    components: {
      addTask: addTask,
      seeTask: seeTask
    }
  }
</script>