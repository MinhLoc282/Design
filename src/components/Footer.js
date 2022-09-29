import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
    	<footer className="footer">
			<div className="container">
				<div className="row mb-5 text-center">
					<div className="col-sm-6 col-md-3 pt-2">
						<h5>EXCLUSIVE SERVICES</h5>
						<ul className="nav-footer">
							<li className="nav-item"><a className="nav-link" href ="/">Venus Services</a></li>
							{/* <!-- <li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li> --> */}
						</ul>
					</div>
					<div className="col-sm-6 col-md-3 pt-2">
						<h5>NEED HELP?</h5>
						<ul className="nav-footer">
							<li className="nav-item"><a className="nav-link" href="/">Shipping Services</a></li>
							<li className="nav-item"><a className="nav-link" href="/">Shipping Services</a></li>
							<li className="nav-item"><a className="nav-link" href="/">Payment Options</a></li>
							{/* <!-- <li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li> --> */}
						</ul>
					</div>
					<div className="col-sm-6 col-md-3 pt-2">
						<h5>THE COMPANY</h5>
						<ul className="nav-footer">
							<li className="nav-item"><a className="nav-link" href="/">About Venus</a></li>
							<li className="nav-item"><a className="nav-link" href="/">Privacy & Cookies</a></li>
							{/* <!-- <li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li> --> */}
						</ul>
					</div>
					<div className="col-sm-6 col-md-3 pt-2">
						<h5>FIND US ON</h5>
						{/* <!-- <ul className="nav-footer">
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
							<li className="nav-item"><a className="nav-link" href="#">Link Item</a></li>
						</ul> --> */}
						<ul className="social">
							<li><a href="/" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
							<li><a href="/" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
							{/* <!-- <li><a href="#" title="Google+"><i className="fab fa-google"></i></a></li>
							<li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li> --> */}
							<li><a href="/" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
							<div className="clear"></div>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="container-fluid">
				<div className="divider"></div>
			</div>
			
			<div className="container">
				<div className="row">
					<div className="col-md-6 text-center text-md-left mt-2 mb-3 pt-1">
						<p className="copyright">Copyright &copy 2022; Example. Theme by <a href="/">Venus team</a>.</p>
					</div>
					{/* <div className="col-md-6 text-center text-md-right mb-4">
						<ul className="social">
							<li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
							<li><a href="#" title="Google+"><i className="fab fa-google"></i></a></li>
							<li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
							<li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
							<div className="clear"></div>
						</ul>
					</div> */}
				</div>
			</div>
		</footer>	
    )
}

export default Footer