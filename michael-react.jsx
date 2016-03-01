if (Meteor.isClient) {

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
  //  ReactDOM.render(<App />, document.getElementById("render-target"));
    ReactDOM.render(
    <SocialMenu items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('socialmenu')
	);
	ReactDOM.render(<Typing />, document.getElementById("typing"));
	ReactDOM.render(<SelectedItem />, document.getElementById("item-test"));

  ReactDOM.render(<ProfImage />, document.getElementById("profImage"));

  });
}
