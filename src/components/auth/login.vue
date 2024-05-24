<template>
    <br>
        <div class="justif"><br>
            <form @submit.prevent="handleLoginEvent">
                <input v-model="email" placeholder="email" />
                <input v-model="password" type="password" placeholder="Password" />
                <button type="submit">Login</button>
             </form>
        </div>
</template>

<script>


export default {
    data() {
        return {
            email: '',
            password:''
        };
    },
    emits:['login'],
    methods: {
             handleLoginEvent() {
                 if (this.email && this.password) {
                     this.$emit('login', { email: this.email, password: this.password });
        } else {
            alert("remplissez tous les champs");
        }
             }
        }
    }
</script>
