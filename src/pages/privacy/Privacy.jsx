import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import "./privacy.css"

function Privacy() {

    return (
        <div className="privacy container">
            <SpecialHeading title="Privacy policy" />
                <p className="privacy__para privacy__para--padtop">This privacy policy describes how we collect, use, and disclose of your personal information when you visit or purchase from the website.</p>
                <p className="privacy__para">We use your personal data to provide and improve the service. By using the service, you agree to the collection and use of information in accordance with this privacy policy. </p>
                <div className="privacy__division">
                    <h3 className="privacy__title">Information collection and use</h3>
                    <p className="privacy__para privacy__para--padleft">For a better experience while using our service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
                </div>
                <div className="privacy__division">
                    <h3 className="privacy__title">Log data</h3>
                    <p className="privacy__para privacy__para--padleft">We want to inform you that whenever you visit our service, we collect information that your browser sends to us that is called Log data. This Log data may include information such as your computer&#39;s Internet Protocol (IP) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
                </div>
                <div className="privacy__division">
                    <h3 className="privacy__title">Cookies</h3>
                    <p className="privacy__para privacy__para--padleft">Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer&#39;s hard drive.</p>
                    <p className="privacy__para privacy__para--padleft">Our website uses these &#39;cookies&#39; to collection information and to improve our service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our service.</p>
                </div>
                <div className="privacy__division">
                    <h3 className="privacy__title">Service providers</h3>
                    <p className="privacy__para privacy__para--padleft">We may employ third-party companies to facilitate our service, and assist us in analyzing how our service is used</p>
                    <p className="privacy__para privacy__para--padleft">We want to inform you that these third parties have access to your personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                </div>
                <div className="privacy__division">
                    <h3 className="privacy__title">Security</h3>
                    <p className="privacy__para privacy__para--padleft">We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                </div>
                <div className="privacy__division">
                    <h3 className="privacy__title">Contact us</h3>
                    <p className="privacy__para privacy__para--padleft">If you have any questions or suggestions about our privacy policy, do not hesitate to contact us.</p>
                </div>

        </div>
    )
}

export default Privacy