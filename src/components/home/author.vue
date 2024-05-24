<template>
    <div v-if="authorBooks.length" class="pool">
    <nav class="aut-book">
    <h1>Books by {{ authorName }}</h1>
    </nav>
    <div v-for="book in authorBooks" :key="book._id" class="authors-books">
        <img :src="book.img" :alt="book.title"/>
        <div class="small-deta">
            <h3> {{ book.title }}</h3>
            <h4>prix: {{ book.prix}} $</h4>
            <button>Book Detail</button>
        </div>
    </div>
</div>
<p v-else class="para">Cet Author n'a pas d'autres livres pour l'instant .</p>

</template>
 
<script>
import { getAllBooksAuthors } from '../../apis/home.js';

export default {
    props: [ 'authorId', 'authorName', 'currentBookId', 'books' ],
    data() {
        return {
            authorBooks: []
        }
    },
    methods: {
        fetchBooksByAuthor() {
            getAllBooksAuthors(this.authorId)
                .then(res => {
                    this.authorBooks = res.filter(book => book._id !== this.currentBookId);
                }).catch(err => {
                    console.error('this erreur about getAllBooksAuthors', err);
                })
        }
    },
    mounted() {
        this.fetchBooksByAuthor();
    }
}

</script>

<style>


img{
  width: 200px;
  height: 300px;
  border-style: solid;
  border-color: rgb(95, 94, 110);
  border-width: 2px;
  border-radius: 20px;
  margin-bottom: 15px;
}

 .para {
    font-size: 25px;
    color: #003060;
    margin-left: 90px;
}


.aut-book{
    color: #003060;
    margin-left: 40px;
    font-size: 25px;
}

.authors-books {
    display: inline-block; /* affiche chaque livre en ligne plutôt qu'en bloc */
    margin: 15px;    /* espace de 10px entre chaque livre */
    vertical-align: top;   /* aligne les livres en haut si leur hauteur varie */
    text-align: center;
    width: 300px;
    height: 470px;
    color: #003060;
}


</style>