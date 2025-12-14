import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-[#eee] flex justify-center items-start lg:items-center">
            <div className="w-full max-w-[430px] min-h-screen bg-background shadow-float relative overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Layout;
