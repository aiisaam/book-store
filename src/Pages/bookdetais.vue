<template>
    <div class="detais-book" v-if="!loading">
        <img :src="book.img" :alt="book.title" />
        <div class="alert-book">
              <h2>{{ book.title }}</h2>
                 <p >{{ book.authors.name }}</p>
                 <h4>Price: {{ book.prix }} $</h4>
                 <p>{{ book.description }}</p> 
                             <button>Add to List</button>
                             <button>Buy Now</button>
             </div>
    </div>

 <Author v-if="book && book.authors" :authorId="book.authors._id" :authorName="book.authors.name"
        :currentBookId="book._id" :books="otherBooksByAuthor"/>
</template>

<script>
import { books } from './books.js';
import { getOneBook, getAllBooksAuthors } from '../apis/home.js';
import Author from '../components/home/author.vue';


export default {
    data() {
        return {
            loading: true,
            book: {},
            otherBooksByAuthor: []

        }
    },
    methods: {
        getOneBook(id) {
            getOneBook(id)
            .then(res => {
                console.log(res);
                this.book = res;
                this.loading = false;
                if(this.book && this.book.authors) {
                    getAllBooksAuthors(this.book.authors._id)
                    .then(books => {
                        this.otherBooksByAuthor = books.filter(b => b._id !== this.book._id)
                    })
                }
            }).catch(erreur => {
                console.error(erreur.message);
            })
        }
    },
    mounted() {
        const bookId = this.$route.params.id;
        this.getOneBook(bookId);
        //this.Book = books.find(b => b._id === bookId);
    },
    components: {
        Author
    }
}
</script>