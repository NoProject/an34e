<template>
	<div class="edit-project">
		<form method="put">
        <input type="text" name="name" v-model="name" placeholder="Enter Project Name" required>
        <input type="date" name="startdate" v-model="startDate" required>
        <input type="date" name="finishdate" v-model="finishDate" required>
        <input type="text" name="description" v-model="description" placeholder="Enter Description" required>
        <input type="button" @click="editProject" value="Save">
		</form>
		<button @click="deleteProject">Delete Project</button>
		<button @click="cancel">Cancel</button>
	</div>
</template>

<script>
  import ProjectServices from '@/services/ProjectServices'

  export default {
    name: 'editProject',
    data () {
      return {
        project: {
          name: '',
          description: '',
          startDate: '',
          finishDate: ''
        }
      }
    },
    methods: {
      async editProject () {
        if (this.name === undefined || this.description === undefined || this.startDate === undefined || this.finishDate === undefined) {
          if (this.name === undefined) {
            alert('name cannot be empty')
          }
          if (this.description === undefined) {
            alert('description cannot be empty')
          }
          if (this.startDate === undefined) {
            alert('start date cannot be empty')
          }
          if (this.finishDate === undefined) {
            alert('finish date cannot be empty')
          }
        } else {
          await ProjectServices.put({
            project: {
              name: this.name,
              description: this.description,
              startDate: this.startDate,
              finishDate: this.finishDate
            },
            beforeEdit: this.$route.params.name
          }, () => {
            alert('Project Edited')
            this.$router.push({name: 'tasks', params: {name: this.name}})
          })
        }
      },
      cancel () {
        window.$('#edit-project').fadeOut(() => {
          window.$('.show-tasks').fadeIn()
        })
      },
      async deleteProject () {
        if (confirm('Are you sure about this ?') === true) {
          await ProjectServices.deleteProject({name: this.$route.params.name}, () => {
            this.$router.push({name: 'dashboard'})
          })
        }
      }
    }
  }
</script>