import React from 'react'

const Login = () => {
    return (
        <section className="collections text-center">
            <div className="main">
                {/* <!-- Sing in  Form --> */}
                <section className="sign-in">
                    <div className="container_sign">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure>
                                    <img src="images/logo-store.jpg" alt="sing up image"/>
                                </figure>
                                <a href="/register" className="signup-image-link">Create an
                                    account</a>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">Sign in</h2>
                                <form method="" action="" className="register-form"
                                    id="login-form">
                                    <div className="form-group">
                                        <label for="username"><i
                                            className="zmdi zmdi-account material-icons-name"></i></label> <input
                                            type="text" name="username" id="username"
                                            placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password"><i className="zmdi zmdi-lock"></i></label> <input
                                            type="password" name="password" id="password"
                                            placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me"
                                            className="agree-term" /> <label for="remember-me"
                                            className="label-agree-term"><span><span></span></span>Remember
                                            me</label>
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin"
                                            className="form-submit" value="Log in" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Login