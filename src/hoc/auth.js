/* eslint-disable react/prop-types */

// null -> 누구나 출입이 가능한 페이지
// true -> 로그인한 유저만 출입이 가능한 페이지
// false -> 로그인한 유저가 account 페이지 가려고 하면 막아준다
export default function Auth(SpecificComponent, option) {
  function AuthenticationCheck(props) {
    const IS_AUTH = localStorage.getItem("piickle-token");

    if (IS_AUTH === null) {
      if (option) {
        props.history.push("/login");
      }
    } else {
      if (option === false) {
        props.history.push("/main");
      }
    }

    return <SpecificComponent {...props} />;
  }
  return AuthenticationCheck;
}
