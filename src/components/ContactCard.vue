<template>
  <section>
    <div>
      <h3>{{ contact.name.replaceAll('-', ' ') }}</h3>
      <p>{{ contact.number }}</p>
    </div>
    <button class="call" :id="contact.name.replaceAll(/'/g,'')" @click="goCall(contact.number)">
      <i class="gg-phone"></i>
    </button>
  </section>
</template>

<script>
export default {
  name: "ContactCard",
  props: [
      'contact'
  ],
  methods: {
    goCall(number){
      this.$store.state.inputValue = number
      this.$router.push("/")
    }
  },
  mounted() {
    if(this.contact.name.toLowerCase().includes("caca")){
      document
          .querySelector("#"+this.contact.name.replaceAll(/'/g,''))
          .style.backgroundColor = "#4b3d36"
    }
  }
}
</script>

<style scoped lang="scss">
section{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-width: 2px;
  border-color: #2c3e50;
  border-style: none none none solid;
  width: 300px;
  margin: 10px auto;
  text-align: left;
  padding: 0 20px;
  background-color: rgba(44, 62, 80, 0.1);
  button{
    width: fit-content;
    height: fit-content;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 100%;
    transition: transform 100ms;
    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  }
}
</style>