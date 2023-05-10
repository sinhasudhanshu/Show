import { useState } from "react";

function TicketForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    return (
        <center>
        <div>
            <h1>TicketBooking</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <br></br>
            <button>BookTicket</button>
        </div>
        </center>
    );
}
export default TicketForm;