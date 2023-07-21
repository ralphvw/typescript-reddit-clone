interface User {
    id: string,
    username?: string,
    password?: string,
    createdAt?: Date,
    updatedAt?: Date
}

interface SignUpArgs {
    username: string,
    password: string
}