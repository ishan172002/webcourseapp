import React from 'react'

const Heading = ({title}) => {
    return (
        <div className="row">
            <div className="col text-center-mb-4">
                <h4 className="display-3 text-center">{title}</h4>
            </div>
        </div>
    )
}


export default  Heading;
/*
this page throught to the InfoBlock.js page and then we call it there
and then we can call it with <Heading title={heading}>

Then agian the InfoBlock.js call in index.js that our main file show there and we call the title
*/