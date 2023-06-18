import Loading from "../../@common/Loading";

export default function OAuthNaverPage() {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  return <Loading backgroundColor="white" />;
}
