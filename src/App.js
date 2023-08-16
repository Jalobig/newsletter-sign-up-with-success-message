import { useState } from "react";
import "./App.scss";
import Footer from "./Layout/Footer/Footer";
import Card from "./components/Card/Card";
import Newsletter from "./components/Newsletter/Newsletter";
import Success from "./components/Success/Success";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [isNotSubmitted, setIsNotSubmitted] = useState(true);
  const [email, setEmail] = useState("");
  const media = useMediaQuery("only screen and (max-width:460px");
  const toggleSubmithandler = (value = "") => {
    setIsNotSubmitted((prevState) => !prevState);
    setEmail(value);
  };
  return (
    <>
      {isNotSubmitted && (
        <Card margin={!media && "7rem auto"} className="fade-in">
          <Newsletter toggleSubmit={toggleSubmithandler} />
        </Card>
      )}
      {!isNotSubmitted && (
        <Card margin={!media && "10rem auto"} className="bounce">
          <Success toggleSubmit={toggleSubmithandler} email={email} />
        </Card>
      )}
      {!media && <Footer />}
    </>
  );
}

export default App;
