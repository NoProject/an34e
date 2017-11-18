<template>
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
</template>

<script>
export default {
  name: 'signup'
}
</script>
