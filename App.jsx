// App component - represents the whole app
App = React.createClass({
    
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
          <Growth />
          <MachineLearning />
          <Algorithms />

	      </div>

      );
    }
});