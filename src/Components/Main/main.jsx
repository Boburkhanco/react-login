import "./main.css"
function MainM(){

    return(
        <>
            <div className="main">
                <div className="fixed__account">
                    <div className="fixed__account-avatar"></div>
                    <div className="fixed__account-content">
                        <h4 className="fixed__account-title">Abdukarim Mirzayev</h4>
                        <p className="fixed__account-text">last seen recently</p>
                    </div>
                </div>
                <div className="pad"></div>
                <div className="chatscreen"></div>
                <div className="type__bar">
                    <div className="type__bar-file"></div>
                    <input type="text" className="type__bar-input" placeholder="Write a message..." />
                    <div className="type__bar-sticker"></div>
                </div>
            </div>
        </>
    )
}

export default MainM;