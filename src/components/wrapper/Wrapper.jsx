import './Wrapper.css'

export default function Container({children}){
    return <>
        <div className="container">
            <div className="app-container">
                {children}
            </div>
        </div>
    </>
}