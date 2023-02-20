
const Error = () => {

    const CloseAlert = (e) => {
        e.target.parentElement.remove()
    }
     
    
    return (
        <div id="error-box" className="NewAlert">
            <i className="ion ion-md-close"  onClick={CloseAlert}/>
            <div className="face2">
                <div className="eye" />
                <div className="eye right" />
                <div className="mouth sad" />
            </div>
            <div className="shadow move" />
            <div className="message">
                <h1 className="alert">أنت غير مسجل دخول .. هل تريد <a href="#">تسجيل دخولك فى مجتمع سيما فور أب</a> ؟</h1>
                <em />
            </div>
        </div>
    )
}


export default Error