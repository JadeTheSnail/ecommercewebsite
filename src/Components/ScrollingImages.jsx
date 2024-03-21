import labImage01 from '../Styles/LabPic01.jpg'
import '../Styles/scrollingImages.css'

export default function ScrollingImages() {


    return ( 
        <div>
        <div className='scrollingImages'>
        <img src={labImage01} alt="Scrolling images of lab equipment" />
        </div>
        </div>
    )
}