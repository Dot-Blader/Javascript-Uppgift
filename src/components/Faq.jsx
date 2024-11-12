import { useState, useEffect, createElement } from 'react'

function Faq() {

    const [faqs, setFaqs] = useState();

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        const data = await res.json();
        setFaqs(data);
    }
    useEffect(() => {
        fetchData();
    }, [])


    const handleClick = (question) => {
        const parent = document.getElementById(question).parentElement;

        const draspelskeys = Array.from(document.getElementsByClassName('DragspelKey'));

        draspelskeys.forEach(answer => {
            Array.from(answer.children).forEach(child => {
                if (child.classList.contains("FAQuestion")) {
                    if (child.id != question) {
                        answer.classList.remove('open')
                    }
                }
            })
        })

        parent.classList.toggle('open');
    }

    return (
        <div className="Area FAQ">
            <div className="FAQbox">
                <div>
                    <div>
                        Any questions?
                    </div>
                    <div>
                        Check out the FAQs
                    </div>
                </div>
                <div className="FAQboxSub">
                    Still have unanswered questions and need to get in touch?
                </div>
                <div className="FAQcontacts">
                    <div className="FAQcontact">
                        <div>
                            <img src="images/7_FAQ/phoneBlue.png" alt="Alternate Text" />
                        </div>
                        <div>
                            Still have  questions?
                        </div>
                        <button className="btn ContactFAQ1">
                            Contact us
                            <img src="images/7_FAQ/arrowBlue.png" alt="Alternate Text" />
                        </button>
                    </div>
                    <div className="FAQcontact">
                        <div>
                            <img src="images/7_FAQ/speechBub.png" alt="Alternate Text" />
                        </div>
                        <div>
                            Dont like phone calls?
                        </div>
                        <button className="btn ContactFAQ2">
                            Contact us
                            <img src="images/7_FAQ/arrowGreen.png" alt="Alternate Text" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="Dragspel">
                <div className="DragspelKey">
                    <div className="FAQuestion" onClick={() => { handleClick("drag1"); }} id="drag1">
                        <p className="FAQtext">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[0].title;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }
                        </p>
                        <div className="chevron">
                            \/
                        </div>
                    </div>
                    <div className="ActiveKeySub">
                        <div className="expandable">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[0].content;
                                }
                                else {
                                    return "text";
                                }
                              })
                            }
                        </div>
                    </div>
                </div>
                <div className="DragspelKey">
                    <div className="FAQuestion" onClick={() => { handleClick("drag2"); }} id="drag2">
                        <p className="FAQtext">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[1].title;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }
                        </p>
                        <div className="chevron">
                            \/
                        </div>
                    </div>
                    <div className="ActiveKeySub">
                        <div className="expandable">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[1].content;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className="DragspelKey">
                    <div className="FAQuestion" onClick={() => { handleClick("drag3"); }} id="drag3">
                        <p className="FAQtext">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[2].title;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }
                        </p>
                        <div className="chevron">
                            \/
                        </div>
                    </div>
                    <div className="ActiveKeySub">
                        <div className="expandable">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[2].content;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }                        </div>
                    </div>
                </div>
                <div className="DragspelKey">
                    <div className="FAQuestion" onClick={() => { handleClick("drag4"); }} id="drag4">
                        <p className="FAQtext">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[3].title;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }
                        </p>
                        <div className="chevron">
                            \/
                        </div>
                    </div>
                    <div className="ActiveKeySub">
                        <div className="expandable">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[3].content;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }                        </div>
                    </div>
                </div>
                <div className="DragspelKey">
                    <div className="FAQuestion" onClick={() => { handleClick("drag5"); }} id="drag5">
                        <p className="FAQtext">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[4].title;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }
                        </p>
                        <div className="chevron">
                            \/
                        </div>
                    </div>
                    <div className="ActiveKeySub">
                        <div className="expandable">
                            {createElement(() => {
                                if (typeof faqs !== "undefined") {
                                    return faqs[4].content;
                                }
                                else {
                                    return "text";
                                }
                            })
                            }                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq