import React from "react"
import usb from "../../content/assets/usb.svg"
const Header = () => {
    return (
        <nav class = "nav">
            <div>
                <div style = { { display: "flex"} }>
                    <img src = {usb} style  = { {height: "24px", width: "24px", marginRight: "20px"} }/>
                    <p>Brooks Poltl</p>
                </div>
                <p>About me</p>
                <p>Articles</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}

export default Header
