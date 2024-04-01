import React from "react"

function Footer() {
    return (
        <div id="footer">
            <div className="flex-center">
                <div><i className="fa-solid fa-circle-location-arrow"></i></div>
                <div><i className="fab fa-whatsapp"></i></div>
                <div><i className="fab fa-facebook"></i></div>
                <div><i className="fab fa-instagram"></i></div>
            </div>
            <div>© 2023 Ziri Center I.T مركز زيري للغات</div>
        </div>
    )
}

export default React.memo(Footer)