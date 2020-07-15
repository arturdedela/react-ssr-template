import express from 'express';

import { join } from 'path';

import { clientAssets } from 'server/middleware/clientAssets';
import { prepareState } from 'server/middleware/prepareState';
import { renderPage } from 'server/middleware/renderPage';
import { errorHandler } from 'server/middleware/errorHandler';

const app = express();

app.use(express.static(join(__dirname, 'client')));

// Normal page rendering process
app.use(prepareState());
app.use(clientAssets());
app.use(renderPage());

// Handle all errors
app.use(errorHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
});
