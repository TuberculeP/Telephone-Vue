<template>
  <div class="dial">
    <button
        v-for="button in [1,2,3,4,5,6,7,8,9,'*',0,'#']"
        :key="button"
        :value="button"
        @click="addNumber($event)"
    >
      {{ button }}
    </button>
    <button id="call" @click="call()"><i class="gg-phone"></i></button>
    <button id="delete" @click="del()"><i class='gg-backspace'></i></button>
  </div>
</template>

<script>
export default {
  name: "DialButtons",
  methods: {
    addNumber(e){
      this.$store.state.inputValue += e.target.value
    },
    del(){
      if(this.$store.state.inputValue.length >0){
        this.$store.state.inputValue = this.$store.state.inputValue.slice(0,-1)
      }
    },
    call(){
      if(this.$store.state.inputValue.length > 0){
        this.$store.commit('addHistory',{
          time: Date.now(),
          number: this.$store.state.inputValue
        })
        this.$store.state.inputValue = ""
      }
    }
  }
}
</script>

<style scoped lang="scss">

.dial{
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  aspect-ratio: 3/5;
  width: 180px;
  margin: 20px auto;
  button{
    background-color: #42b983;
    border: none;
    transition: box-shadow 100ms, transform 100ms;
    font-family: inherit;
    font-size: 2em;
    font-weight: bold;
    &:hover{
      transform: translate(-5px, -5px);
      box-shadow: 5px 5px 0 #2c3e50;
      cursor: pointer;
    }
    &#call{
      grid-column: 1/3;
    }
    &#call, &#delete{
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      i{
        margin: 0;
        padding: 0;
        font-size: 3em;
      }
    }
  }
}

</style>