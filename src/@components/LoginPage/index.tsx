import Footer from "../@common/Footer";
import Header from "../@common/Header";
import useGTMPage from "../@common/hooks/useGTMPage";
import useScroll from "../@common/hooks/useScrollToTop";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  useGTMPage();
  useScroll();

  return (
    <main>
      <Header />
      <LoginForm />
      <Footer />
    </main>
  );
}
