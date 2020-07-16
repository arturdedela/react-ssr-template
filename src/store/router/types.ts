import { match } from 'react-router';
import { PageName } from 'pages';

export interface RouterParams {
    id: string;
}

export interface RouterEvent extends match<RouterParams> {
    pageName: PageName;
}

export type RouterState = RouterEvent | undefined | null;
