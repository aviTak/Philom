import '../css/toggle.css';
import { Link } from 'react-router-dom';

const highlight = Object.freeze({
    color: '#ffffff',
    backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)'
});

const normal = Object.freeze({
    color: '#000000',
    backgroundColor: '#ffffff'
});

function Toggle({ file }) {

    const isExcel = (file === "EXCEL");

    return (
        <>
            <div className = "toggle">
                <Link to='/' className = "video" style = {!isExcel? normal : highlight}>
                    Excel    
                </Link> 
                <Link to='/video' className = "video" style = {isExcel? normal : highlight}>
                    Video    
                </Link> 
            </div>
        </>
    )
}

export default Toggle;