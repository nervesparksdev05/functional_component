import ProductDemo from "./screens/ProductDemoScreen/ProductDemo.jsx";
import NavbarDesktop from "./screens/NavbotDesktopScreen/NavbarDesktop.jsx"; 
import RagSlackBotHome from "./screens/RagSlackBotScreen/RagSlackBotHome.jsx"; 


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FB]">
      <main className="flex-1">
        {/* <ProductDemo /> */}
        <NavbarDesktop />
        {/* <RagSlackBotHome /> */}
      </main>
    </div>
  );
}
