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

FlowRouter.route( '/growth', {
  name: 'growth',
  action() {
    ReactLayout.render( App, { yield: <Growth /> } );
  }
});

FlowRouter.route( '/netflix', {
  name: 'netflix',
  action() {
    ReactLayout.render( App, { yield: <Netflix /> } );
  }
});



FlowRouter.route( '/pizza', {
  name: 'pizza',
  action() {
    ReactLayout.render( App, { yield: <Pizza /> } );
  }
});
