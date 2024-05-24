<template>
            <nav class="navbar-book">
            <h3 @click="showAllBooks">All our books</h3>
            <div class="nav-link-book">
              <ul>
                  <li v-for="category in categorys" :key="category._id" @click="filterByCategory(category._id)">
                    {{ category.name }}
                    <!-- <li @click="filterByCategory('Programation')">Programation</li>
                    <li @click="filterByCategory('Santé')">Santé</li>
                    <li @click="filterByCategory('History')">History</li>
                    <li @click="filterByCategory('Art & Photography')">Art & Photography</li>
                    <li @click="filterByCategory('Pshycology')">Pshycology</li> -->
                    </li>
                </ul>
            </div>
        </nav>
  <div v-for="book in filteredBooks" :key="book._id" class="single-book-card">
    <img :src="book.img" :alt="book.title">
    <div class="info-container">
      <h2> {{ book.title }}</h2>
      <p>{{ book.authors.name }}</p>
      <h4>Price: {{ book.prix }} $</h4>
      <button @click="goToBookDetails(book._id)">Book Detail</button>
    </div>
  </div>

</template> 

<script>
// import { books } from '../../pages/books.js';
import { getAllCategorys , getAllBooks , getAllBookCategorys } from '../../apis/home.js';

export default {
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      categorys: [],
      filteredBooks: [],
      localBooks: [...books],
    }
  }, 
  watch: {        
    books: {
      immediate: true,
      handler(newBooks) {
        this.filteredBooks = newBooks;
      }
    }
  },
  beforeMount() {
    this.filteredBooks = [...this.books];
  },
  methods: {
    goToBookDetails(bookId) {
      this.$router.push({ name: 'book-details', params: { id: bookId } });
    },
    filterByCategory(id) {
      // this.filteredBooks = this.localBooks.filter(book => book.category === category);
      getAllBookCategorys(id)
      .then(res => {
        console.log(res);
        this.filteredBooks = res;
      }).catch(err => {
        console.log("erreur hors des books");
      });
    },
    showAllBooks() {
      this.filteredBooks = this.localBooks;
    },
    getAllCategorys() {
      getAllCategorys()
      .then(res => {
        this.categorys = res;
      }).catch(err => {
        console.log("Erreur hors de la recupération des categorys");
      });
    },
    getAllBooks() {
      getAllBooks()
      .then(res => {
        console.log(res);
        this.filteredBooks = res;
        this.localBooks = res;
      }).catch(err => {
        console.log("erreur hors des books");
      });
    },
  },
  mounted() {
    this.getAllCategorys();
    this.getAllBooks();
  }
}
  // emits:['navbook'],

</script>