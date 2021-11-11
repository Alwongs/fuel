<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div class="container">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" to="/">Home</router-link>
                </div>
            </div>
        </nav>
        <div style="margin-top: 2rem">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
body {
    background-color: rgb(128, 206, 173);
}
</style>