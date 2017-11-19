<template>
<html class="login">
  <head>
    <meta charset="utf-8">
    <title>Task Manager X</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="@/assets/css/login.css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900|Oswald:200,300,400,700" rel="stylesheet">
  </head>
  <body @onload="loading()">
    <header class="logo">
      <span class="task">Task</span>Manager <span class="x">x</span>
    </header>

    <!-- <div class="pre-loader"></div> -->
    <main class="container">
      <div class="row">
        <div class="col-md-7 col-sm-6 col-xs-12">
          <h1> Fácil para problemas difíceis</h1>
          <p class="desc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>

        <div class="col-md-5 col-sm-6 col-xs-12">
          <div class="login-area">
            <div class="top-nav">
              <a class="sign-in" href="#" onclick="do()">Sign in</a>
              <a class="sign-up" href="#">Register</a>
            </div>
            <div class="signin">
              <div class="fields">
                <form action="post">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email">

                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password">


                  <div class="itens-alias">
                    <input type="checkbox" name="keep-signed" value="1">
                    <span class="keep"> Keep me signed in </span>
                    <a class="forgot" href="#">Forgot your password?</a>
                  </div>
                  <input class="btn btn-primary" type="submit" value="Sign in">
                </form>
              </div>
            </div>

            <div class="signup">
              <div class="fields">
                <form action="post">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Choose username">

                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email">

                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password">

                  <label for="password">Repeat Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password">

                  <input class="btn btn-primary" type="submit" value="Register for free">
                </form>
              </div>
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

  </body>
</html>
</template>



<script>
import LoginServices from '@/services/LoginServices'
// import jquery from 'Jquery'
// var $ = window.jQuery = require('jquery')

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
    // loading () {
    //   window.onload = function () {
    //     var objeto = document.getElementById('pre-loader')
    //
    //     function fadeIn (element, time) {
    //       processa(element, time, 0, 100)
    //     }
    //     function fadeOut (element, time) {
    //       processa(element, time, 500, 0)
    //     }
    //     fadeOut(objeto, 1)
    //   }
    //   function processa (element, time, initial, end) {
    //     if (initial === 0) {
    //       var increment = 2;
    //       element.style.display = 'block'
    //     }
    //     else {
    //       var increment = -2
    //     }
    //     opc = initial
    //
    //    intervalo = setInterval (function() {
    //      if ((opc == end)) {
    //        if (end == 0) {
    //          element.style.display = "none"
    //        }
    //        clearInterval (intervalo)
    //    }else {
    //       var opc = opc + increment
    //       element.style.opacity = opc/100
    //       element.style.filter = "alpha(opacity="+opc+")"
    //       }
    //    },time * 10)
    //   }
    // }
  }
}
</script>
<style src="../assets/css/login.css"> </style>
