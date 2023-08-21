import anh1 from '../../assest/img/banner/anh-1.webp';
import anh2 from '../../assest/img/banner/anh-2.webp';
import anh3 from '../../assest/img/banner/anh-3.webp';
import './banner.css'

function Banner() {
    let index = 1;
    function changeImg() {
        let imgs = [anh1, anh2, anh3];
        document.querySelector('#img').src = imgs[index];
        index++;
        if (index === 3) {
            index = 0;
        }
    }

    setInterval(changeImg, 3000);

    return (
        <>
            <div className="banner">
                <img id="img" onClick={changeImg} className='img-banner' src={anh1} />
            </div>

            <div className='content'>
                <div className='text-uppercase--title'>New Arrivals</div>

                <div className='text-uppercase'>
                    Women <br />
                    Glasses
                </div>

                <div className='caption-btn'>
                    <button type='button' className='btn'>
                        Shop Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default function MyBanner() {
    return (
        <Banner />
    );
}