import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)", "/api/products/getAll"]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};