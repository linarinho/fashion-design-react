import './contact-card.scss';


function ContactCard({icon, address, desc}) {
    return (
        <div className="contact-card">
            {icon}
            <h3>{address}</h3>
            <span>{desc}</span>
        </div>
    )
}

export default ContactCard
