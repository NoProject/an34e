<template>
<html class="login">
  <head>
    <meta charset="utf-8">
    <title>Task Manager X</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="@/assets/css/login.css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900|Oswald:200,300,400,700" rel="stylesheet">
  </head>
  <body>
    <header class="logo">
      <span class="task">Task</span>Manager <span class="x">x</span>
    </header>

    <main class="container">
      <div class="row">
        <div class="col-md-7 col-sm-6 col-xs-12">
          <h1> Fácil para problemas difíceis</h1>
          <p class="desc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>

        <div class="col-md-5 col-sm-6 col-xs-12">
          <div class="login-area">
            <div class="top-nav">
              <a class="sign-in" href="#">Sign in</a>
              <a class="sign-up" href="#">Register</a>
            </div>
          </div>
        </div>

      </div>


    </main>
    <footer>
      made with <span>♡</span> at
      <a target="_blank" href="https://github.com/NoProject/an34e">
        <img src="../assets/img/Octocat.png"/>
      </a>
    </footer>

    <!-- <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="assets/js/main.js" type="text/javascript"></script> -->
  </body>
</html>
</template>



<script>
import LoginServices from '@/services/LoginServices'

export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      await LoginServices.doLogin({
        user: {
          username: this.username,
          password: this.password
        }
      })
    }
  }
}
</script>
<style src="../assets/css/login.css"> </style>
