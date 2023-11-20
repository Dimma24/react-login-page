import Form from "./components/Form";
import FormHeader from "./components/FormHeader";
import Button from "./components/Button";
import "./styles/App.css";
import unsplashImage from "./assets/Images/unsplash.png";
function App() {
   return (
      <div className="form-items">
         <FormHeader />
         <img src={unsplashImage} alt="Unsplash" />
         <Form />
         <Button />
      </div>
   );
}

export default App;
