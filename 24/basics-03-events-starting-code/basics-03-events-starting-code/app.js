const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
      counter: 0,
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("Submitted!");
    },
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
