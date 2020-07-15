import * as React from 'react';

import { cn } from '@bem-react/classname';

import 'components/Section/NotFoundContent/NotFoundContent.scss';

const content = cn('NotFoundContent');

export interface NotFoundContentProps {}

export default function NotFoundContent({}: NotFoundContentProps) {
    return (
        <div className={content()}>
            <h1 className={content('Title')}>Page not found</h1>
        </div>
    );
}
