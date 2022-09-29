import React from 'react'
import RelativeProduct from './RelativeProduct'

const Home = () => {
  return (
    <>
    <div id="carousel" className="carousel slide" data-ride="carousel">
		
    {/* <script>
      $('.carousel').carousel({
        interval: 200
      })
    </script> */}
    
    {/* <!-- Carousel Indicators --> */}
    <ul className="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" className="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
    </ul>
  
    {/* <!-- Carousel --> */}
    <div className="carousel-inner">
    
      {/* <!--Text only with background image--> */}
      <div className="carousel-item active" style={{background: "url(images/cover-bg-1.jpg) center"}}>
        <div className="container slide-textonly">
          <div>
            <h1>York &amp; Smith</h1>
            <p className="lead">Spring/Summer 2018 Collection</p>
            <a href="/" className="btn btn-outline-secondary">View Collection</a>
          </div>
        </div>
      </div>
      
      {/* <!--Text with image--> */}
      <div className="carousel-item">
        <div className="container slide-withimage">
          <div className="description">
            <h1>York &amp; Smith</h1>
            <p className="lead">Spring/Summer 2018 Collection</p>
             <a href="/" className="btn btn-outline-secondary">View Collection</a>
           </div>
          <div className="slide-image">
            <img src="images/placeholder-shoes.png" style={{width: "80%"}}/>
          </div>
        </div>
      </div>
      
      {/* <!--Text only with background image--> */}
      <div className="carousel-item" style={{background: "url(images/cover-bg-2.jpg) center"}}>
        <div className="container slide-textonly">
          <div>
            <h1>York &amp; Smith</h1>
            <p className="lead">Spring/Summer 2018 Collection</p>
            <a href="/" className="btn btn-outline-secondary">View Collection</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    <section className="collections text-center ">
			<div className="container-fluid">
				<div className="row">
					<div className="collection col-md-6 alt-background">
						<div className="container container-right text-center">
							<div>
								<h1>Women's</h1>
								<p className="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" className="btn btn-outline-secondary">Browse Women's</a>
							</div>
						</div>
					</div>
					<div className="collection col-md-6 bg-secondary inverted">
						<div className="container container-left text-center">
							<div>
								<h1>Men's</h1>
								<p className="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" className="btn btn-outline-white">Browse Men's</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="featured-block text-center">
			<div className="container">
				<div className="row justify-center">
					<div className="col-md-6 text-center">
						<img className="mt-4 mb-4 img-fluid" src="images/placeholder-jacket.png" style={{width: "100%"}}/>
					</div>
					<div className="col-md-6 text-center text-md-left">
						<h2 className="mb-3">Spring/Summer Collection 2018</h2>
						<p className="lead mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
						<a href="/" className="btn btn-md btn-outline-primary mt-3">Shop Now</a>
					</div>
				</div>
			</div>
		</section>
		
		<section className="products text-center">
			<div className="container">
				<h3 className="mb-4">Featured Products</h3>
				<div className="row">
					<RelativeProduct />
				</div>
			</div>
		</section>
    </>
  )
}

export default Home