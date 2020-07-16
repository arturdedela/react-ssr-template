import { createElement } from 'react';
import { hydrate } from 'react-dom';
import { AppState } from 'store';
import { App } from 'components/App/App@client';
import { PAGES } from 'pages';
import { LazyComponentType } from 'components/Lazy/Lazy';
import { getPageName } from 'selectors/getRoute/getPageName';

declare global {
    interface Window {
        __PRELOADED_STATE__: AppState;
    }
}

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

document.addEventListener('DOMContentLoaded', async () => {
    // Load module
    const pageName = getPageName(state);

    if (pageName && PAGES[pageName]) {
        await (PAGES[pageName].component as LazyComponentType).loader();
    }

    hydrate(createElement(App, { state }), document.getElementById('root'));
});
