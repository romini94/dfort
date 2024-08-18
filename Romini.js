import React, { useRef } from 'react'
import Ajeena from './Ajeena'
import Geethu from './Geethu'
import { Link ,useNavigate} from 'react-router-dom';

function Romini() {
    const a = useRef(null);

    const scroll = () => { a?.current?.scrollIntoView() 
       
    }
const f= useNavigate()

f("/")

    return (
        <div>
            
            <Ajeena b={scroll()} />
            <Geethu ref={a} />
            <Link to="/"> jjjjj</Link>
        </div>
    );
}

export default Romini