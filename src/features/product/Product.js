import React from 'react'
import pic from '../../assets/placeholder-product.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({name, price, pic}) => {
    // const {productId} = match.params
    // console.log(productId)
    return (
        <div className="col-sm-6 col-md-3 col-product">
			<figure>
				<img className="rounded-corners img-fluid" src={pic} alt="" width="240" height="240"/>
		        <figcaption>
				    <div className="thumb-overlay">
                        <a href="/item" title="More Info">
				            <FontAwesomeIcon icon={faSearchPlus}/>
					    </a>
                    </div>
			    </figcaption>
			</figure>
			<h4><a href="/item">Product Name</a></h4>
			<p><span className="emphasis">$19.00</span></p>
		</div>
    )
}

export default Product