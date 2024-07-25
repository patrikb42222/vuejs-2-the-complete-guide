<template>
    <router-view v-slot="slotProps">
      <transition name="fade-button" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,

      paraOpacity: 0,
      enterInterval: null,
      leaveInterval: null
     };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    beforeEnter(el) {
      console.log("before enter")
      console.log(el)
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter")
      this.enterInterval = setInterval(() => {
        if (this.paraOpacity < 1) {
          this.paraOpacity+=0.01;
          el.style.opacity = this.paraOpacity;
        }
        else {
          clearInterval(this.enterInterval);
          done()
        }
      })
    },
    leave(el, done) {
      console.log("leave")
      this.leaveInterval = setInterval(() => {
        el.style.opacity = this.paraOpacity;
        if (this.paraOpacity > 0) {
          this.paraOpacity-=0.01;
          el.style.opacity = this.paraOpacity;
        }
        else {
          clearInterval(this.leaveInterval);
          done()
        }
      })
    },
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-in-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-leave-active {
  transition:  opacity 0.3s ease-out;
}
.fade-button-enter-active {
  transition:  opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    fransform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

.route-enter-from {}
.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}
.route-enter-to {}

.route-leave-active {
  animation: slide-scale 0.4 ease-out;
}
</style>