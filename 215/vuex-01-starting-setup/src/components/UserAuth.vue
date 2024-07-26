<template>
    <button @click="login" v-if="!loggedIn">Login</button>
    <button @click="logout" v-else>Logout</button>
    <p>{{ testAuth }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['loggedIn', 'testAuth'])
    },
    methods: {
        ...mapActions(['login', 'logout'])
    }
}
</script>