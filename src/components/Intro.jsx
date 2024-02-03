import Navbar from "./Home/Navbar";
import Header from "./Home/Header";
import Company from "./Home/Company";
import Footer from "./Home/Footer";
import Content from "./Home/Content";

export default function Home() {
  return (
    <div>
      <div className="nav-bg">
        <Navbar />
        <Header />
      </div>
      <Company />
      <Content />
      <Footer />
    </div>
  );
}

