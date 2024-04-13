import bgImage from "../src/assets/illustration-article.svg";
import manImage from "../src/assets/image-avatar.webp";
import "./App.css";

const App = () => {
  return (
    <div className="card">
      <img src={bgImage} alt="" className="imgClass" />
      <div className="container">
        <h3 className="box">Learning</h3>
        <p id="paragraph">Published 13 Apr 2024</p>
        <h2>HTML & CSS Foundations</h2>
        <p>
          These languages are the backbone of every website, defining structure,
          content and presentation.
        </p>
        <img src={manImage} alt="" id="img" />
        <h4>Ashish Vaidya</h4>
      </div>
    </div>
  );
};

export default App;
