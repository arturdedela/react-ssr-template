import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App as BaseApp } from 'components/App/App';

function App() {
    return (
        <BrowserRouter>
            {/*Suspense triggers Warning: Did not expect server HTML to contain a <div> in <div>.*/}
            <React.Suspense fallback={<h1>Loading</h1>}>
                <BaseApp />
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
