<template>
<html class="login">
  <body>
    <header class="logo">
      <span class="task">Task</span>Manager <span class="x">x</span>
    </header>
   <div class="pre-loader"></div>
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
              <sign-in id="sign-in"></sign-in>
              <sign-up id="sign-up" style="display: none"></sign-up>
          </div>
        </div>

      </div>
    <rodape></rodape>
    </main>

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
    },
    loading () {
      window.$(document).ready(function () {
        // window.$('#vermelho').css('color', 'red')
        // window.$('.pre-loader').css('background-color', 'red')
        setTimeout(function () {
          window.$('.pre-loader').fadeOut()
        }, 2000)
      })
    }
  },
  mounted () {
    this.loading()
  },
  created () {
      // console.log(window)
      // window.$(document).ready(function () {
    // this.loading()
  }
}
</script>
<style type="text/css" src="../assets/css/login.css"></style>
