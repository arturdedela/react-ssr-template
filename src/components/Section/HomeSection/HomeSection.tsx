import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

const cnHome = cn('Home');

export interface HomeSectionProps {}

function HomeSection({}: HomeSectionProps) {
    return (
        <div className={cnHome()}>
            <h1>HomeSection</h1>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
}

export default HomeSection;
