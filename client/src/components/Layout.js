import React from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Meta />
            <Navbar />
            <main>
                {/*all Page components goes here*/}
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;