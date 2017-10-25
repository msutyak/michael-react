MachineLearning = React.createClass({

	getInitialState: function() {
		return { project_id: 0};
	},

	onClick: function(event) {
		this.setState({ project_id: event.currentTarget.dataset.id });

		(function($) {
		    $.fn.goTo = function() {
		        $('html, body').animate({
		            scrollTop: $(this).offset().top + 'px'
		        }, 'fast');
		        return this; // for chaining...
		    }
		})(jQuery);

		$('#ml').goTo();

	},

	onHover: function(event) {
		this.setState({ project_id: event.currentTarget.dataset.id });
	},

	render: function() {


		return (

			<div>
			<section id="ml" className="main style2">
				<div className="container">
					<center>
					<header className="major">
						<h2>Recommendations & Machine Learning</h2>
					</header>
					<p></p>
					</center>
					<div className="row 150%">
						<div className="6u 12u$(medium)">

						{/*

							<ul className="major-icons">{ icons.map(function(i){
                            return <li key={i.id}><span className={i.class} id={i.id} data-id={i.data} onClick={this.onClick} onMouseOver={this.onHover}></span></li>

		                        }) }

		                    </ul>
		                 


		                    <ul className="major-icons">{ var self = this; icons.map(function(i){ return <li key={i.id}><span className={i.class} id={i.id} data-id={i.data} onClick={self .onClick} onMouseOver={self .onHover}></span></li> }) } </ul>
					*/}

					          <ul className="major-icons">{ icons.map((i) => {
					            return (
					              <li key={i.id}>
					              		  <a href={i.url}>
					                      <span className={i.class}
					                            id={i.id}
					                            data-id={i.data} 
					                            onClick={this.onClick} 
					                            onMouseOver={this.onHover}>
					                      </span>
					                      </a>
					                    </li>
					              )
					            }) }

					        </ul>

						</div>
						<div className="6u$ 12u$(medium)">
							<header className="major">
								<h2><a href={content[this.state.project_id].url}>{content[this.state.project_id].title}</a></h2>
							</header>
							<p>{content[this.state.project_id].body}</p>
						</div>
					</div>
				</div>
			</section>
			</div>
		);

	}

});

var icons = [

    { data: '0', id: 'p0', class: 'icon style1 major fa-film', url: 'https://github.com/msutyak/ApacheSpark_ML_Movie_Recommendation'},
    { data: '1', id: 'p1', class: 'icon style2 major fa-umbrella', url: 'https://github.com/msutyak/machine_learning'},

];

var content = [
	{ url: 'https://github.com/msutyak/ApacheSpark_ML_Movie_Recommendation', title: 'Machine Learning Movie Recommendations with ApacheSpark', body: 'Using Apache Spark and Alternating Least Squares method to provide Movie Recommendations', id: 'p0'},
	{ url: 'https://github.com/msutyak/machine_learning', title: 'Machine Learning Nanodegree', body: 'Applying varied Machine Learning concepts (Supervised Learning, Unsupervised Learning, and Reinforcement Learning) on a variety of projects and problems (provided by Udacity Machine Learning Nanodegree)', id: 'p1'},
]