import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import type { Swiper as SwiperType } from "swiper";
import styled, { css } from "styled-components";

import { Card } from "src/components/Card";
import ArrowIcon from "src/assets/icons/ArrowIcon";
import { colors } from "src/styles/colors";
import { IText } from "../../ui/IText";
import { SubscribeCodeProps, SubscribeProps } from "src/types";

const SwiperSlider: React.FC<ISwiperProps> = ({ slides }): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [count, setCount] = useState<number>(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <ContainerSwiper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={28}
        loop={false}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        slidesPerView={2}
        speed={1000}
        style={swiperStyles}
        observer
        observeParents
        onSlideChange={(slide) => {
          setCount(slide.realIndex + 1);
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i.toString()}>
            {({ isActive }) => <Card active={isActive} card={slide} />}
          </SwiperSlide>
        ))}

        <SwiperSlide></SwiperSlide>
      </Swiper>

      <NavigationContainer>
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
      </NavigationContainer>
    </ContainerSwiper>
  );
};

interface ISwiperProps {
  slides: SubscribeProps[];
}

export default SwiperSlider;

const ContainerSwiper = styled.div`
  overflow: hidden;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1266px;
  margin: 24px auto 32px;
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

const swiperStyles = {
  maxWidth: 1266,
  margin: "auto",
  overflow: "initial",
};
