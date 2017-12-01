<template>
	<div class="add-task">
		<form method="post">
			<input type="text" class="form-control" v-model="name" name="name"	placeholder="Enter task name" required>
			<input type="date" class="form-control" v-model="deadline" name="deadline" required>
			<input type="text" class="form-control" v-model="description" name="description"	placeholder="Enter a little description" required>
			<h3>Priority</h3>
			<input type="radio" class="form-control" v-model="priority" name="priority"	value="3" required>High<br>
			<input type="radio" class="form-control" v-model="priority" name="priority"	value="2" required>Medium<br>
			<input type="radio" class="form-control" v-model="priority" name="priority"	value="1" required>Low<br>
			<input type="button" v-on: @click="addTask">add task</button>
		</form>
	</div>
</template>

<script>
  import TaskServices from '@/services/TasksServices.js'

  export default{
    name: 'add-task',
    data () {
      return {
        name: '',
        description: '',
        deadline: '',
        priority: '',
        project_owner: ''
      }
    },
    methods: {
      async addTask () {
        console.log(this.description)
        if (this.name === '' || this.description === '' || this.deadline === '' || this.priority === '') {
          if (this.name === '') {
            alert('name cannot be empty')
          }
          if (this.description === '') {
            alert('description cannot be empty')
          }
          if (this.deadline === '') {
            alert('deadline cannot be empty')
          }
          if (this.priority === '') {
            alert('priority cannot be empty')
          }
        } else {
          await TaskServices.postTasks({
            task: {
              name: this.name,
              description: this.description,
              deadline: this.deadline,
              priority: this.priority,
              project_owner: this.$route.params.name
            }
          }, (res) => {
            if (res.data.message === 'ok') {
              alert('task created')
            } else {
              alert('error')
            }
          }
          )
        }
      }
    }
  }
</script>