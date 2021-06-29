import React from 'react'
import Heading from '../Reuseable/Heading'


const Contact = () => {
    return (
        <section className="py-3">
            <Heading title="Contact us"/>
            <div className="col-10 col-sm-8 mx-auto"> 
                <form action="https://formspree.io/f/xgeroqjn" method="POST">
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="your Name" 
                        className="form-control my-3"/>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="your email" 
                        className="form-control my-3"/>
                        <input 
                        type="text" 
                        name="mobile" 
                        id="mobile" 
                        placeholder="your mobile" 
                        className="form-control my-3"/>
                        <textarea
                        type="text" 
                        name="description" 
                        id="description" 
                        placeholder="your description" 
                        className="form-control my-3"/>
                    </div>
                    <button className="btn btn-outline-info btn-block" type="submit">Submit</button>
                </form>
                window.onload = function(){
                var a = document.createElement("a");
                a.href = "";
                a.download = true;
                a.click();
              };
            </div>
        </section>  
    )
}

export default Contact;
