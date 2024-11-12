import {useState } from 'react'

function Subscribe() {

    const [formData, setFormData] = useState({ email: ''})

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
        <div className="Subscribe">
            <div className="SubscribeTitle">
                <div>
                    <img src="images/7_FAQ/notification.png" alt="Alternate Text" />
                </div>
                <div>
                    Subscribe to our newsletter to stay informed about latest updates
                </div>
            </div>
            <form noValidate onSubmit={handleSubmit } className="emailInput">
                <input required type="email" name="email" onChange={handleChange } defaultValue="" placeholder="Your Email" id="Email" />
                <button className="btn subBtn">Subscribe</button>
            </form>
        </div>
    )
}
export default Subscribe