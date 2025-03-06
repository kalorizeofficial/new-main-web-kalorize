import Navbar from "./components/layout/Navbar";
import Partner from "./pages/partner";
import Testimoni from "./pages/testimoni";
// import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Main />
        <Partner />
        <Testimoni />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
