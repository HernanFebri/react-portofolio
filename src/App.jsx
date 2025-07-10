import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero">
        <div>
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[500px]"
          />
        </div>
      </div>
    </>
  );
}

export default App;
