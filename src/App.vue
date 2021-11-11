<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div class="container">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" to="/">Home</router-link>
                </div>
                <div class="navbar-nav text-light">
                    <h2><i>Калькулятор расхода топлива</i></h2>
                </div>
                <div class="navbar-nav text-light">
                    <span>"CTO СПЛ АК ВД"</span>
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
    background-color: rgb(153, 202, 182);
}
</style>