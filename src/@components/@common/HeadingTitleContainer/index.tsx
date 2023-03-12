import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { HeadingTitle } from "../../../util/main/headingTitles";
import { St } from "./style";

export interface HeadingTitleContainerProps {
  headingTitles: HeadingTitle;
}

export default function HeadingTitleContainer(props: HeadingTitleContainerProps) {
  const { headingTitles } = props;

  return (
    <St.Container>
      <St.Wrapper ismore={headingTitles.isMoreBtn}>
        <St.Title>{headingTitles.title}</St.Title>
        <St.Content>{headingTitles.content}</St.Content>
      </St.Wrapper>
      {headingTitles && headingTitles.isMoreBtn && (
        <St.Link to={routePaths.Category} className={GTM_CLASS_NAME.mainMoodPiickleMore}>
          더보기
        </St.Link>
      )}
    </St.Container>
  );
}
