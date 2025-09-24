// src/App.js
import BottomContent from "./components/BottomContent";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import Navbar from './components/Navbar'

function App() {
  const slides = [
    {
      image: "https://blog-res.admitkard.com/blog/wp-content/uploads/2023/11/08175914/Best-courses-to-study-abroad-after-12-commerce.png",
      title: "Explore Global Opportunities",
      description: "Discover the best courses to study abroad after completing your commerce degree."
    },
    {
      image: "https://imarticus.org/blog/wp-content/uploads/2025/02/How-to-Study-for-ACCA-Course.jpg",
      title: "Advance Your Career with ACCA",
      description: "Learn effective strategies and tips on how to prepare for and excel in the ACCA course."
    },
    {
      image: "https://www.kopykitab.com/blog/wp-content/uploads/2022/07/studying-3.jpg",
      title: "Unlock Your Potential",
      description: "Access world-class study materials and resources to achieve academic excellence."
    },
    {
      image: "https://www.ofgad.com/wp-content/uploads/2019/05/Access-World-Leading-Research-e1560124451195.jpg",
      title: "Access World-Leading Research",
      description: "Dive into cutting-edge research from top universities and institutions around the globe."
    }
  ];

  return (
    <>
    <Navbar/>
      <div className="w-full max-w-6xl mx-auto mt-4">
        <Carousel slides={slides} />
      </div>
      <BottomContent/>
      <Features/>
    </>
  );
}

export default App;