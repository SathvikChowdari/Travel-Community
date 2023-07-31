import details from "./GroupDetails";
import { Link } from "react-router-dom";

const GroupTemplate = (props) => {
    const { message } = props;
    console.log(message);
    const  detail  = details.find(x => x.name === message);
    return (
     
        <div className="GroupTemplate">
        <Link to={`/group/${detail.name}`}>
            <h1>{detail.name}</h1>
                <h3>{detail.members}</h3>
                </Link>
       </div>
    
    );
}

export default GroupTemplate;