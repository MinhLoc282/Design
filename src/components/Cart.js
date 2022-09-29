import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft, faSync, faTrash } from '@fortawesome/free-solid-svg-icons'
import pic from '../assets/placeholder-product.jpg'

const Cart = () => {
  return (
    <>
        <section className="cart text-center">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 mb-3 mb-m-1 text-md-left"><a href="/catalog"><FontAwesomeIcon icon={faArrowLeft}/> Continue Shopping</a></div>
					<div className="col-sm-6 text-md-right"><a href="/catalog" className="btn btn-primary btn-lg pl-5 pr-5">Checkout</a></div>
				</div>
				<div className="row">
					<div className="col-12 text-center">
						<h2 className="mt-5 mb-2">Your Shopping Cart</h2>
						<p className="mb-5"><span className="primary-color">3</span> Items in your cart</p>
						<table id="cart" className="table table-condensed" >
							<thead>
								<tr>
									<th style={{width:'60%'}}>Product</th>
									<th style={{width:'12%'}}>Price</th>
									<th style={{width:'10%'}}>Quantity</th>
									<th style={{width:'16%'}}></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td data-th="Product">
										<div className="row">
											<div className="col-md-3 text-left">
												<img src={pic} alt="" className="img-fluid"/>
											</div>
											<div className="col-md-9 text-left mt-sm-2">
												<h4>Product Name</h4>
												<p>York &amp; Smith</p>
											</div>
										</div>
									</td>
									<td data-th="Price">$49.00</td>
									<td data-th="Quantity">
										<input type="number" className="form-control text-center" value="1"/>
									</td>
									<td className="actions" data-th="">
										<div className="text-right">
											<button className="btn btn-white btn-md mb-2"><FontAwesomeIcon icon={faSync}/></button>
											<button className="btn btn-white btn-md mb-2"><FontAwesomeIcon icon={faTrash}/></button>
										</div>
									</td>
								</tr>
								<tr>
									<td data-th="Product">
										<div className="row">
											<div className="col-md-3 text-left">
												<img src={pic} alt="" className="img-fluid"/>
											</div>
											<div className="col-md-9 text-left mt-sm-2">
												<h4>Product Name</h4>
												<p>York &amp; Smith</p>
											</div>
										</div>
									</td>
									<td data-th="Price">$49.00</td>
									<td data-th="Quantity">
										<input type="number" className="form-control text-center" value="1"/>
									</td>
									<td className="actions" data-th="">
										<div className="text-right">
											<button className="btn btn-white btn-md mb-2"><FontAwesomeIcon icon={faSync}/></button>
											<button className="btn btn-white btn-md mb-2"><FontAwesomeIcon icon={faTrash}/></button>
										</div>
									</td>
								</tr>
								<tr>
									<td data-th="Product">
										<div className="row">
											<div className="col-md-3 text-left">
												<img src={pic} alt="" className="img-fluid"/>
											</div>
											<div className="col-md-9 text-left mt-sm-2">
												<h4>Product Name</h4>
												<p>York &amp; Smith</p>
											</div>
										</div>
									</td>
									<td data-th="Price">$49.00</td>
									<td data-th="Quantity">
										<input type="number" className="form-control text-center" value="1"/>
									</td>
									<td className="actions" data-th="">
										<div className="text-right">
											<button className="btn btn-white btn-md mb-2"><FontAwesomeIcon icon={faSync}/></button>
											<button className="btn btn-white btn-md mb-2"><FontAwesomeIcon icon={faTrash}/></button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="float-right text-right">
							<h4>Subtotal:</h4>
							<h1>$147.00</h1>
							<p>(Excluding Delivery)</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 mb-3 mb-m-1 text-md-left"><a href="catalog.html"><FontAwesomeIcon icon={faArrowLeft}/> Continue Shopping</a></div>
					<div className="col-sm-6 text-md-right"><a href="catalog.html" className="btn btn-primary btn-lg pl-5 pr-5">Checkout</a></div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Cart