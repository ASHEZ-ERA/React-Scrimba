export default function Contact({img, name, email, phone}) {
  return (
    
    <div className="contacts">
      <article className="contact-card">
        <img src={img} alt="Photo of Mr. Whiskerson" className="image" />
        <h3 className="name">{name}</h3>
        <div className="info-group">
          <img
            src="./images/phoneIcon.png"
            alt="phone icon"
            className="phone-icon"
          />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img
            src="./images/mailIcon.png"
            alt="mail icon"
            className="mail-icon"
          />
          <p>{email}</p>
        </div>
      </article>
    </div>
  );
}
