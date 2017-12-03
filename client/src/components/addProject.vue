  <template>
    <div class="addProject">
      <form method="post">
        <input type="text" name="name" v-model="name" class="form-control" placeholder="Enter Project Name" required>
        <input type="date" name="startdate" v-model="startDate" class="form-control" required>
        <input type="date" name="finishdate" v-model="finishDate" class="form-control" required>
        <input type="text" name="description" v-model="description" class="form-control" placeholder="Enter Description" required>
        <input @click="addProjects" value="Add Project">
    </form>
    <button @click="back">Back</button>
  </div>
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
      console.log(this.startDate)
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
            this.$parent.getProjects()
          } else {
            alert('deu ruim')
          }
        })
      }
    },
    back () {
      window.$('#addProject').fadeOut(() => {
        window.$('.main').fadeIn()
      })
    }
  }
}
</script>