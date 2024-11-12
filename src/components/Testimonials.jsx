import { useState, useEffect, createElement } from 'react'

const ratings = new Array("images/6_Testimonials/rating1.png", "images/6_Testimonials/rating2.png");

function Testimonials() {

    const [testies, setTesties] = useState();

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await res.json();
        setTesties(data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="Area Testimonials">
            <div className="TestRegion">
                <div className="ClientsAre">
                    Clients are Loving Our App
                </div>
                <div className="tests">
                    <div className="test">
                        <div className="Quotes">
                            <img src="images/6_Testimonials/quotes.png" alt="Alt" />
                        </div>
                        <div className="testBox">
                            <div>
                                {createElement(() => {
                                    if (typeof testies !== "undefined") {
                                        return <img src={ratings[(testies[0].starRating - 4)]} alt="Alt" />
                                    }
                                    else {
                                        return "text";
                                    }
                                })
                                }
                            </div>
                            <div className="Paragraph">
                                {createElement(() => {
                                    if (typeof testies !== "undefined") {
                                        return testies[0].comment;
                                    }
                                    else {
                                        return "text";
                                    }
                                })
                                }
                            </div>
                            <div className="Profile">
                                {createElement(() => {
                                    if (typeof testies !== "undefined") {
                                        return <img src={testies[0].avatarUrl} alt="Alt" />
                                    }
                                    else {
                                        return <img src="fail" alt="Alt" />
                                    }
                                })
                                }
                                <div className="User">
                                    <div>
                                        {createElement(() => {
                                            if (typeof testies !== "undefined") {
                                                return testies[0].author;
                                            }
                                            else {
                                                return "author";
                                            }
                                        })
                                        }
                                    </div>
                                    <div className="UserSub">
                                        {createElement(() => {
                                            if (typeof testies !== "undefined") {
                                                return testies[0].jobRole;
                                            }
                                            else {
                                                return "jobRole";
                                            }
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="test">
                        <div className="Quotes Q2">
                            <img src="images/6_Testimonials/quotes.png" alt="Alt" />
                        </div>
                        <div className="testBox">
                            <div>
                                {createElement(() => {
                                    if (typeof testies !== "undefined") {
                                        return <img src={ratings[(testies[1].starRating - 4)]} alt="Alt" />
                                    }
                                    else {
                                        return "text";
                                    }
                                })
                                }
                            </div>
                            <div className="Paragraph">
                                {createElement(() => {
                                    if (typeof testies !== "undefined") {
                                        return testies[1].comment;
                                    }
                                    else {
                                        return "text";
                                    }
                                })
                                }
                            </div>
                            <div className="Profile">
                                {createElement(() => {
                                    if (typeof testies !== "undefined") {
                                        return <img src={testies[1].avatarUrl} alt="Alt" />
                                    }
                                    else {
                                        return <img src="fail" alt="Alt" />
                                    }
                                })
                                }
                                <div className="User">
                                    <div>
                                        {createElement(() => {
                                            if (typeof testies !== "undefined") {
                                                return testies[1].author;
                                            }
                                            else {
                                                return "author";
                                            }
                                        })
                                        }
                                    </div>
                                    <div className="UserSub">
                                        {createElement(() => {
                                            if (typeof testies !== "undefined") {
                                                return testies[1].jobRole;
                                            }
                                            else {
                                                return "jobRole";
                                            }
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials