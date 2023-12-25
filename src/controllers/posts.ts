import { Elysia } from "elysia";

export const posts = new Elysia();

posts.group("/posts", (posts) => (
    posts.get("/", (ctx) => {
        ctx.set.status = 200
        return ctx.headers
    })
        .get("/:id", () => "Hello Elysia posts")
        .post("/", () => "Hello Elysia posts")
        .put("/:id", () => "Hello Elysia posts")
        .delete("/:id", () => "Hello Elysia posts")
))