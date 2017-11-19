<template>
  <div class="signup">
    <div class="fields">
      <form action="post">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username" class="form-control" id="username" placeholder="Choose username">

        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" class="form-control" id="email" placeholder="Enter email">

        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" class="form-control" id="password" placeholder="Password">

        <!-- <label for="password">Repeat Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password"> -->

        <input class="btn btn-primary" @click="register" value="Register for free">
      </form>
    </div>
  </div>
</template>

<script>
import LoginServices from '@/services/LoginServices'
export default {
  name: 'signup',
  data () {
    return {
      user: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    async register () {
      await LoginServices.doSignIn({
        user: {
          name: this.username,
          password: this.password,
          email: this.email
        }
      })
    }
  }
}
</script>
