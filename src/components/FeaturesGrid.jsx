function FeaturesGrid() {
    return (
        <div className="FeaturesGrid">
            <div className="FeaturesGridOne">
                Make your money transfer simple and clear
                <div className="FgridFlex">
                    <div className="FCC">
                        <img src="images/5_Features/check.png" alt="Alt" />
                        Banking transactions are free for you
                    </div>
                    <div className="FCC">
                        <img src="images/5_Features/check.png" alt="Alt" />
                        No monthly cash commission
                    </div>
                    <div className="FCC">
                        <img src="images/5_Features/check.png" alt="Alt" />
                        Manage payments and transactions online
                    </div>
                </div>
                <button className="btn" id="learnMore">
                    Learn more
                    <img src="images/5_Features/arrow.png" alt="Alt" />
                </button>
            </div>
            <div>
                <img src="images/5_Features/statsPic.png" alt="Alt" />
            </div>
            <div>
                <img src="images/5_Features/textsCard.png" alt="Alt" />
            </div>
            <div className="FeaturesGridTwo">
                Receive payment from international bank details
                <div className="FgridCards">
                    <div className="FgridCard">
                        <div>
                            <img src="images/3_Features/card.png" alt="Alt" />
                        </div>
                        Manage your payments online. Mollis congue egestas egestas fermentum fames.
                    </div>
                    <div className="FgridCard">
                        <div>
                            <img src="images/3_Features/wallet.png" alt="Alt" />
                        </div>
                        A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
                    </div>
                </div>
                <button className="btn" id="learnMore">
                    Learn more
                    <img src="images/5_Features/arrow.png" alt="Alt" />
                </button>
            </div>
        </div>
    )
}
export default FeaturesGrid