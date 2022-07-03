import React, { Component } from 'react'

const Newsitem= (props)=>{
        let {title, description, imageURL,newsURL,date,source} = props;
        return (
             <div className="my-3">
                <div className="card" >
                <span style={{transform: "translate(-25%, -50%)"}} className="position-absolute top-0 badge rounded-pill bg-danger" >{props.source}</span>
                    <img src={imageURL} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">Last updated {props.date}</small></p>
                            <a href={newsURL} target="_blank" className="btn btn-sm "><strong>Read More >>></strong></a>
                        </div>
                </div>
            </div>
            
        )
    }


export default Newsitem
