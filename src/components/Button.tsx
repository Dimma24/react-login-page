// function Button() {
//    return (
//       <div>
//          <button className="create-button">Create an Account</button>
//          <p className="footer">
//             Do you already have an account? <a href="#">LOGIN</a>
//          </p>
//       </div>
//    );
// }

// export default Button;

interface ButtonProps {
   label: string;
}

function Button({ label }: ButtonProps) {
   return (
      <div>
         <button className="create-button">{label}</button>
      </div>
   );
}

export default Button;
