import {useRef,useState} from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormValidation(){
    const name=useRef()
    const email=useRef()
    const message=useRef()
    const acceptAllConditions=useRef()


const [isFormSent , setIsFormSent] = useState('false');
const validateform =()=>{
    const nameValue = name.current.value;
        const emailValue = email.current.value;
        const messageValue = message.current.value;
        const acceptAllConditionsValue = acceptAllConditions.current.checked;
}
const resetForm = () =>{
    name.current.value = ""
    email.current.value = ""
    message.current.value = ""
    acceptAllConditions.current.value = false
}
    const submitForm =(e)=>{
        e.preventDefault();
        const nameValue = name.current.value;
        const emailValue = email.current.value;
        const messageValue = message.current.value;
        const acceptAllConditionsValue = acceptAllConditions.current.checked;
        console.log({
            nameValue,
            emailValue,
            messageValue,
            acceptAllConditionsValue
        })
            setIsFormSent("true");
            resetForm()
    }
return(
    <div className={'container-fluid w-75 mx-auto my-5'}>
        {isFormSent ?
        <div className="alert alert-succes">
            <strong>Success</strong> <h2>Message sent successfuly !!</h2>
        </div>
        : " "    
    }
        
        <form onSubmit={submitForm}>
            <h1>Contact Form</h1>
            
            <hr />
        <div>
            <label className="form-label" htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" />
        </div>
        
        <div>
            <label className="form-label" htmlFor="email">Email Adress</label>
            <input type="email" id="email" className="form-control" />
        </div>
        
        <div>
            <label className="form-label" htmlFor="name">Message</label>
            <textarea className="from-control" id="message" rows="4"></textarea>
        </div>
        
        <div>
            <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions"/>
            <label className="form-check-label" htmlFor="acceptAllConditions">
                Accept all conditions
            </label>
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
        </form>
        <div>
           
        </div>
    </div>


)    
}