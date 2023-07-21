export default {
    addUser: `
    INSERT INTO users(
        id,
        username,
        password
    ) VALUES ($1, $2, $3)
    `,

    getUserByUsername: `
    SELECT username 
    FROM users
    WHERE id=$1
    `
}