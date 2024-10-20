import app from "./app.js"
import { connectDatabase } from "./db.js"

connectDatabase();

app.listen(3000);
console.log('Server on port ', 3000)