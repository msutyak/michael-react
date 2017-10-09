
AirbnbIcons = React.createClass({

	getInitialState: function() {
		return { icon_id: 0};
	},

	onHover: function(event) {
		this.setState({ icon_id: event.currentTarget.dataset.id }, () => console.log(icon_id));
	},

	render: function() {

		return (

		<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionLeave={true} transitionEnterTimeout={600} transitionAppearTimeout={600} transitionLeaveTimeout={300}>

					
				    <ul className="airbnb-icons">{ airbnbiconslist.map((i) => {
                            return (
                            <li key={i.id}>
                            	<a href={i.url}>
	                            	<span className={i.class} 
	                            		id={i.id} 
	                            		data-id={i.data} 
	                            		onMouseOver={this.onHover}>
	                            	</span>
                            	</a>
                            </li>
                            )
                        }) }

                    </ul>
                    <p className="airbnb-icon-text">{airbnbiconslist[this.state.icon_id].name}</p>


		</ReactCSSTransitionGroup>

		);

	}

});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var airbnbiconslist = [

    { data: '0', url: '#airbnb-musings', id: 'lightbulb', class: 'fa fa-lightbulb-o fa-5x', name: 'Airbnb Musings'},
    { data: '1', url: '#ml', id: 'gears', class: 'fa fa-gears fa-5x', name: 'Recommendations & Machine Learning'},
    { data: '2', url: '#design', id: 'cubes', class: 'fa fa-cubes fa-5x', name: 'Design'},
];

AirbnbLanding = React.createClass({

	render: function() {
    	return (

    		<section id="header">
				<div className="inner">

					<ProfImage />
					<AirbnbIcons />
					
					<ul className="actions">
						<li><a href="#airbnb-musings" className="button scrolly">Explore</a></li>
					</ul>
					
				</div>
			</section>
    	);
    }

});