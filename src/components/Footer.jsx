import React from "react";

function Footer(){
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright © {year} Created by <a href="https://github.com/brunsoares">@BrunSoares</a></p>
        </footer>
    );
}

export default Footer;