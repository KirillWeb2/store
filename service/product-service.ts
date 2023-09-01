import { request } from "@/lib/axios";

export const productService = {
  getAll: async () => {
    return request.get("/products/getAll").then((res) => res.data);
  },

};
