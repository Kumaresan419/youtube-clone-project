import image from './Vaathi Coming.jpg'
import image1 from './images (3).jpeg'
import './Container.css'

function Container(){
    return(
    <div className="container">
        <div className="cards">
           
            <div className="card">
            <img src={image} alt='thumnail'/>
            <a href='index.html'>VAATHI COMING/MASTER</a>
            <p>sony music<br />1M Views  1months</p>
            <img src={image1} alt='thumnail' className='image1'/>

            </div>
            <div className="card">
            <img src={image} alt='thumnail'/>
            <a href='index.html'>VAATHI COMING/MASTER</a>
            <p>sony music<br />1M Views  1months</p>
            <img src={image1} alt='thumnail' className='image1'/>
            </div>
            <div className="card">
            <img src={image} alt='thumnail'/>
            <a href='index.html'>VAATHI COMING/MASTER</a>
            <p>sony music<br />1M Views  1months</p>
            <img src={image1} alt='thumnail' className='image1'/>
            </div>
            <div className="card">
            <img src={image} alt='thumnail'/>
            <a href='index.html'>VAATHI COMING/MASTER</a>
            <p>sony music<br />1M Views  1months</p>
            <img src={image1} alt='thumnail' className='image1'/>
            </div>
            <div className="card">
            <img src={image} alt='thumnail'/>
            <a href='index.html'>VAATHI COMING/MASTER</a>
            <p>sony music<br />1M Views  1months</p>
            <img src={image1} alt='thumnail' className='image1'/>
            </div>
            <div className="card">
            <img src={image} alt='thumnail'/>
            <a href='index.html'>VAATHI COMING/MASTER</a>
            <p>sony music<br />1M Views  1months</p>
            <img src={image1} alt='thumnail' className='image1'/>
            </div>
        </div>
    </div>
);
}
export default Container;