import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import type { Swiper as SwiperType } from "swiper";
import styled, { css } from "styled-components";

import { Card } from "src/components/Card";
import ArrowIcon from "src/assets/icons/ArrowIcon";
import { colors } from "src/styles/colors";
import { IText } from "../../ui/IText";
import { SubscribeProps } from "src/types";

const SwiperSlider: React.FC<ISwiperProps> = ({
  slides,
  setSubscribeId,
}): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [count, setCount] = useState<number>(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <ContainerSwiper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        loop={false}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
        }}
        slidesPerView={1}
        speed={1000}
        observer
        observeParents
        onSlideChange={(slide) => {
          setCount(slide.realIndex + 1);
        }}
        className="swiper-slider"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i.toString()}>
            {({ isActive }) => (
              <Card
                active={isActive}
                card={slide}
                setSubscribeId={setSubscribeId}
              />
            )}
          </SwiperSlide>
        ))}

        <SwiperSlide></SwiperSlide>
      </Swiper>

      <div className="swiper-navigation">
        <Arrow ref={prevRef} nonactive={count === 1}>
          <ArrowIcon
            way="left"
            color={count === 1 ? colors.black700 : colors.white}
          />
        </Arrow>
        <CountContainer>
          {count}
          <IText as="span" containerStyles={countStyles}>
            /{slides.length}
          </IText>
        </CountContainer>
        <Arrow ref={nextRef} nonactive={count === slides.length}>
          <ArrowIcon
            way="right"
            color={count === slides.length ? colors.black700 : colors.white}
          />
        </Arrow>
      </div>
    </ContainerSwiper>
  );
};

interface ISwiperProps {
  slides: SubscribeProps[];
  setSubscribeId: Dispatch<SetStateAction<number>>;
}

export default SwiperSlider;

const ContainerSwiper = styled.div`
  overflow: hidden;
`;

const Arrow = styled.div<{ nonactive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid ${colors.gray500};
  border-radius: 12px;
  cursor: pointer;

  ${({ nonactive }) =>
    nonactive && `border: 1px solid ${colors.black700}; cursor: initial;`}

  @media (max-width: 576px) {
    display: none;
  }
`;

const CountContainer = styled.div`
  margin: 0 12px;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;

const countStyles = css`
  color: ${colors.black600};
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;
