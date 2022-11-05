import React from 'react'
import '../assets/css/card.css';

const TeamCard = (props) => {
    return (
        <>
        {
            props.formData !== null ? (<div className="card" style={{
                width: "15rem", 
                background: "none", 
                display: "flex",
                alignItems:"center",
                borderRadius:"5%",
                color: "#fff",
                marginRight:"2%",
                marginBottom:"2%",
                fontSize:"14px",
                border:"none"
                }}>
                    <img className="card-img-top" src={props.img} alt="Card cap" style={{borderRadius:"5%", backgroundSize:"cover", width:"90%", 
                    marginTop:"5%"
                    }} />
                    <div className="card-body" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingBottom:"0",
                        paddingRight:"5px"
                    }}>
                        <div className="card-text" >
                            <h5>
                            Name : {props.formData?.Name}
                            </h5>
                        </div>
                        
                    </div>
        
                    <div className="card-body" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingBottom:"0",
                        paddingTop:"0"
                    }}>
                    </div>
        
                    <div className="card-body" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingTop:"10px"
                    }}>
                        <div className="card-text">
                            <a href={props.formData?.InstagramUrl}>
                                <span className='bi bi-instagram'></span>
                            </a>
                        </div>
                        <div className="card-text">
                            <a href={props.formData?.LinkedinUrl}>
                            <span className='bi bi-linkedin'></span>
                            </a>
                        </div>
                        <div className="card-text">
                            <a href={props.formData?.TwitterUrl}>
                            <span className='bi bi-twitter '></span>
                            </a>
                        </div>
                    </div>
                </div>):(null)
        }
        </>
    )
}

export default TeamCard;