<template>
  <form @submit.prevent="onSubmitForm">
    <div>
      <label>Name</label>
      <input v-model="name" type="text" />
    </div>
    <div>
      <label>Age</label>
      <input v-model="age" type="text" />
    </div>
    <div>
      <button @click="submit">submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  emits: ["submit"],
  methods: {
    onSubmitForm() {
      this.$emit("submit", this.name, this.age);
    },
  },
};
</script>
