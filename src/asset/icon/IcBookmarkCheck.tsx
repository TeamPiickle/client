export default function IcBookmarkCheck({ isChecked }: { isChecked: boolean }) {
  return (
    <svg
      className={isChecked ? "" : "click_card_bookmark"}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_2355_6996)">
        <path
          className={isChecked ? "" : "click_card_bookmark"}
          d="M42.9387 10.1915C42.9387 9.56439 42.9387 9.25081 42.8166 9.01127C42.7093 8.80056 42.538 8.62925 42.3272 8.52189C42.0877 8.39984 41.7741 8.39984 41.147 8.39984H14.3952C13.7681 8.39984 13.4545 8.39984 13.2149 8.52189C13.0042 8.62925 12.8329 8.80056 12.7256 9.01127C12.6035 9.25081 12.6035 9.56439 12.6035 10.1915V44.685C12.6035 45.5922 12.6035 46.0459 12.7945 46.3295C12.9615 46.5774 13.2206 46.7483 13.5142 46.8041C13.8502 46.8679 14.2671 46.6892 15.101 46.3318L27.0653 41.2043C27.3255 41.0928 27.4556 41.037 27.5905 41.015C27.7101 40.9954 27.8321 40.9954 27.9517 41.015C28.0866 41.037 28.2167 41.0928 28.4769 41.2043L40.4412 46.3318C41.2751 46.6892 41.692 46.8679 42.0279 46.8041C42.3216 46.7483 42.5807 46.5774 42.7477 46.3295C42.9387 46.0459 42.9387 45.5922 42.9387 44.685V10.1915Z"
          fill={isChecked ? "#19BE7E" : "#E0E0E0"}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_2355_6996"
          x="0"
          y="0"
          width="56"
          height="57"
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
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2355_6996" />
        </filter>
      </defs>
    </svg>
  );
}
