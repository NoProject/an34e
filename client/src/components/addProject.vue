<template>
<form method="post">
    <input type="text" name="name" v-model="name" class="form-control" placeholder="Enter Project Name">
    <input type="text" name="startdate" v-model="startdate" class="form-control" placeholder="Enter Start Date">
    <input type="text" name="finishdate" v-model="finishdate" class="form-control" placeholder="Enter Finish Date">
    <input type="text" name="description" v-model="description" class="form-control" placeholder="Enter Description">
    <input @click="addProjects" value="Add Project">
</form>
</template>

<script>
import ProjectServices from '@/services/ProjectServices'

export default {
  name: 'addproject',
  data () {
    return {
      project: {
        name: '',
        startdate: '',
        finishdate: '',
        description: ''
      }
    }
  },
  methods: {
    async addProjects () {
      await ProjectServices.post({
        project: {
          name: this.name,
          startdate: this.startDate,
          finishdate: this.finishDate,
          description: this.description,
          managers: null,
          developers: null
        }
      }, (res) => {
        if (res.data.message === 'adicionado') {
          alert('deu bom')
        } else {
          alert('deu ruim')
        }
      })
    }
  }
}
</script>