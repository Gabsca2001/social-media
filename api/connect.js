import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rhcYQLD9@2001',
    database: 'socialmedia'
})
