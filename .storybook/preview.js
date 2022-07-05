import { GlobalStyle } from "../src/style/globalStyle";

export const parameters = {
  // Action 탭에서 이벤트가 발생하는 것을 감지
  //👇 Configures Storybook to log the actions( on 으로 시작하는 이벤트 핸들러 함수 ) in the UI.
  actions: { argTypesRegex: "^on[A-Z].*" },
  // controls - 개발자가 코드를 수정하지 않아도 storybook에서 동적으로 인터렉션 가능하도록
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// 추가::styled-components의 ThemeProvider 통해
export const decorators = [
  (Story, context) => (
    <>
      <GlobalStyle />
      <Story {...context} />
    </>
  ),
];
