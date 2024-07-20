const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      showTasks: true,
      inputTask: "",
    };
  },
  computed: {
    toggleButtonCaption() {
      if (this.showTasks) return "Hide";
      else return "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    toggleShowTasks() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount("#assignment");
