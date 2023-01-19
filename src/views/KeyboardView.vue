<template>
  <div class="call">
    <h1>Appel</h1>
    <div class="results">
      <div v-if="$store.state.inputValue.length>0">
        <ContactCard v-for="contact in filteredContacts" :key="contact" :contact="contact" @click="writeNumber(contact)"/>
      </div>
    </div>
    <div class="number">
      <p>{{ displayNumber('.') }}</p>
    </div>
    <DialButtons/>
  </div>
</template>

<script>
// @ is an alias to /src
import DialButtons from "@/components/DialButtons";
import ContactCard from "@/components/ContactCard";
export default {
  name: 'HomeView',
  components: {
    DialButtons,
    ContactCard
  },
  methods: {
    displayNumber(separator){
      let string = ""
      for(let i = 0; i < this.$store.state.inputValue.length; i++){
        if(i>0 && i%2 === 0){
          string += separator
        }
        string += this.$store.state.inputValue[i]
      }
      return string
    },
    writeNumber(contact){
      this.$store.state.inputValue = contact.number
    }
  },
  computed: {
    filteredContacts(){
      return this.$store.state.contactList.filter((elt)=>{
        return elt.number.includes(this.$store.state.inputValue)
      })
    }
  }
}
</script>

<style lang="scss">
.call{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .results{
    position: relative;
    border: 1px solid #2c3e50;
    width: 300px;
    margin: 0 auto;
    aspect-ratio: 5/3;
    overflow: scroll;
    section{
      width: auto;
      padding: 0 20px;
      border-style: none none solid none;
      margin: 0;
      button.call{
        display: none;
      }
      &:hover{
        cursor: pointer;
      }
    }
  }
  .number{
    height: 2em;
    width: 300px;
    margin: 0 auto;
    background-color: #2c3e50;
    padding: 1px;
    p{
      text-align: right;
      overflow: clip;
      color: white;
      font-size: 1.5em;
      margin: 0 10px;
    }
  }
}

</style>