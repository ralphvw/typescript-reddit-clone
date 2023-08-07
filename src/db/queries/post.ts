export default {
    getAllPosts: `SELECT p.id, p.text, p.created_at as "createdAt",
    json_build_object(
        'id', u.id,
        'username', u.username
    ) as user
    FROM posts p
    INNER JOIN users u ON u.id = p.user_id
    ORDER BY p.created_at DESC
    `,

    createPost: `
    INSERT INTO posts (
        id,
        text,
        user_id
    ) VALUES ($1, $2, $3)
    `,

    countPosts: `
    SELECT COUNT(id)
    FROM posts
    `
}