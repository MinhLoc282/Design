import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <section className="header text-center">
			<nav className="navbar navbar-expand-lg navbar-light navbar-custom">
				<div className="container"><a className="navbar-brand" href="/"><span className="logo-icon"></span> Venus</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse pull-xs-right justify-content-end" id="navbar-1">
						<ul className="navbar-nav mt-2 mt-md-0">
							<li className="nav-item active"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></li>
							<li className="nav-item dropdown mega-menu"><a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop </a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<div className="container">
										<div className="divider"></div>
										<div className="row">
											<div className="col-md-2">
												<h6 className="text-uppercase">Women's</h6>
												<ul className="nav flex-column">
													<li className="nav-item"><a className="nav-link active" href="/">Active</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
												</ul>
											</div>
											<div className="col-md-2">
												<h6 className="text-uppercase">Men's</h6>
												<ul className="nav flex-column">
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
												</ul>
											</div>
											<div className="col-md-2">
												<h6 className="text-uppercase">Girl's</h6>
												<ul className="nav flex-column">
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
												</ul>
											</div>
											<div className="col-md-2">
												<h6 className="text-uppercase">Boy's</h6>
												<ul className="nav flex-column">
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
													<li className="nav-item"><a className="nav-link" href="/">Link item</a></li>
												</ul>
											</div>
											{/* <div className="col-md-4">
												<h6 className="text-uppercase">Featured Items</h6>
												<div className="row">
													<div className="col-6 text-center"><a href="item.html">
														<img src="images/placeholder-product.jpg" alt="" className="img-fluid mt-2 mb-3"></a>
														<h6 className="mb-0"><a href="item.html">Product Name</a></h6>
														<p><span className="emphasis">$49.00</span></p>
														<a href="#" className="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
												<p></div>
													<div className="col-6 text-center"><a href="item.html">
														<img src="images/placeholder-product.jpg" alt="" className="img-fluid mt-2 mb-3"></a>
														<h6 className="mb-0"><a href="item.html">Product Name</a></h6>
														<p><span className="emphasis">$49.00</span></p>
														<a href="#" className="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
												<p></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages </a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="/">Homepage</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="/catalog">Catalog</a>
									<a className="dropdown-item" href="/item">Item Detail</a>
									<a className="dropdown-item" href="/cart">Cart</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="/contact">Contact</a></div>
							</li>


							<li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
							
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faUser} /> </a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="/login">Login</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="/">Logout</a></div>
							</li>

							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faShoppingCart}/> <span className="badge badge-pill badge-primary">3</span></a>
								<div className="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbarDropdown">
									<h6>3 Items <span className="emphasis">$147.00</span></h6>
									<div className="dropdown-divider"></div>
									{/* <ul className="shopping-cart-items">
										<li className="row">
											<div className="col-3">
												<img src="images/placeholder-product.jpg" width="60"/>
											</div>
											<div className="col-9">
												<h6><a href="item.html">Product Name</a></h6>
												<span className="text-muted">1x</span>
												<span className="emphasis">$49.00</span></div>
										</li>
										<li className="row">
											<div className="col-3">
												<img src="images/placeholder-product.jpg" width="60"/>
											</div>
											<div className="col-9">
												<h6><a href="item.html">Product Name</a></h6>
												<span className="text-muted">1x</span>
												<span className="emphasis">$49.00</span></div>
										</li>
										<li className="row">
											<div className="col-3">
												<img src="images/placeholder-product.jpg" width="60"/>
											</div>
											<div className="col-9">
												<h6><a href="item.html">Product Name</a></h6>
												<span className="text-muted">1x</span>
												<span className="emphasis">$49.00</span></div>
										</li>
									</ul> */}
									
									<a href="/cart" className="btn btn-lg btn-full-width btn-primary" style={{margin: 0}}>View Cart</a></div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</section>
    )
};

export default Header;
