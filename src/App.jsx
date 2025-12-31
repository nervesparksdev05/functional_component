import ProductDemo from "./screens/DemoDiscoveryScreens/ProductDemo.jsx";
import NavbarDesktop from "./screens/NavbotAgentScreens/NavbarDesktop.jsx"; 
import RagSlackBotHome from "./screens/SlackAgentScreens/HomeScreen.jsx"; 


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FB]">
      <main className="flex-1">
        {/* <ProductDemo /> */}
        {/* <NavbarDesktop /> */}
        <RagSlackBotHome />
      </main>
    </div>
  );
}
