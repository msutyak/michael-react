SkillsHeader = React.createClass({

	render: function() {


		return (

			<div>
			<header className="major">
				<h2>{this.props.skillsets.header}</h2>
			</header>
			<p>{this.props.skillsets.subheader}</p>
			</div>
		);

	}

});

SkillsImage = React.createClass({

	render: function() {
		return (

			<div>
		{/*	<span className="image fit">{this.props.skillset.image}</span>
			<span className={this.props.skillset.image}></span> */}
			</div>
		);
	}
});

SkillsDescription = React.createClass({

	render: function() {
		return (

			<div>
			<h3>React.js</h3>
			<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
			</div>
		);

	}
});

SkillsAction = React.createClass({

	render: function() {
		return (

			<div>
			<ul className="actions">
				<li><a href="#" className="button">More</a></li>
			</ul>			
			</div>

		);
	}
});

SkillsDetails = React.createClass({

	render: function() {

/*
		details.map(function(detail) {
			if({detail.id} == this.props.id) {

			}

		});
*/


		return (




			<div className="row 150%">

								<div className="center-image">
						<div className="4u 12u$(medium)">



			<SkillsImage/>
			<SkillsDescription/>
			<SkillsAction/>
									</div>
					</div>
			</div>
		);
	}

});




Skills = React.createClass({

	getInitialState: function() {
      return { id: 'default' };
  	},

  	//var category = this.props.category;

	render: function() {

		var index = getIndex(this.state.id, skillsets, 'id');

		return (

			<section id="three" className="main style1 special">
				<div className="container">
					
					<SkillsHeader skillsets={skillsets[index]}/>
					<SkillsDetails id={this.state.id}/>


				</div>
			</section>

		);

	}
});

var skillsets = [
  {id: 'default', header: 'Overview',  subheader: 'Growth Marketing, Development, Analytics, Product Sense', image: 'icon major accent5 fa-bolt'},
  {id: 'growth', header: 'Growth Marketing', subheader: 'Mobile Growth Sage (mobilegrowthsage.com) provides modern Silicon Valley growth strategies for scaling your business.', image: ''},
  {id: 'development', header: 'Development', subheader: 'Using modern web and mobile technologies to build beautiful applications.', image: ''},
  {id: 'analytics', header: 'Analytics', subheader: 'Marketing and product analytics', image: ''},
];

var details = [
  {id: 'default', name: 'Growth Marketing',  description: 'Growth Marketing, Development, Analytics, Product Sense', image: 'icon major accent5 fa-line-chart'},
  {id: 'defualt', name: 'Development', description: 'Mobile Growth Sage (mobilegrowthsage.com) provides modern Silicon Valley growth strategies for scaling your business.', image: 'icon major accent5 fa-code'},
  {id: 'default', name: 'Analytics', description: 'Using modern web and mobile technologies to build beautiful applications.', image: 'icon major accent5 fa-gear'},
  {id: 'growth', name: 'Reports', description: 'Marketing and product analytics', image: ''},
  {id: 'growth', name: 'Consulting', description: 'Marketing and product analytics', image: ''},
  {id: 'growth', name: 'Contracting', description: 'Marketing and product analytics', image: ''},
  {id: 'development', name: 'React.js', description: 'Marketing and product analytics', image: ''},
  {id: 'development', name: 'Meteor', description: 'Marketing and product analytics', image: ''},
  {id: 'development', name: 'Laravel', description: 'Marketing and product analytics', image: ''},
  {id: 'analytics', name: 'Python', description: 'Marketing and product analytics', image: ''},
  {id: 'analytics', name: 'SQL/Hive', description: 'Marketing and product analytics', image: ''},
  {id: 'analytics', name: 'Dashboards/KPIs', description: 'Marketing and product analytics', image: ''}
];


