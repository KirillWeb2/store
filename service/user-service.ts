import { request } from "@/lib/axios"


export const userService = {
    createUser: async (username: string, password: string) => {
        return request.post("/users/add", {})
    }
}