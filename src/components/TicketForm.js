import { useState } from "react";

function TicketForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const clickHandler = (event) => {
        console.log("clicked");
        console.log(event.target.value);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        
      };

      const handleNameChange = (event) => {
        setName(event.target.value);
      };

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
    return (
        <center>
        <div>
            <h1>TicketBooking</h1>
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <br></br>
            <button onClick={clickHandler}>BookTicket</button>
        </div>
        </center>
    );
}
export default TicketForm;