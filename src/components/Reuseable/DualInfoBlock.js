import React from 'react'
import Heading from './Heading';
import { Link } from 'gatsby';

const DualInfoBlock = ({heading, img }) => {   
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ullam, harum id, alias quasi exercitationem nemo quidem eum tempora totam eaque cum, voluptates minima excepturi officiis culpa officia qui. Veniam deleniti nam sed dolore voluptates molestias rerum laudantium consequuntur exercitationem nemo placeat enim ullam, reprehenderit quae natus, vero tempore necessitatibus.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ullam, harum id, alias quasi exercitationem nemo quidem eum tempora totam eaque cum, voluptates minima excepturi officiis culpa officia qui. Veniam deleniti nam sed dolore voluptates molestias rerum laudantium consequuntur exercitationem nemo placeat enim ullam, reprehenderit quae natus, vero tempore necessitatibus.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ullam, harum id, alias quasi exercitationem nemo quidem eum tempora totam eaque cum, voluptates minima excepturi officiis culpa officia qui. Veniam deleniti nam sed dolore voluptates molestias rerum laudantium consequuntur exercitationem nemo placeat enim ullam, reprehenderit quae natus, vero tempore necessitatibus.
                        </p>
                    </div>
                    <div className="col-4 mx-auto"> 
                        <div className="card bg-dark">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-success">Just Click Photo</h5>
                                <p className="card-text text-white">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ullam, harum id, alias quasi exercitationem nemo quidem eum tempora totam eaque cum, voluptates minima excepturi officiis culpa officia qui. 
                                </p>
                                <Link to="/team/">
                                    <button className="btn btn-warning btn-block">
                                    {heading}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DualInfoBlock;  