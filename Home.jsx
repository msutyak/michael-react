Home = React.createClass({

	getInitialState: function() {
		return { default: true };
	},

	render: function() {

		return (

			<div id="wrapper">

				
					<header id="header" className="alt">
						<a href="/" className="logo"><strong>Michael Sutyak</strong> <span>Growth Lead, Airbnb</span></a>
						<nav>
							<a href="#menu">Menu</a>
						</nav>
					</header>

				
					<nav id="menu">
						<ul className="links">
							<li><a href="index.html">Home</a></li>
							<li><a href="landing.html">Landing</a></li>
							<li><a href="generic.html">Generic</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
						<ul className="actions vertical">
							<li><a href="#" className="button special fit">Get Started</a></li>
							<li><a href="#" className="button fit">Log In</a></li>
						</ul>
					</nav>

				
					<section id="banner" className="major">
						<div className="inner">
							<header className="major">
								<h1>Hi, my name is Michael Sutyak</h1>
							</header>
							<div className="content">
								<p>I am a Growth Lead at Airbnb working on the Airbnb Concerts team.<br />  I also provide consulting services in Growth, Product, Analytics and <br />Career Development in Technology.
								</p>
								<ul className="actions">
									<li><a href="#one" className="button next scrolly">Services</a></li>
								</ul>
							</div>
						</div>
					</section>

				
					<div id="main">

						
							<section id="one" className="tiles">
								<article>
									<span className="image">
										<img src="images/pic01.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Growth Consulting</a></h3>
										<p>Strategies That Scale</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Mobile Growth Sage</a></h3>
										<p>Your Mobile Growth Strategy - Handled</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Product Consulting</a></h3>
										<p>Create Products That Users Love</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic04.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Analytics & Machine Learning</a></h3>
										<p>Understand Your Data and Derive Actionable Insights</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic05.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Interview Coaching</a></h3>
										<p>Prepare for Interviews in Tech</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic06.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="landing.html" className="link">Full Career Services</a></h3>
										<p>Access to Insiders, Information, Strategies and More</p>
									</header>
								</article>
							</section>

						
							<section id="two">
								<div className="inner">
									<header className="major">
										<h2>About Michael Sutyak</h2>
									</header>
									<p>Michael is a Product and Growth specialist currently working at Airbnb as Growth Lead and a Technology Consultant.  He has worked in the Technology industry in San Francisco for the past 10+ years.  Specialties include international growth, creative mobile and web-based product and feature building, automation and analytics, optimizing funnel flows, new user experience, and revenue driving activities.</p>
									<ul className="actions">
										<li><a href="#one" className="button next scrolly">Get Started</a></li>
									</ul>
								</div>
							</section>

					</div>

				
					<section id="contact">
						<div className="inner">
							<section>
								<form method="post" action="#">
									<div className="field half first">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field half">
										<label for="email">Email</label>
										<input type="text" name="email" id="email" />
									</div>
									<div className="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="6"></textarea>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Send Message" className="special" /></li>
										<li><input type="reset" value="Clear" /></li>
									</ul>
								</form>
							</section>
							<section className="split">
								<section>
									<div className="contact-method">
										<span className="icon alt fa-envelope"></span>
										<h3>Email</h3>
										<a href="#">msutyak@gmail.com</a>
									</div>
								</section>
								<section>
									<div className="contact-method">
										<span className="icon alt fa-phone"></span>
										<h3>Phone</h3>
										<span>(000) 000-0000 x12387</span>
									</div>
								</section>
								<section>
									<div className="contact-method">
										<span className="icon alt fa-home"></span>
										<h3>Address</h3>
										<span>888 Brannan Street<br />
										San Francisco, CA 94103<br />
										United States of America</span>
									</div>
								</section>
							</section>
						</div>
					</section>

				
					<footer id="footer">
						<div className="inner">
							<ul className="icons">
								<li><a href="https://twitter.com/msutyak" className="icon alt fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
								<li><a href="https://facebook.com/michael.sutyak" className="icon alt fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
								<li><a href="https://instagram.com/msutyak" className="icon alt fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
								<li><a href="https://github.com/msutyak" className="icon alt fa-github" target="_blank"><span className="label">GitHub</span></a></li>
								<li><a href="https://linkedin.com/in/michaelsutyak/" className="icon alt fa-linkedin" target="_blank"><span className="label">LinkedIn</span></a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; 2018 Michael Sutyak</li><li>Technology Consultant</li>
							</ul>
						</div>
					</footer>

			</div>

		);

	}


});