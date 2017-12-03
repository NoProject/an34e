<template>
	<div class="see-task">
		<h1>{{task.name}}</h1>
		<h2>{{task.description}}</h2>
		<h3>{{task.deadline}}</h3>
    <div v-if="task.user_on !== null">  
      <h3>{{task.user_on.name}}</h3>
    </div>
    <h3>{{task.priority}}</h3>
    <h3>{{task.status}}</h3>
    <button @click="back">Back</button>
    <div v-if="task.user_on === null">
      <button @click="take">Take</button>
	  </div>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
  import TasksServices from '@/services/TasksServices.js'

  export default {
    name: 'see-task',
    props: ['task'],
    methods: {
      back () {
        window.$('.see-task').fadeOut(() => {
          window.$('.show-tasks').fadeIn()
        })
      },
      async take () {
        this.task.do = 'fill'
        await TasksServices.updateTask({task: this.task}, (res) => {
          this.$parent.getTasks()
          this.back()
        })
      },
      async deleteTask () {
        if (confirm('Are you sure about this ?') === true) {
          await TasksServices.deleteTask({id: this.task._id}, (deleted) => {
            if (deleted > 0) {
              alert('Task deleted')
              this.$parent.getTasks()
              this.back()
            } else {
              alert('error')
            }
          })
        }
      }
    }
  }
</script>