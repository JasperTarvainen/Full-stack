import './Banner.css'

const Pricing = () => {
    const plans = [
        {
            title: 'Pro',
            price: 'From 99 € / month',
            features: ['All basic features + custom features', 'Priority support', 'Custom domain'],
            highlight: true
        },
        {
            title: 'Basic',
            price: 'From 49 € / month',
            features: ['Fast performance', 'Secure', 'For smaller businesses'],
            highlight: false
        }
    ]
    return (
    <section className="banner2">
      <div className="banner2-container">
        <h2 className="banner2-title">Choose Your Plan</h2>
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            >
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button className="choose-btn">
                {plan.highlight ? 'Get Pro' : 'Choose Basic'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing