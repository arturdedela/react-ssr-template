import React from 'react';
import { resolve } from 'path';
import { ChunkExtractor } from '@loadable/server';
import { Request, Response } from 'express';
import { App } from 'components/App/App@server';
import { renderToString } from 'react-dom/server';

const statsFile = resolve(__dirname, 'client/loadable-stats.json');

export function ssr(req: Request, res: Response) {
    const extractor = new ChunkExtractor({ statsFile });
    const jsx = extractor.collectChunks(<App url={req.url} />);

    const content = renderToString(jsx);

    const scriptTags = extractor.getScriptTags();
    const linkTags = extractor.getLinkTags();
    const styleTags = extractor.getStyleTags();

    res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>React SSR Template</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${linkTags}
            ${styleTags}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </head>
        <body>
            <div id="root">${content}</div>
            ${scriptTags}
        </body>
    </html>
    `);
}
