const express = require('express');
const app = express();
const router = require('./router');
const errorHandler = require('./middleware/error-middleware');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.use(errorHandler);
// TODO: remove "localhost"
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
