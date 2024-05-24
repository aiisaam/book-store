<template>
    <navbar/>
    <heade @updateBooks="handleUpdatedBooks"/>
    <navbook :books="currentBooks" v-if="!selectedBook" />
    <bookdetais :book="selectedBook" v-else @selectBook="selectBook"/>
</template>

<script>
import navbar from '../components/home/navbar.vue';
import heade from '../components/home/heade.vue';
import navbook from '../components/home/navbook.vue';
import bookdetais from './bookdetais.vue';
import { books} from './books.js';


export default {
    data() {
        return {
                        books: books,
                        selectedBook: null,
                        currentBooks: [...books]
        }
    }, 
    methods: {
        selectBook(book) {
        this.selectedBook = book;
    },
    handleUpdatedBooks(newBooks) {
        this.currentBooks = newBooks;
    }

      
    },
    components: {
        navbar,
        heade,
        navbook,
        bookdetais,
    }

}

</script>

<style>
* {
    margin-top: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;


}

 body {
    font-family: 'Poppins';
}

.navbar {
    /* position: absolute; */
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    color: #003060;
    background-color: #F5EFE0;

}


.navbar .nav-link ul {
    display: flex;
}

.navbar .nav-link ul li {
    margin: 0 20px;
}

.header {
    background-color: #F5EFE0;
    text-align: center;
    /* margin-bottom: 5px;  */

}


.header p {
    color: #D67476;
    font-size: 20px;
}

.header  h4 {
    font-size: 60px;
    color: #003060;


} 

.header .butt button {
    background-color: #ff5733;  
    color: #ffffff; 
}


.header .butt input, .header .butt button {
    font-size: 20px;
    /* margin-top: 70px; */
}





.header .butt input::placeholder {
    font-size: 14px; /* Ajustez la taille du texte du placeholder */
}

.header .butt input:-ms-input-placeholder {
    font-size: 14px; /* Ajustez la taille du texte du placeholder */
}

.header .butt input::-ms-input-placeholder {
    font-size: 14px; /* Ajustez la taille du texte du placeholder */
}

img{
  width: 200px;
  height: 300px;
  border-style: solid;
  border-color: rgb(95, 94, 110);
  border-width: 2px;
  border-radius: 20px;
  margin-bottom: 15px;
}

.info-container {
    display: flex;
    flex-direction: column; /* pour s'assurer que les éléments sont empilés verticalement */
    flex-wrap: wrap;
    margin-right: 15px;
    justify-content: center; /* Centre les éléments horizontalement */
    align-items: center;     /* Centre les éléments verticalement */
    color: #003060;
    text-align: center;

}

.info-container button {
    height: 25px;
    width: 100px;
}

.single-book-card {
    display: inline-block; /* affiche chaque livre en ligne plutôt qu'en bloc */
    margin: 15px;    /* espace de 10px entre chaque livre */
    vertical-align: top;   /* aligne les livres en haut si leur hauteur varie */
    text-align: center;
    width: 300px;
    height: 470px;
}


.single-book-card .info-container .title {
    font-size: 6px; /* Ajustez selon vos besoins */
}

.single-book-card .author {
    font-size: 5px; /* Ajustez selon vos besoins */
}

.navbar-book  {
    font-size: 28px;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    color: #003060;
}

.navbar-book h3 {
    border: solid;
}

.navbar-book .nav-link-book ul {
    display: flex;
}

.navbar-book .nav-link-book li {
    border: solid;
    margin: 0 20px;
    
}

.detais-book {
    margin: 100px 100px;
    display: flex;           /* permet d'afficher les éléments fils côte à côte */
    align-items: center;
    color: #003060;

}

.alert-book {
     margin-left: 45px;
}

.detais-book button {
    margin-left: 11px;
    border-color: white;
    background-color:rgb(255 122 127 / 80%);
    color: white;
    height: 25px;
    width: 80px;

}
</style>