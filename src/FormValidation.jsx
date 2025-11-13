export default function FormValidation(){
    const name=useRef()
    const email=useRef()
    const message=useRef()
    const acceptAllConditions=useRef()


    const submitForm =(e)=>{
        e.preventDefault();
    }
return(
    <div>
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
    </div>

)    
}