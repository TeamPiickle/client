import { RoutePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { HeadingTitle } from "../../../util/main/headingTitles";
import { St } from "./style";

export interface HeadingTitleContainerProps {
  headingTitles: HeadingTitle;
  paddingVerticalValue?: number;
  routePath?: RoutePaths;
}

export default function HeadingTitleContainer(props: HeadingTitleContainerProps) {
  const { headingTitles, paddingVerticalValue, routePath } = props;

  return (
    <St.Container paddingVerticalValue={paddingVerticalValue ?? 2.4}>
      <St.Wrapper ismore={headingTitles.isMoreBtn}>
        <St.Title>{headingTitles.title}</St.Title>
        <St.Content>{headingTitles.content}</St.Content>
      </St.Wrapper>
      {headingTitles && headingTitles.isMoreBtn && routePath && (
        <St.Link to={routePath} className={GTM_CLASS_NAME.mainMoodPiickleMore}>
          더보기
        </St.Link>
      )}
    </St.Container>
  );
}
