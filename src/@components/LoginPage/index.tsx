import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  useGTMPage();

  return (
    <main>
      <Header />
      <LoginForm />
      <Footer />
    </main>
  );
}
