import React from 'react'
import pic from '../assets/placeholder-product.jpg'
import RelativeProduct from './RelativeProduct'

const Item = () => {
	// const {ItemId} = match.param
  return (
    <>
        <section className="featured-block text-center">
			<div className="container">
				<div className="row">
					<div className="col-md-6 text-center">
						<div className="product-image mt-3">
							<img className="img-fluid" src={pic}/>
						</div>
						<div className="product-thumbnails"><a href="/">
							<img className="mt-2 mr-2 img-fluid" src={pic} /></a>
							<a href="/">
								<img className="mt-2 mr-2 img-fluid" src={pic} /></a>
							<a href="/">
								<img className="mt-2 mr-2 img-fluid" src={pic} /></a>
							<a href="/">
								<img className="mt-2 mr-2 img-fluid" src={pic} /></a>
							<a href="/">
							<img className="mt-2 mr-2 img-fluid" src={pic} /></a>
                        </div>
					</div>
					<div className="col-md-6 mt-5 mt-md-2 text-center text-md-left">
						<h2 className="mb-3 mt-0">Product Name</h2>
						<p className="lead mt-2 mb-3 primary-color">$49.00</p>
						<h5 className="mt-4">Description</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis velit vestibulum massa sollicitudin auctor. Cras ac venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi sem ornare quam, sed ultricies mi nisl sit amet purus.</p>
						<p>Suspendisse potenti. Nunc in libero luctus, sagittis leo sit amet, volutpat lacus. Quisque a porta risus. Integer aliquet nibh vitae vestibulum accumsan</p>
						<h5 className="mt-5">Care Instructions</h5>
						<p>Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
						<select className="custom-select form-control mt-4 mb-4">
							<option selected>Size</option>
							<option value="1">Small</option>
							<option value="2">Medium</option>
							<option value="3">Large</option>
						</select>
						{/* <!--Quantity: <input type="text" className="form-control quantity mb-4" name="" value="1">--> */}
						<a href="/" className="btn btn-full-width btn-lg btn-outline-primary">Add to cart</a>
                    </div>
				</div>
			</div>
		</section>
		
		<div className="divider"></div>
		
		<section className="products text-center">
			<div className="container">
				<h3 className="mb-4">Related Products</h3>
				<div className="row">
					<RelativeProduct />
				</div>
			</div>
		</section>
    </>
  )
}

export default Item