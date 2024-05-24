const BASE_URL = 'http://localhost:3001';


export const signup = async (userName, email, password) => {
    try {
        const res = await fetch(`${BASE_URL}/user/signup`, {
            method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName,
            email,
            password,
        })
    });
    if (!res) {
        throw new err('Erreur Hors de l`inscription')
    }
    return res.json();
} catch (err) {
    console.log(err.message);
       throw err;
}
};

export const  login = async (email, password) => {
    try {
        const res = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        });
        if (!res) {
            alert ('your password & email incorrect');
            throw err;
        }
        return res.json();
    } catch (err) {
        console.err(err.message);
    }
   };




