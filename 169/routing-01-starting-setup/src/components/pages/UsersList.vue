<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    }
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something

      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter')
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (!this.changesSaved) {
      const userWantsToLeave = confirm('Discard unsaved changes?')
      next(userWantsToLeave)
    }
    else {
      next()
    }
  },
  unmounted() {
    console.log('Unmounted')
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
