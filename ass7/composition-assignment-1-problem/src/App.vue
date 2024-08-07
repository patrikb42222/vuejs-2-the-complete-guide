<template>
  <h2 ref="goalHeading">My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="showGoal">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleShowGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>


<script>
/*
import { reactive } from 'vue'

export default {
  setup() {
    Seperate refs 
    const courseGoal = ref('Master Vue')
    const showGoal = ref(false)

    function toggleShowGoal() {
      showGoal.value = !showGoal.value
    }

    return { courseGoal, toggleShowGoal, showGoal }


    Ref Object 
    
    const goalData = ref({
      showGoal: false,
      courseGoal: 'Master Vue',
      toggleShowGoal() {
        this.showGoal = !this.showGoal
      }
    })

    return { goalData }

    
    Reactive Object  
    const goalData = reactive({
      showGoal: false,
      courseGoal: 'Master Vue',
    })

    function toggleShowGoal() {
        goalData.showGoal = !goalData.showGoal
    }

    return { goalData, toggleShowGoal }
  }
}*/

export default {
  data() {
    return {
      courseGoal: 'Master Vue',
      showGoal: false
    }
  },
  methods: {
    toggleShowGoal() {
      this.showGoal = !this.showGoal
    }
  }
}
</script>



<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>