import React from 'react'

const Sale = () => {
    return (
        <>
            <div className="divider"></div>
            <section className="cta text-center">
                <div className="container">
                    <h3 className="mt-0 mb-4">Sign up now to save 10% on your first order</h3>
                    <form className="subscribe">
                        <div className="form-group row pt-3">
                            <div className="col-sm-8 mb-3">
                                <input type="text" className="form-control" id="inputName" placeholder="Your Name"/>
                            </div>
                            <div className="col-sm-4">
                                <button type="submit" className="btn btn-lg btn-outline-primary">Sign me up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Sale