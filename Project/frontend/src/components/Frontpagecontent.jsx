import './content.css'
import {FaBolt, FaLock, FaThumbsUp} from 'react-icons/fa'

 
const contentData = [
    {
        title: "Lighting Fast",
        description: "Our site loads quickly on all devices",
        icon: <FaBolt/>
    },
    {
        title: "Highly Secure",
        description: "We prioritize security with best practices",
        icon: <FaLock/>
    },
    {
        title: "User Friendly",
        description: "Intuitive design and navigation make it easy for anyone to use.",
        icon: <FaThumbsUp/>
    },
]

const Frontpagecontent= () => {
    return (
        <section className='content'>
            <h2> Our sites top 3</h2>
            <div className='content-container'>
                {contentData.map((item, index) => (
                <div key={index} className='content-card'>
                <div className='content-icon'>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frontpagecontent


