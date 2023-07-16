import { IcHamburger, IcLogo } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useModal from "../hooks/useModal";
import MenuBar from "../MenuBar";
import * as St from "./style";

interface HeaderProps {
  bgColor?: string;
}

export default function Header(props: HeaderProps) {
  const { bgColor } = props;
  const { isModalOpen, toggleModal } = useModal();

  return (
    <St.HeaderWrapper bgColor={bgColor}>
      <St.Link to={routePaths.Main} className={GTM_CLASS_NAME.mainPiickleLogo}>
        <IcLogo aria-label="피클" />
      </St.Link>
      <St.HamburgerContainer className={GTM_CLASS_NAME.mainMenuBtn} isClicked={isModalOpen}>
        <IcHamburger aria-label="메뉴" className={GTM_CLASS_NAME.mainMenuBtn} onClick={toggleModal} />
      </St.HamburgerContainer>

      {isModalOpen && <MenuBar closeMenuBar={toggleModal} />}
    </St.HeaderWrapper>
  );
}
