<template>
	<div class="see-task">
		<div class="task-desc">
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
	    <button @click="editTask">Edit</button>
    </div>
    <div class="edit-task">
    	<form method="put">	
    		<input type="text" name="name" v-model="task.name">
    		<input type="text" name="description" v-model="task.description">
    		<input type="button" v-on: @click="saveEdit" value="Save">
    	</form>
    	<button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
  import TasksServices from '@/services/TasksServices.js'

  export default {
    name: 'see-task',
    props: ['task'],
    mounted () {
      window.$('.edit-task').hide()
    },
    updated () {
      window.$('.edit-task').hide()
    },
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
      },
      editTask () {
        window.$('.task-desc').fadeOut(() => {
          window.$('.edit-task').fadeIn()
        })
      },
      cancelEdit () {
        window.$('.edit-task').fadeOut(() => {
          window.$('.task-desc').fadeIn()
        })
      },
      async saveEdit () {
        if (this.task.name === '' || this.task.description === '') {
          if (this.task.name === '') {
            alert('Name cannot be empty')
          }
          if (this.task.description === '') {
            alert('Description cannot be empty')
          }
        } else {
          await TasksServices.updateTask({task: this.task}, (res) => {
            this.cancelEdit()
            this.$parent.getTasks()
          })
        }
      }
    }
  }
</script>