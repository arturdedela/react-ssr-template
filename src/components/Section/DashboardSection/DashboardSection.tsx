import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'routes';

export interface DashboardSectionProps {}

function DashboardSection({}: DashboardSectionProps) {
    return (
        <div>
            <h1>DashboardSection</h1>
            <Link to={Routes.HOME}>Home</Link>
        </div>
    );
}

export default DashboardSection;
