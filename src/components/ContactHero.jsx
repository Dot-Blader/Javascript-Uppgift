import { useState } from 'react'


function ContactHero() {

    const [formData, setFormData] = useState({ Name: '', Mail: '', Spec: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                e.preventDefault()
                console.log(`The ${field} field is required.`)
            }
        })
    }

    return (
        <div className="Area ContactHero">
            <div className="Region ContactRegion">
                <div className="BreadCrumb">
                    <div className="BreadHome">
                        <img src="images/8_Contact/house.png"></img>
                        <div>Homepage</div>
                    </div>
                    <div>&gt;&gt;</div>
                    <div className="BreadContact">Contact</div>
                </div>
                <div className="ContactMain">
                    <div className="ContactUs">
                        <div>Contact Us</div>
                        <div className="ContactContent">
                            <div className="ContImage">
                                <img src="images/8_Contact/bx-envelope.png"></img>
                            </div>
                            <div className="ContTexts">
                                <div className="ContEmailUs">Email us</div>
                                <div className="ContContent">Please feel free to drop us a line. We will respond as soon as possible.</div>
                                <button className="btn ContactCont1">
                                    Leave a message
                                    <img src="images/7_FAQ/arrowBlue.png" alt="Alternate Text" />
                                </button>
                            </div>
                        </div>
                        <div className="ContactContent">
                            <div className="ContImage">
                                <img src="images/8_Contact/add-group.png"></img>
                            </div>
                            <div className="ContTexts">
                                <div className="ContEmailUs">Careers</div>
                                <div className="ContContent">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</div>
                                <button className="btn ContactCont1">
                                    Send an application
                                    <img src="images/7_FAQ/arrowBlue.png" alt="Alternate Text" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <form noValidate onSubmit={handleSubmit} className="ConsultForm">
                        <div className="FormSection">
                            <div>Get Online Consultation</div>
                            <div className="FormInputs">
                                <div className="FormLabelIns">
                                    <label htmlFor="Name" className="ContFormLabel">Full name</label>
                                    <input required type="text" name="Name" value={formData.Name} onChange={handleChange} className="FormTextIn FormSize"></input>
                                </div>
                                <div className="FormLabelIns">
                                    <label htmlFor="Mail" className="ContFormLabel">Email address</label>
                                    <input required type="text" name="Mail" value={formData.Mail} onChange={handleChange} className="FormTextIn FormSize"></input>
                                </div>
                                <div className="FormLabelIns">
                                    <label htmlFor="Spec" className="ContFormLabel">Specialist</label>
                                    <input required type="text" name="Spec" value={formData.Spec} onChange={handleChange} className="FormTextIn FormSize"></input>
                                </div>
                            </div>

                            <button className="btn FormSize">Make an appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactHero