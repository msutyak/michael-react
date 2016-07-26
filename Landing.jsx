ProfImage = React.createClass({

	getInitialState: function() {
		return { showIcons: false };
	},

	onClick: function() {

		if(this.state.showIcons == true) {
			this.setState({ showIcons: false });
		}
		else {
			this.setState({ showIcons: true });
		}
	},

	onHover: function() {
		this.setState({ showIcons: true });
	},

	render: function() {

		return (
			<div>
			<span className="major">
				<img src="/images/profile-pic.png" height="100" onClick={this.onClick} onMouseOver={this.onHover} className="prof-image"/>
			</span>
			
			<div className="small_caps" key="small_caps">
			{ this.state.showIcons ? <SocialIcons /> : null }
			</div>
			</div>

		);
	}

});

SocialIcons = React.createClass({

	render: function() {

		return (

		<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionLeave={true} transitionEnterTimeout={600} transitionAppearTimeout={600} transitionLeaveTimeout={300}>
			{/*	<div className="small_caps" key="small_caps"> */}
					
				    <ul className="icons">{ icons.map(function(i){
                            return <li key={i.id}><a href={i.url} id={i.id} target="_blank"><i className={i.class}></i></a></li>

                        }) }

                    </ul>

			{/*	</div> */}
		</ReactCSSTransitionGroup>

		);

	}

});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var icons = [

    { url: 'mailto:msutyak@gmail.com', id: 'email', class: 'fa fa-envelope fa-lg'},
    { url: 'https://www.linkedin.com/in/michaelsutyak', id: 'linkedin', class: 'fa fa-linkedin-square fa-lg'},
    { url: 'https://twitter.com/msutyak', id: 'twitter', class: 'fa fa-twitter fa-lg'},
    { url: 'https://www.facebook.com/michael.sutyak', id: 'facebook', class: 'fa fa-facebook fa-lg'},
    { url: 'https://instagram.com/msutyak', id: 'instagram', class: 'fa fa-instagram fa-lg'},
    { url: 'https://medium.com/@msutyak', id: 'medium', class: 'fa fa-medium fa-lg'},
    { url: 'https://github.com/msutyak', id: 'github', class: 'fa fa-github fa-lg'},

];


Typing = React.createClass({

  getInitialState: function() {
      return { textIndex: 0 };
  },

  next: function() {
    // increment the textIndex by one
    this.setState({ textIndex: this.state.textIndex + 1});
    //this.setState({visible: false});
  },

  render: function() {
    const docs = '#one';
    return (

		<div>
		      <div className="TypistExample">

		        <Typist className="TypistExample-header" avgTypingSpeed={15000} startDelay={1000} cursor={{show: false}} onTypingDone={this.next}>
		          { typedtext.map(function(t){
		          	return <h1 className={t.id} key={t.id}><a target="_blank" href={t.link}>{t.text}</a></h1>
		          }) }
		        </Typist>

		        {/**
		        <p>{this.state.textIndex}</p>
		        <p>{typedtext[this.state.textIndex].text}</p>
				**/}
		      </div>
		</div>

    );
  }

});


var typedtext = [
	{id: 'home', text: 'Michael Sutyak', link: 'https://www.michaelsutyak.com'},
	{id: 'growth', text: 'Growth Marketing', link: 'https://www.mobilegrowthsage.com'},
	{id: 'development', text: 'Development', link: 'https://github.com/msutyak'},
	{id: 'analtyics', text: 'Analytics', link: 'https://github.com/msutyak'},

];

Landing = React.createClass({

	render: function() {
    	return (

    		<section id="header">
				<div className="inner">

					<ProfImage />
					<Typing />

					{/**
					<SocialMenu onFocusChanged={this.props.onFocusChanged} items={ ['Home', 'Services', 'About', 'Contact us']} />
					**/}
					
					<ul className="actions">
						<li><a href="#growth" className="button scrolly">Explore</a></li>
					</ul>
					
				</div>
			</section>
    	);
    }

});