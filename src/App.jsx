import ProductDemo from "./screens/ProductDemoScreen/ProductDemo.jsx";
import NavbarDesktop from "./screens/NavbarDesktopScreen/NavbarDesktop.jsx"; 
import RagSlackBotHome from "./screens/RagSlackBotScreen/RagSlackBotHome.jsx"; 
import LastHome from "./screens/NavbarDesktopScreen/LastHome.jsx";

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
