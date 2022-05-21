// Nesse arquivo será tratado a autenticação dos usuário
// e para isso será criado criado 4 funções: 

export const TOKEN_KEY = "@airbnb-token"

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
