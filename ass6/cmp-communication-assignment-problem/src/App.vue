<template>
  <active-user :name="name" :age="age"></active-user>
  <user-data @submit="onSubmit"></user-data>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
    };
  },
  methods: {
    onSubmit(name, age) {
      console.log(name, age);
      this.name = name;
      this.age = Number(age);
    },
  },
};
</script>
