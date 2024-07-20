const app = Vue.createApp({
  data() {
    return {
      clss: "",
      vis: "visible",
      bgColor: "",
    };
  },
  methods: {
    updateClass(event) {
      this.clss = event.target.value;
    },
    toggleVisibility() {
      if (this.vis === "visible") this.vis = "hidden";
      else this.vis = "visible";
    },
    updateInlineStyle(event) {
      this.bgColor = event.target.value;
    },
  },
});

app.mount("#assignment");
