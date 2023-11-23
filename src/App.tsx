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
         <form action="#">
            <Input type="text" placeholder="Enter Name" />
            <br />
            <Input type="email" placeholder="ozommadimma@gmail.com" />
            <br />
            <Input type="number" placeholder="Enter phone number" />
            <br />
            <Input type="text" placeholder="Enter D.O.B" />
            <br />
            <Input type="text" placeholder="Enter pan number" />
            <br />
            <Input type="text" placeholder="Enter adhara number" />
         </form>

         <Button label="Create an Account" />
      </div>
   );
}

export default App;
