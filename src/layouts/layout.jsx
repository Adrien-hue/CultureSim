import React from 'react';
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components/molecules";

const Layout = () => {
    return <React.Fragment>
        <Header />

        <main className="App mv-3 ph-3">
            <Outlet />
        </main>

        <Footer />
    </React.Fragment>
}

export default Layout