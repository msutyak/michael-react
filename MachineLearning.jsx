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
						<h2>Machine Learning</h2>
					</header>
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
					                      <span className={i.class}
					                            id={i.id}
					                            data-id={i.data} 
					                            onClick={this.onClick} 
					                            onMouseOver={this.onHover}>
					                      </span>
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

    { data: '0', id: 'p0', class: 'icon style1 major fa-ship'},
    { data: '1', id: 'p1', class: 'icon style2 major fa-home'},
    { data: '2', id: 'p2', class: 'icon style3 major fa-book'},
    { data: '3', id: 'p3', class: 'icon style4 major fa-group'},
    { data: '4', id: 'sochi', class: 'icon style5 major fa-flag'},
    { data: '5', id: 'decision_trees', class: 'icon style6 major fa-tree'},

];

var content = [
	{ url: 'https://github.com/msutyak/machine_learning/tree/master/P0_Titanic_Survival_Exploration', title: 'Titanic Survival Exploration', body: 'Decision functions that attempt to predict survival outcomes from the 1912 Titanic disaster based on each passenger’s features, such as sex and age.', id: 'p0'},
	{ url: 'https://github.com/msutyak/machine_learning/tree/master/P1_Predicting_Boston_Housing_Prices', title: 'Predicting Boston Housing Prices', body: 'Applying basic machine learning concepts on data collected for housing prices in the Boston, Massachusetts area to predict the selling price of a new home', id: 'p1'},
	{ url: 'https://github.com/msutyak/machine_learning/tree/master/P2_Build_a_Student_Intervention_System', title: 'Building a Student Intervention System', body: 'Modeling the factors that predict how likely a student is to pass their high school final exam, by constructing an intervention system that leverages supervised learning techniques. Finding the most effective model that uses the least amount of computation costs to save on the budget. Analysis of the dataset on student performance and a developed model that will predict the likelihood that a given student will pass, quantifying whether an intervention is necessary.', id: 'p0'},
	{ url: 'https://github.com/msutyak/machine_learning/tree/master/P3_Creating_Customer_Segments', title: 'Creating Customer Segments', body: 'Applying unsupervised learning techniques on product spending data collected for customers of a wholesale distributor in Lisbon, Portugal to identify customer segments hidden in the data. Explored the data by selecting a small subset to sample and determined if any product categories highly correlate with one another. Preprocessed the data by scaling each product category and then identifying (and removing) unwanted outliers.  Applied PCA transformations to the data and implemented clustering algorithms to segment the transformed customer data. Lastly, compared the segmentation found with an additional labeling and considered ways this information could assist the wholesale distributor with future service changes.', id: 'p0'},
	{ url: 'https://github.com/msutyak/machine_learning/tree/master/Sochi%20Olympics%20Numpy%20and%20Pandas%20Python%20Analysis', title: 'Sochi Olympics', body: 'Using Numpy and Pandas with Python to uncover insights about the medal winners at the Sochi Olympics.', id: 'p0'},
	{ url: 'https://github.com/msutyak/machine_learning/tree/master/Decision%20Trees', title: 'Decision Tree Modeling', body: 'Decision Tree Modeling using Python.', id: 'p0'},
]

