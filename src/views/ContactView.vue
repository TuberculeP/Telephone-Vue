<template>
  <div class="title">
    <div class="rien"></div>
    <h1>Contacts</h1>
    <router-link to="/add">+</router-link>
  </div>
  <contact-list/>
</template>

<script>
import ContactList from "@/components/ContactList";
export default {
  name: "ContactView",
  components: {
    ContactList
  }
}
</script>

<style scoped lang="scss">
div.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  margin: 0 30px;
  .rien{
    width: 50px;
  }
  a{
    box-sizing: border-box;
    background-color: #42b983;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    width: 50px;
    font-size: 2em;
    border-radius: 100%;
    transition: transform 500ms ease-out;
    &:hover{
      transform: rotateZ(360deg);
    }
  }
}
</style>