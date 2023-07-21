import { JwtPayload } from "jsonwebtoken";

interface MyContext {
    user?: string | JwtPayload | null
}

export default MyContext;