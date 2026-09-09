import Books from "./components/Books";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <main className=" h-screen ">
      <Header />
      <Books />
      <Footer />
    </main>
  );
}
