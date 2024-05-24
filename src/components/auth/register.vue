<template>
    <br>
        <div class="justif"><br>
            <form @submit.prevent="handleRegisterEvent">
                <input v-model="username" placeholder="Username" />
                <input v-model="email" placeholder="email" />
                <input v-model="password" type="password" placeholder="Password" /><br>
                <button type="submit">Register</button>
            </form>
        </div>
</template>

<script>

export default {
    data() {
        return {
            username: '',
            email: '',
            password:''
        }
    },
   emits: ['register'],
methods: {
    handleRegisterEvent() {
        if (this.username && this.email && this.password) {
        this.$emit('register', { userName: this.username, email: this.email, password: this.password });
    } else {
        alert("remplissez tous les champs");
    }
    }
  }
 }
</script>

<style>

.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

input {
    margin-bottom: 10px;
    width: 200px; 
}
</style>