import React from 'react';
import Sidebar from './Sidebar';

function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-100">{children}</main>
        </div>
    );
}

export default DashboardLayout;