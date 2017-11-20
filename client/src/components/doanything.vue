<template>
  <div id="vermelho">branco
  </div>
</template>

<script>
  export default {
    name: 'don',
    created () {
      window.$(document).ready(function () {
        window.$('#vermelho').css('color', 'red')
        console.log(window)
      })
    }
  }
</script>
