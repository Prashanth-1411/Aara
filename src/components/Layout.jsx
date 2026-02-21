import React from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import WaveBackground from './WaveBackground';

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100 position-relative overflow-hidden">
            <WaveBackground />
            <AppNavbar />
            <main className="flex-grow-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
