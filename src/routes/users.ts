import { app } from '../setup'
import { drizzle } from 'drizzle-orm/node-postgres';
import postgres from 'postgres';
import * as schema from '../db/drizzle/schema';

app.group('/posts', (app) =>
    app.get('/', async () => {
        const queryClient = postgres(process.env.DATABASE_URL || "");
        const db = drizzle(queryClient,{schema});
        const data = await db.query.posts.findMany();
        return data;
    })
        .post('/', () => 'post Elysia')
        .put('/', () => 'put Elysia')
        .delete('/', () => 'delete Elysia')
    
);