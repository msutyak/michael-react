FlowRouter.route( '/', {
  name: '/',
  action() {
    ReactLayout.render( App, { yield: <Main /> } );
  }
});

{/*
FlowRouter.route('/.well-known/acme-challenge/Q94TSNcmMvq5bNiwyYfeCuOtjRTwl9ALNLK45wWtylo', {
  name: 'Letsencrypt',
  action() {
    ReactLayout.render(App, { yield: <Letsencrypt />});
  }
});
*/}

FlowRouter.route( '/airbnb', {
  name: 'airbnb',
  action() {
    ReactLayout.render( App, { yield: <Airbnb /> } );
  }
});


FlowRouter.route( '/pizza', {
  name: 'pizza',
  action() {
    ReactLayout.render( App, { yield: <Pizza /> } );
  }
});
