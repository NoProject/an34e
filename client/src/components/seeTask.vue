<template>
	<div class="see-task">
		<h1>{{task.name}}</h1>
		<h2>{{task.description}}</h2>
		<h3>{{task.deadline}}</h3>
		<h3>{{task.user_on}}</h3>
    <h3>{{task.priority}}</h3>
    <h3>{{task.status}}</h3>
    <button @click="back">Back</button>
    <div v-if="task.user_on === ''">
      <button @click="take">Take</button>
	  </div>
  </div>
</template>

<script>
  import TasksServices from '@/services/TasksServices.js'

  export default {
    name: 'see-task',
    props: ['task'],
    methods: {
      back () {
        console.log(this.task)
        window.$('.see-task').fadeOut(() => {
          window.$('.show-tasks').fadeIn()
        })
      },
      async take () {
        this.task.do = 'fill'
        await TasksServices.updateTask({task: this.task}, () => {
          console.log('foi')
          this.$parent.getTasks()
        })
      }
    }
  }
</script>