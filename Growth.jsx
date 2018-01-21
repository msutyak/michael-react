Growth = React.createClass({

	getInitialState: function() {
		return { default: true };
	},

	render: function() {

		return (

						<div id="wrapper">


					<header id="header" className="alt style2">
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


					<section id="banner" className="style2">
						<div className="inner">
							<span className="image">
								<img src="images/pic07.jpg" alt="" />
							</span>
							<header className="major">
								<h1>Growth Consulting</h1>
							</header>
							<div className="content">
								<p>Let me help you with your Growth strategy.  <br />Modern techniques to maximize customer and revenue growth. </p>
							</div>
						</div>
					</section>

					<div id="main">

							<section id="one">
								<div className="inner">
									<header className="major">
										<h2>Proven Strategies That Work</h2>
									</header>
									<p>I have worked at or with some of the most successfully scaled companies in the world (Airbnb, Uber, Facebook), as well as numerous early and mid-stage start-up companies.  Throughout my 10+ year career, I have developed proven strategies that work for a wide variety of products.  I constantly update my process and make sure my strategies and knowledge are up to date.  If your company is interested in my services as a consultant, please reach out to me at <a href="mailto:msutyak@gmail.com">msutyak@gmail.com</a> and we can discuss details.</p>
								</div>
							</section>

							<section id="two" className="spotlights">
								<section>
									<a href="generic.html" className="image">
										<img src="images/pic08.jpg" alt="" data-position="center center" />
									</a>
									<div className="content">
										<div className="inner">
											<header className="major">
												<h3>User Acquisiton and Engagement</h3>
											</header>
											<p>Paid and Organic techniques that will drive qualified users and keep them engaged with your product.  Learn about all of the top tools and channels, and how to get the most out of them.</p>
											<ul className="actions">
												<li><a href="mailto:msutyak@gmail.com" className="button">Contact</a></li>
											</ul>
										</div>
									</div>
								</section>
								<section>
									<a href="generic.html" className="image">
										<img src="images/pic09.jpg" alt="" data-position="top center" />
									</a>
									<div className="content">
										<div className="inner">
											<header className="major">
												<h3>Conversion and Revenue</h3>
											</header>
											<p>Improve your conversion rates and increase your revenues with both product and marketing strategies.  Let me teach you how to take advantage of your inbound traffic.</p>
											<ul className="actions">
												<li><a href="mailto:msutyak@gmail.com" className="button">Contact</a></li>
											</ul>
										</div>
									</div>
								</section>
								<section>
									<a href="generic.html" className="image">
										<img src="images/pic10.jpg" alt="" data-position="25% 25%" />
									</a>
									<div className="content">
										<div className="inner">
											<header className="major">
												<h3>Marketing Analytics</h3>
											</header>
											<p>Track all of your marketing activity and set up attribution that works.  Derive actionable insights that inform your growth strategy.  I can help you create dashboards, write queries and set up experiments that are well grounded in data science techniques.</p>
											<ul className="actions">
												<li><a href="mailto:msutyak@gmail.com" className="button">Contact</a></li>
											</ul>
										</div>
									</div>
								</section>
							</section>

							<section id="three">
								<div className="inner">
									<header className="major">
										<h2>Speed Up Your Growth</h2>
									</header>
									<p>Invest in your Growth strategy today.  Make huge gains in the future.  Email me and let's get strated.</p>
									<ul className="actions">
										<li><a href="mailto:msutyak@gmail.com" className="button next">Get Started</a></li>
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