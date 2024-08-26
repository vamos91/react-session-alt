import { useState } from "react";
import {FormInterface} from '../../service/interface/contact'

const Contact = ({handleParentMessage}: {handleParentMessage: (form: FormInterface) => void}) => {
    const [form, setForm] = useState<FormInterface>({
        title: '',
        message: '',
        email: ''
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form) 
        handleParentMessage(form)
    }

    const handleChange = (e: any) => {
        const { value, name } = e.target
        setForm({...form, [name]: value})
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="">Title</label>
                <input type="text"
                    name="title"
                    onChange={handleChange}
                />
                <label htmlFor="">Message</label>
                <textarea rows={30}
                    name="message"
                    onChange={handleChange}
                ></textarea>
                <label htmlFor="">email</label>
                <input type="email"
                    name="email"
                    onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;