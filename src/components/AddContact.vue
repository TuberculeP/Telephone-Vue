<template>
  <h2>Ajouter un contact</h2>
  <div class="add-contact">
    <input type="text" name="name" placeholder="Nom" v-model="name">
    <input type="text" name="phone" placeholder="N° de Téléphone" v-model="number">
    <button @click="addContact()">Ajouter</button>
  </div>
</template>

<script>
export default {
  name: "AddContact",
  data() {
    return {
      name: "",
      number: ""
    }
  },
  methods: {
    htmlEncode(s)
    {
      let el = document.createElement("div");
      el.innerText = el.textContent = s;
      s = el.innerHTML;
      return s;
    },
    addContact(){
      if(this.name !== "" && this.number !== ""){
        if(!this.$store.state.contactList.find(contact => {
          return contact.name === this.name
        })){
          this.$store.commit('insertContact',
              {
                name: this.htmlEncode(this.name.replaceAll(' ','-')),
                number: this.number
              }
          )
          this.$router.push("/contact")
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .add-contact{
    width: fit-content;
    padding: 20px;
    margin: 0 auto;
    border: 1px solid #2c3e50;
    box-shadow: 5px 5px 0 #2c3e50;
    input{
      display: block;
      border-width: 2px;
      border-style: none none none solid;
      border-color: #2c3e50;
      appearance: none;
      padding: 10px;
      background-color: rgba(44, 62, 80, 0.1);
      margin: 10px;
    }
    button{
      display: block;
      width: fit-content;
      margin: 20px auto;
      border: none;
      background-color: #42b983;
      color: white;
      padding: 10px;
      font-weight: bolder;
      font-size: 1.2em;
      appearance: none;
      transition: box-shadow 100ms, transform 100ms;
      &:hover{
        transform: translate(-5px, -5px);
        box-shadow: 5px 5px 0 #2c3e50;
        cursor: pointer;
      }
    }
  }
</style>