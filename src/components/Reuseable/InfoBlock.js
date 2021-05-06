import React from 'react'
import Heading, { } from "./Heading";
import {Link} from "gatsby"

const InfoBlock = ({heading}) =>{
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} /> 
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ullam, harum id, alias quasi exercitationem nemo quidem eum tempora totam eaque cum, voluptates minima excepturi officiis culpa officia qui. Veniam deleniti nam sed dolore voluptates molestias rerum laudantium consequuntur exercitationem nemo placeat enim ullam, reprehenderit quae natus, vero tempore necessitatibus.
                        </p>
                        <Link to="/about/" />
                        <button className="btn btn-warning btn-lg">
                        {heading}
                        </button>
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default InfoBlock;