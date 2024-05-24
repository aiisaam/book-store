<template>
    <header>
        <div class="header">
            <p>Your favorit book section</p>
            <h4>Color Your Day With the <br> Ofr BookStore</h4>
            <nav class="butt">
            <div class="bordered-inputs">  
        <input v-model="searchTitle" type="text" placeholder="Book's name" />
        <input v-model="searchAuthorName" type="text" placeholder="Author's name" />
        <button @click="searchForBooks" type="submit">Search</button>
    </div>
        </nav>
        </div>
    </header>
</template>

<script>
import { searchBooks } from '../../apis/home.js';
export default {
        data() {
                 return {
                    // props: {}
                    searchTitle:'',
                    searchAuthorName:'',
                 }
        },
        methods: {
            async searchForBooks() {
                try {
                    const response = await searchBooks({
                        title: this.searchTitle,
                        authorName: this.searchAuthorName
                    });
                    const books = response;
                    if (books.length === 0) {
                        alert("Pas de livre trouvé .");
                    } else {
                        this.$emit('updateBooks', books);
                        // this.books = this.searchTitle ;
                        console.log('Livres trouver', books);
                    }
                } catch (err) {
                    console.error('Erreur Hors de la recherche de livres:', err);
                }
            }
        }
}

</script>



<!-- report_status = "Project Manager" -->