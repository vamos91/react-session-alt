import { FormInterface } from "../../service/interface/contact";
import { useParams } from "react-router-dom";

const MessageDetail = ({ message }: FormInterface[]) => {
    const {email} = useParams()
    console.log('message detail:', message)
    const res = message.find((mess: FormInterface) => mess.email === email)
    console.log(res.email)
    return (
        <div>
            
        </div>
    );
};

export default MessageDetail;