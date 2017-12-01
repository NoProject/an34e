<template>
	<div class="see-task">
		<label>{{this.name}}</label>
		<label>{{this.description}}</label>
		<label>{{this.deadline}}</label>
		<label>{{this.user_on}}</label>
	</div>
</template>

<script>
  import TasksServices from '@/services/TasksServices'

  export default {
    name: 'see-task',
    data () {
      return {
        name: '',
        description: '',
        deadline: '',
        user_on: ''
      }
    },
    mounted () {
      this.getTask()
    },
    methods: {
      async getTask () {
        await TasksServices.getTask({
          id: this.$route.params.id
        }, (res) => {
          this.name = res.data.task.name
          this.description = res.data.task.description
          this.deadline = res.data.task.deadline
          this.user_on = res.data.task.user_on
        })
      }
    }
  }
</script>