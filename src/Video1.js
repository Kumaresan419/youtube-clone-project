
import ReactPlayer from 'react-player'
import video from './videos.mp4'
import"./Video1.css"
import image1 from './images (3).jpeg'
function Video1(){
   

     return(
        <div className="videos">
        <ReactPlayer playing url={video} width='50vw' height='70vh' />
        <img src={image1} alt='thumnail' className='image1'/>
        <h1></h1>
        <p>sony music<br />1M Views  1months</p>
        
        </div>

     );
}
export default Video1;