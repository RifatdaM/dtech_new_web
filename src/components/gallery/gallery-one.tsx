import React, { CSSProperties } from 'react';

import Marquee from 'react-fast-marquee';
// imgs
import shape_1 from '../../assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '../../assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '../../assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '../../assets/img/home-03/gallery/gal-shape-dark-2.png';
import g_1 from '../../assets/img/home-03/gallery/gal-1.jpg';
import g_2 from '../../assets/img/home-03/gallery/gal-2.jpg';
import g_3 from '../../assets/img/home-03/gallery/gal-3.jpg';
import g_4 from '../../assets/img/home-03/gallery/gal-4.jpg';
import g_5 from '../../assets/img/home-03/gallery/gal-5.jpg';


const gallery_imgs = [
  g_1, g_2, g_3, g_4, g_5, g_3, g_1, g_2, g_3, g_4, g_5, g_3
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <img className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <img className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <img className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <img className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee pauseOnHover={true} className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_imgs.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <img src={g} alt="gallery-img" style={{ height: 'auto' }} />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}