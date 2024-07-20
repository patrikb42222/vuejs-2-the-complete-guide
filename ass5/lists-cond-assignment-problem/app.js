const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      showTasks: true,
      inputTask: "",
    };
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
