import { RoutePaths } from "../../../core/routes/path";
import { HeadingTitle } from "../../../util/main/headingTitles";
import { St } from "./style";

export interface HeadingTitleContainerProps {
  headingTitles: HeadingTitle;
  paddingVerticalValue?: number;
  routePath?: RoutePaths;
  gtmClassName?: string;
}

export default function HeadingTitleContainer(props: HeadingTitleContainerProps) {
  const { headingTitles, paddingVerticalValue, routePath, gtmClassName } = props;

  return (
    <St.Container paddingVerticalValue={paddingVerticalValue ?? 2.4}>
      <St.Wrapper ismore={routePath !== undefined}>
        <St.Title>{headingTitles.title}</St.Title>
        <St.Content>{headingTitles.content}</St.Content>
      </St.Wrapper>
      {headingTitles && routePath && (
        <St.Link to={routePath} className={gtmClassName}>
          더보기
        </St.Link>
      )}
    </St.Container>
  );
}
