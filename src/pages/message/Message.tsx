import { FormInterface } from "../../service/interface/contact";
import {Link} from 'react-router-dom'

const Message = ({ message }: FormInterface[]) => {
    console.log('messages:', message)
    return (
        <div>
            <ul>
                {
                    message.map((mess: FormInterface, index: number) => (
                        <li>
                            {index} -
                            {mess.title},
                            {mess.message},
                            {mess.email}
                            <button><Link to={`/message/${mess.email}`}>See</Link></button>
                       </li> 
                    ))
                }
            </ul>
            
        </div>
    );
};

export default Message;