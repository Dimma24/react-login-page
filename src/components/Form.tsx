import Input from "./components/Input";
function Form() {
   return (
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
   );
}
export default Form;
