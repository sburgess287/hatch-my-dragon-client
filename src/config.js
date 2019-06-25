// export const API_BASE_URL =
//     process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
console.log(process.env);
console.log('got it!')
// note;  added /api to .env,and now it's using localhost again

module.exports = {
    
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
        "http://localhost:9001/api"
};
