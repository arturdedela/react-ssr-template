import express from 'express';
import { join } from 'path';

import { errorHandler } from 'server/middleware/errorHandler';
import { ssr } from 'server/middleware/ssr';

const app = express();

app.use(express.static(join(__dirname, 'client')));

app.use(ssr);

// Handle all errors
app.use(errorHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
});
