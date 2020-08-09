import * as React from 'react';
import { App as BaseApp } from 'components/App/App';
import { StaticRouter } from 'react-router';

export interface AppProps {
    url: string;
}

export const App: React.FC<AppProps> = function App({ url }: AppProps) {
    return (
        <StaticRouter location={url}>
            <BaseApp />
        </StaticRouter>
    );
};
