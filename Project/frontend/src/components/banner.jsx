import './Banner.css'

const Banner = ({title, subtitle, button1, button2}) => {
    return (
        <div className='banner'>
         <div className='banner-content'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className='banner-buttons'>
                <button onClick={button1.onClick}>See more</button>
                <button onClick={button2.onClick}>something</button>
            </div>
         </div>
        </div>
    )
}

export default Banner;
