import ProductDemo from "./screens/ProductDemoScreen/ProductDemo.jsx";
import NavbarDesktop from "./screens/NavbarDesktopScreen/NavbarDesktop.jsx"; 
import RagSlackBotHome from "./screens/RagSlackBotScreen/RagSlackBotHome.jsx"; 
import LastHome from "./screens/NavbarDesktopScreen/LastHome.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Global Navbar - visible on all screens */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-1">
        <ProductDemo />
        <NavbarDesktop />
        <RagSlackBotHome />
        <LastHome />
      </main>

      {/* Global Footer - visible on all screens */}
      <Footer />
    </div>
  );
}
