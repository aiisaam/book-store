<template>
    <div class="card">
        <div class="clair">
            <button @click="showForm('Login')">Login</button>
            <button @click="showForm('register')">Register</button>
        </div>
        <Login @login="handleLoginEvent($event)" v-if="courentForm === 'Login'" />
        <Register @register="handleRegisterEvent($event)" v-if="courentForm === 'register'" />
    </div>
</template>

<script>
import { signup } from '../apis/auth';
import Login from '../components/auth/login.vue';
import Register from '../components/auth/register.vue';
import { login } from '../apis/auth';


export default {
    data() {
        return {
            name: '',
            courentForm: 'Login',
        }
    },
    methods: {
        handleLoginEvent(data) {
            login(data.email, data.password)
                .then(res => {
                    if (res && res.token) {
                        localStorage.setItem('token', res.token);
                        this.$router.push('/home');
                        console.log("GOOD :", res);
                    } else {
                        alert("erreur: Your password Or email Incorrect");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        handleRegisterEvent(data) {
            signup(data.userName, data.email, data.password)
                .then(res => {
                    if (res && res.token) {
                        localStorage.setItem('token', res.token);
                        this.$router.push('/home');
                        console.log("Good : ", res);
                    } else {
                        console.log("erreur:", res.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },
        showForm(formType) {
            this.courentForm = formType;
        },
    },
    components: {
        Login,
        Register,
    }
}

</script>

<style>
/* html {
  background-image: url('https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg');
} */

.clair {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;

}

.clair button {
    margin-left: 10px;
    margin-top: 20px;
    height: 35px;
    width: 80px;
}



.card {
    height: 220px;
    width: 250px;
    background-color: white;
    margin-left: 39%;
    margin-top: 9%;
    border-radius: 2px;
}
/* 
.card .clair {
    margin-top: 20px;
} */
</style>