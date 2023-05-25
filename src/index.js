import app from "./app.js"
import { PORT } from "./config.js"

const port = PORT || 3000
app.listen(port, () => console.log('Listen on port: ' + port));