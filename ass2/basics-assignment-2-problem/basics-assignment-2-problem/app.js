const app = Vue.createApp({
  data() {
    return {
      input: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("wee woo");
    },
    keydown(event) {
      this.input = event.target.value;
    },
    enter(event) {
      this.confirmedInput = event.target.value;
    },
  },
});

app.mount("#assignment");
