import * as React from 'react';
import 'components/Section/NotFoundContent/NotFoundContent.scss';

export interface NotFoundContentProps {}

export default function NotFoundContent({}: NotFoundContentProps) {
    return (
        <div>
            <h1>Page not found</h1>
        </div>
    );
}
