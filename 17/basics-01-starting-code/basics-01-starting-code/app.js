const app = Vue.createApp({
  data: () => {
    return {
      courseGoalA: "<h2>Hello</h2>",
      courseGoalB: "b",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    getCourseGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalB;
      else return this.courseGoalA;
    },
  },
});

app.mount("#user-goal");
