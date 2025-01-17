'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/min-area.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Dream. Innovate. Implement.</h4>
              <p className="wow txt words chars splitting" data-splitting>
                Our creative  agency is ranked among the finest in the UAE. We
                cultivate smart ideas for start-ups and seasoned players. By
                adhering to industry standards, we create some stunning
                portfolios. Company branding redefines.
              </p>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  We provide free initial consultation and support.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  We work with some of the most successful businesses.
                </li>
              </ul>
              <Link href="/about/about-dark" className="butn bord curve mt-40 wow fadeInUp" data-wow-delay=".8s">
                <span>Discover</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1