<template>
  <div class="signin">
    <div class="fields">
      <form method="post">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username" class="form-control" id="username" placeholder="Enter Username">

        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" class="form-control" id="password" placeholder="Password">


        <div class="itens-alias">
          <input type="checkbox" name="keep-signed" value="1">
          <span class="keep"> Keep me signed in </span>
          <a class="forgot" href="#">Forgot your password?</a>
        </div>
        <input class="btn btn-primary" @click="login" value="Sign in">
      </form>
    </div>
  </div>
</template>


<script>
import LoginServices from '@/services/LoginServices'

export default {
  name: 'signin',
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      await LoginServices.doLogin({
        user: {
          name: this.username,
          password: this.password
        }
      }, (res, err) => {
        if (err) {
          console.log(err)
        }
        if (res.data.message === 'logged') {
          this.$router.push({name: 'dashboard'})
        } else {
          alert('deu ruim')
        }
      })
    }
  }
}
</script>
