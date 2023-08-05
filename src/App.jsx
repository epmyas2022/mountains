import { home as Home, contenido as Content } from "./pages/home.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <>
      <Home />
      <Content />
    </>
  );
}

export default App;
