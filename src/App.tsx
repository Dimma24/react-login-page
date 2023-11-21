import Form from "./components/Form";
import FormHeader from "./components/FormHeader";
import Button from "./components/Button";
import "./styles/App.css";
import unsplashImage from "./assets/Images/unsplash.png";
import Input from "./components/Input";

function App() {
   return (
      <div className="form-items">
         <FormHeader />
         <img src={unsplashImage} alt="Unsplash" />
         <Form />
         <Input />
         <Button />
      </div>
   );
}

export default App;
