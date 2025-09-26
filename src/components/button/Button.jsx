import './Button.css'

export default function Button({icon}){
    return <>
        <button className='circle button'>
            <img className="icon" src={icon} alt="icon" />
        </button>
    </>
}