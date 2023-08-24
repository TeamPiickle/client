export default function IcMenuBtn({ isLighted }: { isLighted?: boolean }) {
  return (
    <svg
      className="click_card_etc"
      width="27"
      height="6"
      viewBox="0 0 27 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle className="click_card_etc" cx="3.5" cy="3" r="3" fill={isLighted ? "#FFFFFF" : "#E0E0E0"} />
      <circle className="click_card_etc" cx="13.5" cy="3" r="3" fill={isLighted ? "#FFFFFF" : "#E0E0E0"} />
      <circle className="click_card_etc" cx="23.5" cy="3" r="3" fill={isLighted ? "#FFFFFF" : "#E0E0E0"} />
    </svg>
  );
}
