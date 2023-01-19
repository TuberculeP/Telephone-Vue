<template>
  <div class="contact-list">
    <ContactCard v-for="contact in $store.state.contactList" :key="contact.name" :contact="contact"/>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard";
export default {
  name: "ContactList",
  components: {
    ContactCard
  }
}
</script>

<style scoped lang="scss">
div.contact-list{
  height: 70vh;
  overflow: scroll;
}
</style>