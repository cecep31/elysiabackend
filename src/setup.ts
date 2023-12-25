import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

export const app = new Elysia();
app.use(swagger())
    .onError(({ code }) => {
        if (code === 'NOT_FOUND') return 'Route not found :('
    })