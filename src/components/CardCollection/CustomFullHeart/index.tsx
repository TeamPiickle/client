import styled, { keyframes } from "styled-components";

export default function CustomFullHeart() {
  return (
    <StSvg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="heart">
        <g id="Vector" filter="url(#filter0_i_1257_19289)">
          <path
            d="M37.9951 11.5531C37.8943 5.2836 33.1966 0 27.4127 0C23.9831 0 20.9345 1.77568 19 4.52771C17.0655 1.77568 14.0169 0 10.5874 0C4.80211 0 0.105015 5.2836 0.00491132 11.5531C-0.00613914 11.3333 0.00491132 11.7755 0.00491132 11.5531C0.422879 22.5714 19 32 19 32C19 32 37.5771 22.5746 37.9951 11.5531C37.9951 11.7755 38.0061 11.3333 37.9951 11.5531Z"
            fill="#19BE7E"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1257_19289"
          x="0"
          y="0"
          width="38"
          height="33"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1257_19289" />
        </filter>
      </defs>
    </StSvg>
  );
}
const startHeart = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.1);
  }
`;

const StSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 10;

  animation: ${startHeart} 0.4s ease-in-out;
  -webkit-transform: translate3d(0, 0, 0);
`;
