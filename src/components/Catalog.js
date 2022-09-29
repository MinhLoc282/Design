import React from 'react'
import Product from "../features/product/Product"

const Catalog = () => {
  return (
    <>
      <div className="container">
			<div className="row">
				<div className="col-md-4 col-lg-3 sidebar-filter">
					<h3 className="mt-5 mb-5">Showing <span className="primary-color">12</span> Products</h3>
					<h6 className="text-uppercase">Categories</h6>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="category-1"/>
							<label className="custom-control-label" for="category-1">Accessories</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="category-2"/>
							<label className="custom-control-label" for="category-2">Coats &amp; Jackets</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="category-3"/>
							<label className="custom-control-label" for="category-3">Hoodies &amp; Sweatshirts</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="category-4"/>
							<label className="custom-control-label" for="category-4">Jeans</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="category-5"/>
							<label className="custom-control-label" for="category-5">Shirts</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="category-6"/>
							<label className="custom-control-label" for="category-6">Underwear</label>
						</div>
					</div>
					<div className="divider"></div>
					<h6 className="text-uppercase">Size</h6>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="filter-size-1"/>
							<label className="custom-control-label" for="filter-size-1">X-Small</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="filter-size-2"/>
							<label className="custom-control-label" for="filter-size-2">Small</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="filter-size-3"/>
							<label className="custom-control-label" for="filter-size-3">Medium</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="filter-size-4"/>
							<label className="custom-control-label" for="filter-size-4">Large</label>
						</div>
					</div>
					<div className="filter-checkbox">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="filter-size-5"/>
							<label className="custom-control-label" for="filter-size-5">X-Large</label>
						</div>
					</div>
					<div className="divider"></div>
					<h6 className="text-uppercase">Price</h6>
					<div className="price-filter">
						<input type="text" className="form-control" value="50" id="price-min"/>
						<input type="text" className="form-control" value="150" id="price-max"/>
					</div>
					<br />
					<br />
					<input id="ex2" type="text" className="slider " value="" data-slider-min="10" data-slider-max="200" data-slider-step="5" data-slider-value="[50,150]" />
					<div className="divider"></div>
						
					<a href="/" className="btn btn-lg btn-full-width btn-primary mt-2">Update Results</a></div>
				
				<div className="col-md-8 col-lg-9">
					<section className="products">
						<div className="container">
							<div className="row sorting mb-5">
								<div className="col-12">
									<div className="dropdown float-left">
										<label className="mr-2">Sort by:</label>
										<a className="btn btn-lg btn-white dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Relevance <span className="caret"></span></a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="#">Relevance</a>
											<a className="dropdown-item" href="/">Price Descending</a>
											<a className="dropdown-item" href="/">Price Ascending</a>
											<a className="dropdown-item" href="/">Best Selling</a></div>
									</div>
									<div className="btn-group float-right ml-3">
										<button type="button" className="btn btn-lg btn-white"><span className="fa fa-arrow-left"></span></button>
										<button type="button" className="btn btn-lg btn-white"><span className="fa fa-arrow-right"></span></button>
									</div>
									<div className="dropdown float-right">
										<label className="mr-2">View:</label>
										<a className="btn btn-lg btn-white dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">12 <span className="caret"></span></a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="#">12</a>
											<a className="dropdown-item" href="/">24</a>
											<a className="dropdown-item" href="/">48</a>
											<a className="dropdown-item" href="/">96</a></div>
									</div>
								</div>
							</div>
							<div className="row">
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
								<Product/>
							</div>
							<div className="row sorting mb-5">
								<div className="col-12"><a className="btn"><i className="fas fa-arrow-up mr-2"></i> Back to top</a>
									<div className="btn-group float-right ml-3">
										<button type="button" className="btn btn-lg btn-white"><span className="fa fa-arrow-left"></span></button>
										<button type="button" className="btn btn-lg btn-white"><span className="fa fa-arrow-right"></span></button>
									</div>
									<div className="dropdown float-right">
										<label className="mr-2">View:</label>
										<a className="btn btn-white btn-lg dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">12 <span className="caret"></span></a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="/">12</a>
											<a className="dropdown-item" href="/">24</a>
											<a className="dropdown-item" href="/">48</a>
											<a className="dropdown-item" href="/">96</a></div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
    </>
  )
}

export default Catalog