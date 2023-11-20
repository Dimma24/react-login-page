import Form from "./components/Form";
import FormHeader from "./components/FormHeader";
import Button from "./components/Button";
import "./styles/App.css";
// import Images from "./assets/Images/unsplash.png";
function App() {
   return (
      <div className="form-items">
         <FormHeader />
         <img src="./assets/Images/unsplash.png" alt="human-head"></img>
         <Form />
         {/* <Images /> */}
         <Button />
      </div>
   );
}

export default App;
