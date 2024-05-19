import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <>
      <div className="container mx-auto  w-2/3 my-3 bg-[#EAECEF]">
        <Header />

        <Main />
        {/* <CustomKanban/> */}
      </div>
    </>
  );
}

export default App;
