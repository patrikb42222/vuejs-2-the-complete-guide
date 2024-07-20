const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    /*saveInput(event) {
      this.currentUserInput = event.target.value;
    },*/
    setText() {
      //this.message = this.currentUserInput;
      console.log(this.$refs.userText.value);
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("Before create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before mount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before update");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
});

app.mount("#app");

app.unmount();

const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");
