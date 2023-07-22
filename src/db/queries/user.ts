export default {
    addUser: `
    INSERT INTO users(
        id,
        username,
        password
    ) VALUES ($1, $2, $3)
    `,

    getUserByUsername: `
    SELECT id, username, password 
    FROM users
    WHERE username=$1
    `,
}