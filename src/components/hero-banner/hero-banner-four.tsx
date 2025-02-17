import { ArrowBg, RightArrowTwo } from "../svg";
import { Link } from "react-router-dom";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">Uninterrupted Speed</span>
                <span className="tp-reveal-line">Unmatched Support</span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
              Empowering Your Connected World
              </span>
              <Link className="tp-btn-black-2" to="/contact">
                Say Hello{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
