SocialMenu = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },

    componentDidMount: function() {
        MichaelReactStore.addChangeListener(this.state.focused);
    },

    clicked: function(index){

        // The click handler will update the state with
        // the index of the focused menu entry

        this.setState({focused: index});
    },

    render: function() {

        // Here we will read the items property, which was passed
        // as an attribute when the component was created

        var self = this;

        // The map method will loop over the array of menu entries,
        // and will return a new array with <li> elements.

        return (
            <div>
                <ul className="testblocks">{ this.props.items.map(function(m, index){
        
                    var style = '';
        
                    if(self.state.focused == index){
                        style = 'focused';
                    }
        
                    // Notice the use of the bind() method. It makes the
                    // index available to the clicked function:
        
                    return <li key={index} className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
        
                }) }
                        
                </ul>

                

                <p>Selected: {this.props.items[this.state.focused]}</p> 

                <ItemDetails item={ this.props.items[this.state.focused] } />

            </div>
        );

    }
});

ItemDetails = React.createClass({

    render: function() {

        return (
            <div>{this.props.item}</div>
        );
    }

});
