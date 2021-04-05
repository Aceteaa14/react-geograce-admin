import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Meta from "../Meta/meta";



export default function Layout({children}) {
    return(
        <> 
            <Meta />
            <Header />
            
            {children}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            
         
            
        </>
    )
}