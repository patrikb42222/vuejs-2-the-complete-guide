const app = Vue.createApp({
  data: () => {
    return {
      result: 0,
    };
  },
  computed: {
    getResult() {
      if (this.result < 37) {
        return "Not there yet";
      }
      if (this.result == 37) {
        return this.result;
      }
      if (this.result > 37) {
        return "Too much!";
      }
    },
  },
  watch: {
    getResult(value) {
      const that = this;
      setTimeout(() => {
        that.result = 0;
      }, 5000);
    },
  },
  methods: {
    add(value) {
      this.result += value;
    },
  },
});

app.mount("#assignment");
