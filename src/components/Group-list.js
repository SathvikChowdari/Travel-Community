import GroupTemplate from "./GroupTemplate";
import details from "./GroupDetails";
import { Route } from "react-router-dom";
import { useState } from 'react';
const GroupList = () => {
    const [text, setText] = useState('');
    const [filteredData, setFilterData] = useState([]);
   
    const handleChange = (event) => {
        setText(event.target.value);
         setFilterData  (
        details.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        )
    )
    };
  
    return (
        <>
            <h1>Groups</h1>
         <div className='textInput'>
          <input  className="customInput" type="text" value={text} onChange={handleChange} />
                {/* <TextInput text={text} setText={setText} /> */}
            </div>
            {
            filteredData.length>0 && 
                
                filteredData.map(detail => {
                    
                    console.log(detail.name);
                    return (
                        < GroupTemplate message={detail.name} />);
                      
                }
                )
            }
            {
                filteredData.length==0 &&

            
                details.map(detail => {
                    
                    console.log(detail.name);
                    return (
                        < GroupTemplate message={detail.name} />);
                }
            
                
                )
            }
            

        </>
    );
}

export default GroupList;