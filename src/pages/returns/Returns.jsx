import SpecialHeading from "../../components/specialHeading/SpecialHeading"
import "./returns.css"

const Returns = () => {

    return (
        <>
        <section className="shipping container">
            <SpecialHeading title="Shipping" />
            <div className="division division--padtop">
                <h3 className="division__title">Shipment processing time</h3>
                <p className="division__para division__para--pad">All orders are processed within <span className="division__exp">1-2 business days</span> providing product is in stock. Delays may also occur if we are experiencing a high volume of orders. We do not ship on holidays. Saturday deliveries are  dependent upon region.</p>
            </div>
            <div className="division">
                <h3 className="division__title">Shipping Rates</h3>
                <p className="privacy__para division__para--pad">Shipping charges for your order will be calculated and displayed at checkout. Rates are calculated according to package size, weights and shipping zones.</p>
            </div>
            <div className="division">
                <h3 className="division__title">Estimated delivery time</h3>
                <p className="division__para division__para--pad">You will receive your packages via <span className="division__exp">FedEx express</span>. Please allow <span className="division__exp">1-2 business days</span> to process your order and <span className="division__exp">3-5 business days</span> for delivery.</p>
            </div>
        </section>
        <section className="returns container">
            <SpecialHeading title="Returns" />
            <div className="division division--padtop">
                <p className="privacy__para">You have <span className="division__exp">20 days</span> after reveiving your item to request a return</p>
                <p className="privacy__para">Your item must be in the same condition that you received it, and in its original packaging to be eligible for a return. You will also need the proof of purchase.</p>
                <p className="privacy__para">To start a return, contact us at <span className="division__exp">contact@madeinmorocco.com</span>. If your request is accepted we will send you instructions on how and where to send your package.</p>
                <p className="privacy__para">You will be asked to pay the return shipping costs, and as soon as we receive your package, you will receive a confirmation email and your refund will be initiated.</p>
                <p className="privacy__para">Items sent back to us without first requesting a return will not be accepted.</p>
            </div>
        </section>
        </>
    )
}

export default Returns