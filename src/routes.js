import Auth from "./Pages/auth.vue";
import Home from "./Pages/home.vue";
 import Bookdetais from "./Pages/bookdetais.vue";


const routes = [
    {
        path: "/auth",
         component: Auth
    },
    {
         path: "/home",
          component: Home,

         },
           {
              path: "/book/:id",  // :id est un paramètre dynamique qui représente l'ID du livre
              name: "book-details", 
              component: Bookdetais,
         },
];


export default routes ;
