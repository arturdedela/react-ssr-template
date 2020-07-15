import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

const cnDashboard = cn('Dashboard');

export interface DashboardSectionProps {}

function DashboardSection({}: DashboardSectionProps) {
    return (
        <div className={cnDashboard()}>
            <h1>DashboardSection</h1>
            <Link to="/">Home</Link>
        </div>
    );
}

export default DashboardSection;
