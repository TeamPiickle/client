export default function IcMenuBtn({ isLighted }: { isLighted?: boolean }) {
  return (
    <svg width="27" height="6" viewBox="0 0 27 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3.5" cy="3" r="3" fill={isLighted ? "#FFFFFF" : "#E0E0E0"} />
      <circle cx="13.5" cy="3" r="3" fill={isLighted ? "#FFFFFF" : "#E0E0E0"} />
      <circle cx="23.5" cy="3" r="3" fill={isLighted ? "#FFFFFF" : "#E0E0E0"} />
    </svg>
  );
}
