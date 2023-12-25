import { app } from "./setup";

app.get("/", () => "Hello Elysia").listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
