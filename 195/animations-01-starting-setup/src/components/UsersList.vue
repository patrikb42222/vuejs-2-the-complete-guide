<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users"  :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>
    <div>
        <input type="text" ref="userNameInput"/>
        <button @click="addUser">Add user</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
        }
    },
    methods: {
        addUser() {
            const enteredUserName = this.$refs.userNameInput.value;
            console.log(enteredUserName);
            this.users.push(enteredUserName);
        },
        removeUser(user) {
            this.users.push(user);
            this.users = this.users.filter((userName) => {
                return userName !== user;
            })
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active {
    transition: all 1s ease-out;
}
.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-active {
    transition: all 1s ease-out;
    position: absolute;
}
.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-move {
    transition: transform 1s ease;
}
</style>