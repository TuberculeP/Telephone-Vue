<template>
<h1>Historique</h1>
  <div v-if="$store.state.historyCalls.length > 0">
    <section v-for="history in $store.state.historyCalls" :key="history.time">
      <div>
        <h3>{{getName(history.number)}}</h3>
        <p>{{getTime(history.time)}}</p>
      </div>
      <button @click="goCall(history)">
        <i class="gg-phone"></i>
      </button>
    </section>
  </div>
  <p v-else>Rien à afficher pour le moment</p>
</template>

<script>
export default {
  name: "HistoryView",
  methods: {
    getTime(now){
      let date = new Date(now)
      return date.toDateString()+", "+date.getHours()+'h'+date.getMinutes()
    },
    getName(number){
      let contact = this.$store.state.contactList.find(contact => {
        return contact.number === number
      })
      return contact?contact.name:number
    },
    goCall(history){
      this.$store.state.inputValue = history.number
      this.$router.push("/")
    }
  }
}
</script>

<style scoped lang="scss">
h1{
  margin-top: 40px;
}
section{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-style: none none solid none;
  width: fit-content;
  margin: 0 auto;
}
button {
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

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>