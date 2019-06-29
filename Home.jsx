Home = React.createClass({

	getInitialState: function() {
		return { default: true };
	},

	render: function() {

		return (

			<div id="wrapper" className="is-preload">

					<section className="intro">
						<header>
							<h1>Michael Sutyak</h1>
							<p>Product and Growth specialist <a href="mailto:msutyak@gmail.com">Consulting or Advising Inquiry</a><br/><a href="https://formatagency.co">Format Agency: Content-as-a-Service SEO</a></p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img src="images/hero-image-michael-sutyak.jpg" alt="" /></span>
						</div>
					</section>

					<section id="first">
						<header>
							<h2>Delivering exceptional Product and Growth work</h2>
						</header>
						<div className="content">
							<p><strong>Cutting edge.  Exceptional quality.  Results driven.</strong> I am an experienced product and growth specialist that has worked with some of the brightest names in technology, including Airbnb, Uber and Google.  I've taken those learnings and applied them to companies in several different industries to scale products, deliver exceptional product experiences and battle the <a href="https://andrewchen.co/the-law-of-shitty-clickthroughs/" target="_blank">the law of shitty clickthroughs</a>. </p>
							<span className="image main"><img src="images/sub-image-michael-sutyak.png" alt="" /></span>
						</div>
					</section>

					<section>
						<header>
							<h2>Available products and services</h2>
						</header>
						<div className="content">
							<p><strong>Specialized solutions</strong> focused on your products and business. I provide a variety of services to help you reach your goals.</p>
							<ul className="feature-icons">
								<li className="icon fa-laptop">Product building</li>
								<li className="icon fa-bolt">Strategic planning</li>
								<li className="icon fa-signal">User & revenue growth</li>
								<li className="icon fa-gear">Analytics insights</li>
								<li className="icon fa-map-marker">Goaling</li>
								<li className="icon fa-code">Tech recommendations</li>
							</ul>
							<p>Before diving in I will do a deep analysis of your products and problem set and determine the best course of action.</p>
						</div>
					</section>

					<section>
						<header>
							<h2>Past Projects</h2>
						</header>
						<div className="content">
							<p><strong>Proven examples</strong> of past work that have led to successes and reached goals.</p>

								<section>
									<header>
										<h3>Airbnb Experiences</h3>
										<p>Focused on incubation categories for the Experiences business unit at Airbnb: Concerts, Adventures, Social Impact, Surfing (WSL).  Building features and running experiments that increased weekly bookings and booking value.</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="images/gallery/fulls/01.jpg" className="landscape"><img src="images/gallery/thumbs/concerts-tile.jpg" alt="" /></a>
											<a href="images/gallery/fulls/02.jpg"><img src="images/gallery/thumbs/thewav.jpg" alt="" /></a>
											<a href="images/gallery/fulls/03.jpg"><img src="images/gallery/thumbs/Live-From-New-York-No-Text.jpg" alt="" /></a>
											<a href="images/gallery/fulls/04.jpg" className="landscape"><img src="images/gallery/thumbs/surf.jpg" alt="" /></a>
										</div>
									</div>
								</section>

								<section>
									<header>
										<h3>Tubi TV</h3>
										<p>Product lead focused on building out web, mobile and OTT applications, growing out viewer base and driving revenues through growth activity.</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="images/gallery/fulls/05.jpg" className="landscape"><img src="images/gallery/thumbs/tubi-1.png" alt="" /></a>
											<a href="images/gallery/fulls/06.jpg"><img src="images/gallery/thumbs/tubi-3.jpg" alt="" /></a>
											<a href="images/gallery/fulls/07.jpg"><img src="images/gallery/thumbs/tubi-2.jpg" alt="" /></a>
										</div>
									</div>
								</section>

								<section>
									<header>
										<h3>Crowdsets</h3>
										<p>Connecting musical artists with their fans, helping to design tours and maximize ticketing revenue.</p>
									</header>
									<div className="content">
										<div className="gallery">
											<a href="images/gallery/fulls/08.jpg" className="portrait"><img src="images/gallery/thumbs/crowdsets-2.jpg" alt="" /></a>
											<a href="images/gallery/fulls/09.jpg" className="portrait"><img src="images/gallery/thumbs/crowdsets-3.jpg" alt="" /></a>
											<a href="images/gallery/fulls/10.jpg" className="landscape"><img src="images/gallery/thumbs/crowdsets-1.jpg" alt="" /></a>
										</div>
									</div>
								</section>

						</div>
					</section>

					<section>
						<header>
							<h2>Let's work together</h2>
						</header>
						<div className="content">
							<p><strong>Let's get started.</strong> Reach out and share your company goals.  I will draw up a proposal that is tailored to your needs.</p>
							<ul className="actions">
								<li><a href="mailto:msutyak@gmail.com" className="button primary large">Get Started</a></li>
								<li><a href="#" className="button large">Learn More</a></li>
							</ul>
						</div>
					</section>

					<section>
						<header>
							<h2>Get in touch</h2>
						</header>
						<div className="content">
							<p><strong>Or share your thoughts</strong> with the form below and I'll do my best to get back to you as soon as possible.</p>
							<form>
								<div className="fields">
									<div className="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div className="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div className="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="button primary" /></li>
								</ul>
							</form>
						</div>
						<footer>
							<ul className="items">
								<li>
									<h3>Email</h3>
									<a href="#">msutyak@gmail.com</a>
								</li>
								<li>
									<h3>Location</h3>
									<span>San Francisco</span>
								</li>
								<li>
									<h3>Elsewhere</h3>
									<ul className="icons">
										<li><a href="https://twitter.com/msutyak" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="https://facebook.com/michael.sutyak" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
										<li><a href="https://instagram.com/msutyak" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
										<li><a href="https://linkedin.com/in/michaelsutyak" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
										<li><a href="https://github.com/msutyak" className="icon fa-github"><span className="label">GitHub</span></a></li>
									</ul>
								</li>
							</ul>
						</footer>
					</section>

					<div className="copyright">&copy; michaelsutyak.com All rights reserved. Thanks for visiting my corner of the web.</div>

			</div>

		);

	}


});