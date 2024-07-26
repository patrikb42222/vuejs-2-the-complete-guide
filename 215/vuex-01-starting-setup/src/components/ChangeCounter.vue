<template>
    <button @click="increment">Increment by 1</button>
    <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    methods: {
        //addOne() {
        //    this.$store.commit('increment')
        //}
        ...mapActions('numbers',['increment', 'increase'])
    }
}
</script>