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

    <!-- <div class="pre-loader"></div> -->
    <main class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <h1> Fácil para problemas difíceis</h1>
          <p class="desc">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="login-area">
            <div class="top-nav">
              <a class="sign-in" href="#" @click="hideSignIn">Sign in</a>
              <a class="sign-up" href="#" @click="hideSignUp">Register</a>
            </div>
              <Sign-in id="sign-in"></Sign-in>
              <Sign-up id="sign-up" style="display: none"></Sign-up>
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
export default {
  name: 'login',
  methods: {
    hideSignIn () {
      console.log(2)
      let signIn = document.getElementById('sign-up')
      let signUp = document.getElementById('sign-in')
      signIn.style.display = 'none'
      signUp.style.display = 'block'
    },
    hideSignUp () {
      let signIn = document.getElementById('sign-up')
      let signUp = document.getElementById('sign-in')
      signIn.style.display = 'block'
      signUp.style.display = 'none'
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
