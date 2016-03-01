Typing = React.createClass({

  render() {
    const docs = '//github.com/jstejada/react-typist';
    return (
      <div className="TypistExample">
        <Typist className="TypistExample-header" avgTypingSpeed={40} startDelay={2000}
          onTypingDone={this.onHeaderTyped}>
          <a href={docs}>React Typist</a>
        </Typist>
        <div className="TypistExample-content">
          {this.state.renderMsg ? (
            <Typist className="TypistExample-message" delayGenerator={this.delayGen}
              cursor={{hideWhenDone: true}}>
              * Easy to style
              <br />
              * Easy to customize
              <br />
              <span>* <a href={docs} className="flash">docs</a></span>
              <br />
              {''}
            </Typist>
          ) : null }
        </div>
      </div>
    );
  }

});