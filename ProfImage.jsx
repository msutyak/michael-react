ProfImage = React.createClass({

	getInitialState: function() {
	        return { position: 0 }
	},

	clicked: function(index){
		this.setState({position: this.state.position + i * 100});
	},

	render: function() {
		var from = this.state.position;
		var to = this.props.position;

		this.timer = animate(500, function(fraction) {

			var position = lerp(from, to, fraction);
			if (fraction >= 1) {
				this.setState({
					value: to
				});
				this.timer = null;
			} else {
				this.setState({position: position});
			}

		});

		return ( <span className="major"><img src="/images/profile-pic.png" height="100px"></span> );

	}


});