
Main = React.createClass({
    
    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: (index) => {
        this.setState({focused: index});
    },


    render() {
      return (

	      <div>
	      	<Landing onFocusChanged={this.clicked} focused={this.state.focused} />
          <Writing />
          <MachineLearning />
          <Algorithms />

	      </div>

      );
    }
});
