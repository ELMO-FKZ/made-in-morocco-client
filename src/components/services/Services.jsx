import services from "../../data/services"
import "./services.css"

function Services() {

    return (
        <div className="services container" >
            {
                services.map((service) => {
                    return (
                        <div className="service" key={service.id}>
                            {service.icon}
                            <div className="service__title">
                                {service.title}
                            </div>
                            <div>
                                {service.subtitle}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Services