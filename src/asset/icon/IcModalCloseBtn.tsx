interface IcModalCloseBtnProps {
  closeBtnClassName?: string;
}

export default function IcModalCloseBtn(props: IcModalCloseBtnProps) {
  const { closeBtnClassName } = props;
  return (
    <svg
      className={closeBtnClassName}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path className={closeBtnClassName} d="M4 4L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path className={closeBtnClassName} d="M18 4L4 18" stroke="#19BE7E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
