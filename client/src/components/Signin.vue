<template>
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
</template>


<script>
export default {
  name: 'signin',
  data: {
    showSignin: true
  }
}
</script>
