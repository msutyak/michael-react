// App component - represents the whole app

App = React.createClass({

    render() {
      return (
        <div>
        <div class="app-root">

          <div class="container">
            {this.props.yield}
          </div>

        </div>
        </div>

      );
    }
});