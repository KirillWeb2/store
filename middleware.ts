import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)","/api/products/get-all", "/api/products/get-one"]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};