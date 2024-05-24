const BASE_URL = 'http://localhost:3001';



export const getAllCategorys = async () => {
    try {
        const res = await fetch(`${BASE_URL}/category`, {
            method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        });
        if(!res) {
        throw new err('Erreur Hors de Category');
        }
        return res.json();
    } catch (error) { 
        console.error(error.message);
        throw error;
    }
}


export const getAllBooks = async () => {
    try {
        const res = await fetch(`${BASE_URL}/books`, {
            method: 'GET',
        headers: { 'Content-type': 'application/json' },
        });
        if(!res){
            throw new err('erreur hors de books');
        }
        return res.json();
    } catch (error) {
        console.error(err.message);
        throw error ;
        
    }
}


export const getAllBookCategorys = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/books/category/${id}`, {
            method: 'GET',
        headers: { 'Content-type': 'application/json' },
        });
        if(!res) {
            throw new error('erreur hors de getAllBookCategorys');
        }
        return res.json();
    } catch (error) {
        console.error(err.message);
        throw error;
    }
}

export const getOneBook = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/books/${id}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
        });
        if(!res) {
            throw new error('erreur hors de getOneBook');
        }
        return res.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export const getAllBooksAuthors = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/books/authors/${id}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json'},
        });
        if(!res) {
            throw new error('erreur hors de getAllBooksAuthors');
        }
        return res.json();
        
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export const searchBooks = async (params) => {
    const url = new URL(`${BASE_URL}/books/searche`);
    Object.keys(params).forEach(key => params[key] && url.searchParams.append(key, params[key]));
   
    try {
        const res = await fetch(url, {
            method:'Get',
            headers: { 'Content-type': 'application/json'},
        });
        if(!res) {
            throw new error('erreur hors de searche');
        }
        return res.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}


// const getAllAuthors = async() => {
//     try {
//         const res = await fetch(`${BASE_URL}/author`, {
//             method: 'Get',
//             headers: { 'Content-type': 'application/json'},
//         });
//         if(!res) {
//             throw new erreur('Erreur hors de getAllAuthors');
//         }
//         return res.json();
//     } catch (error) {
//         console.error(error.message);
//         throw erreur;
//     }
// }