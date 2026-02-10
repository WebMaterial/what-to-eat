import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FrontTxt = (props) => {


  return (
    <div className="front-txt">
      <div className="front-txt__inner">
        <h2 className="front-txt__title">今、何食べたい？が近くで見つかる</h2>
        <p className="front-txt__description">何を食べたいか迷ったら、簡単な質問に答えるだけでおすすめのお店を見つけます！</p>

        <button className="front-txt__button" onClick={() => {props.handleStart()}}>さっそく探す！</button>

        <div className="swiper-content">

          <h3 className="swiper__title">1分でわかる「飯どこ！」の使い方</h3>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={12}
            slidesPerView={1}
            className="front-swiper"
          >


            <SwiperSlide>
              <div className="front-slide">
                <div className="front-slide__inner">
                  <div className="front-slide__title">1. カテゴリを選ぶ</div>
                  <div className="front-slide__desc">ラーメン/寿司/カフェ など</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="front-slide">
                <div className="front-slide__inner">
                  <div className="front-slide__title">2. 具体を選ぶ or おまかせ</div>
                  <div className="front-slide__desc">候補から選ぶと精度UP</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="front-slide">
                <div className="front-slide__inner">
                  <div className="front-slide__title">3. 近くを探す</div>
                  <div className="front-slide__desc">Googleマップで近場を表示</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>

      </div>
    </div>
  );
}

export default FrontTxt;