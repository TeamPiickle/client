import { routePaths } from "../../core/routes/path";
import { St } from "./style";

export default function Error404Page() {
  return (
    <St.Root>
      <St.Title>찾을 수 없는 페이지입니다</St.Title>
      <St.Content>
        요청하신 페이지가 사라지거나 잘못된 경로를 이용하셨습니다
        <br />
        이용에 불편을 드려 대단히 죄송합니다
      </St.Content>
      <St.GoHomeBtn to={routePaths.Main}>홈으로 돌아가기</St.GoHomeBtn>
    </St.Root>
  );
}
