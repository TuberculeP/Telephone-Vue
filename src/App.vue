<template>
  <nav>
    <router-link to="/contact">Contacts</router-link>
    <router-link to="/">Appeler</router-link> |
    <router-link to="/history">Historique</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  background-color: #2c3e50;
  margin-bottom: 20px;
  a {
    width: 100%;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 20px;
    &.router-link-exact-active {
      color: #2c3e50;
      background-color: #42b983;
    }
  }
}
</style>
