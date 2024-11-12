import App from '/src/App.jsx'

function Header() {


    return (
        <div className="Area" id="Head">
            <div className="Header Region">
                <div className="HeaderIphones">
                    <img src="images/1_Header/iPhones.svg" alt="Alternate Text" />
                </div>
                <div className="HeaderTitle">
                    <div>
                        <div className={App.darkMode ? "HeaderManage dark" : "HeaderManage"} id="HeaderTitle">
                            Manage All Your Money in One App
                        </div>
                        <div className="HeaderWeOffer">
                            We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.
                        </div>
                    </div>
                    <div className="AppstoreGoogle FCC">
                        <img src="images/1_Header/appstore.png" alt="Alternate Text" />
                        <img src="images/1_Header/googleplay.png" alt="Alternate Text" />
                    </div>
                </div>
                <div className="DiscMore FCC">
                    <img src="images/1_Header/more.png" alt="Alternate Text" />
                </div>
                <div className="HeaderBG">
                    <img src="images/1_Header/BackgroundHeader.png" alt="Alternate Text" />
                </div>
            </div>
        </div>
    )
}
export default Header