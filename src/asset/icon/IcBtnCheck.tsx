export default function IcBtnCheck({ isChecked }: { isChecked: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" fill={isChecked ? "#19BE7E" : "#E0E0E0"} />
      <path
        d="M3 7.88235L5.96021 11.1734C6.35748 11.6151 7.04992 11.6151 7.44719 11.1734L13 5"
        stroke={isChecked ? "white" : "#C2C2C2"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
