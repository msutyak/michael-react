SkillsHeader = React.createClass({

	render: function() {

		return (

			<div>
			<header className="major">
				<h2>Development</h2>
			</header>
			<p>Using modern web and mobile technologies to build beautiful applications.</p>
			</div>
		);

	}

});

SkillsImage = 


Skills = React.createClass({

	render: function() {

		return (

			<section id="three" className="main style1 special">
				<div className="container">
					<SkillsHeader/>
					<div className="row 150%">
						
						{/*

						<div className="4u 12u$(medium)">
							<span className="image fit"><img src="images/meteor-logo-blended.png" height="200" alt="" /></span>
							<h3>Meteor.js</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>

					*/}
					<div className="center-image">
						<div className="4u 12u$(medium)">
							<span className="image fit"><img src="images/react-logo-blended.png" height="200" alt="" /></span>
							<h3>React.js</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
					</div>
					{/*
						<div className="4u$ 12u$(medium)">
							<span className="image fit"><img src="images/laravel-logo-blended.png" height="200" alt="" /></span>
							<h3>Laravel</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul className="actions">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
					*/}
					</div>
				</div>
			</section>

		);

	}
});

