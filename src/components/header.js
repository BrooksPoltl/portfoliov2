import React from "react"
import usb from "../../content/assets/usb.svg"
const Header = () => {
    return (
        <nav class = "nav">
            <div>
                <div style = { { display: "flex"} }>
                    <img src = {usb} alt = "usb" style  = { {height: "24px", width: "24px", marginRight: "20px"} }/>
                    <p>Brooks Poltl</p>
                </div>
                <a>About me</a>
                <a>Articles</a>
                <a>Contact</a>
            </div>
        </nav>
    )
}

export default Header
