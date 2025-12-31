import ProductDemo from "./ProductDemoScreen/ProductDemo.jsx";
import NavbarDesktop from "./NavbarDesktopScreen/NavbarDesktop.jsx"; 
import RagSlackBotHome from "./RagSlackBotScreen/RagSlackBotHome.jsx"; 
import LastHome from "./NavbarDesktopScreen/LastHome.jsx";

export default function App() {
  return <>
  <div className="bg-[#F5F7FB]">

  <ProductDemo />
  <NavbarDesktop />
  <RagSlackBotHome />
  <LastHome/>
  </div>
  </>
}
