import Navbar from "./components/layout/Navbar";
import Partner from "./pages/partner";
import Testimoni from "./pages/testimoni";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 md:px-0">
        <Partner />
        <Testimoni />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
