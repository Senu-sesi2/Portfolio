import "./FormStyles.css";
import React, { useRef, useState } from "react";
import * as emailjs from "@emailjs/browser";

const Form = () => {
const form = useRef();
const [sending, setSending] = useState(false);
const [feedback, setFeedback] = useState(""); // for inline success/error message

const sendEmail = (e) => {
e.preventDefault();
setSending(true);
setFeedback("");

emailjs
  .sendForm(
    "service_rtnh2ok", 
    "template_qlkgeor",
    form.current,
    "dbnBdq0ooybgPgfTr"
  )
  .then(
    (result) => {
      console.log("EmailJS Success:", result.text);
      setFeedback("✅ Message sent successfully!");
      form.current.reset(); // clear the form
      setSending(false);
    },
    (error) => {
      console.error("EmailJS Error:", error.text);
      setFeedback("❌ Message failed to send. Please try again.");
      setSending(false);
    }
  );

};

return ( <div className="form"> <form ref={form} onSubmit={sendEmail}> <label>Your Name</label> <input type="text" name="user_name" required />

```
    <label>Email</label>
    <input type="email" name="user_email" required />

    <label>Subject</label>
    <input type="text" name="subject" required />

    <label>Message</label>
    <textarea
      name="message"
      rows="6"
      placeholder="Type your message here"
      required
    />

    <button className="btn" type="submit" disabled={sending}>
      {sending ? "Sending..." : "Submit"}
    </button>

    {feedback && <p className="feedback">{feedback}</p>}
  </form>
</div>

);
};

export default Form;
