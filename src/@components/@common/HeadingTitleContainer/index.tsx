import { HeadingTitle } from "../../../core/main/headingTitles";
import { routePaths } from "../../../core/routes/path";
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
        <St.Link to={routePaths.Category} className="GTM_더보기">
          더보기
        </St.Link>
      )}
    </St.Container>
  );
}
