import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
			{/* <!-- <div id="map"></div>
			<script src="js/maps.js"></script>
			<script async defer
				src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBptaDKT_ntSoNEytCnSang5JenaNAj_Us&callback=initMap">
			</script> --> */}
			<div className="container">
				<div className="row contact-details">
					<div className="col-sm-8 text-center text-md-left">
						<h3 className="mb-4">Ask us a question</h3>
						{/* <!-- <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis velit vestibulum massa sollicitudin auctor. Cras ac venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi sem ornare quam, sed ultricies mi nisl sit amet purus.</p> --> */}
						<form className="contact-form mt-4">
							<div className="row">
								<div className="col-md-5">
									<input type="text" className="form-control mb-4" placeholder="Name" value="Your name"/>
								</div>
								<div className="col-md-5">
									<input type="text" className="form-control mb-4" placeholder="Email address" value="Email address"/>
								</div>
								<br />
							</div>
							<div className="row">
								<div className="col-md-10">
									<textarea className="form-control mb-4" rows="5" style={{height: '10em !important'}}>Your Message</textarea>
									<br />
									<button type="submit" className="btn btn-outline-primary btn-lg mb-4">Send Message</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-sm-4 mb-5 text-center text-md-left">
						<h3>Contact</h3>
						<h4 className="pt-4">Email</h4>
						<p>hello@example.com</p>
						<h4 className="pt-2">Phone</h4>
						<p>+111 234 567 89</p>
						<h4 className="pt-2">Address</h4>
						<p>So 1, Vo Van Ngan, Linh Chieu, Thu Duc, Thanh pho Ho Chi Minh
							<br />Viet Nam
						</p>
						{/* <!-- <ul className="social">
							<li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
							<li><a href="#" title="Google+"><i className="fab fa-google"></i></a></li>
							<li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
							<li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
							<div className="clear"></div>
						</ul> --> */}
					</div>
				</div>
			</div>
		</section>
    )
}

export default Contact