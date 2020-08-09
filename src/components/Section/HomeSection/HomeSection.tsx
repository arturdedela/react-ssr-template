import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'routes';

export interface HomeSectionProps {}

function HomeSection({}: HomeSectionProps) {
    return (
        <div>
            <h1>HomeSection</h1>
            <Link to={Routes.DASHBOARD}>Dashboard</Link>
        </div>
    );
}

export default HomeSection;
