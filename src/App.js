import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Toggle, ToggleRender } from './components/Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Toggle>
              {({ open, onToggle }) => (
                  <article>
                      {open ? 'Article' : null}
                      <button onClick={onToggle} style={{background: 'green'}}>Green</button>
                  </article>
              )}
          </Toggle>
    
          <Toggle>
              {({ open, onToggle }) => (
                  <section>
                      <button onClick={onToggle} style={{background: 'blue'}}>Blue</button>
                      {open ? 'Section' : null}
                  </section>
              )}
          </Toggle>
          
          <ToggleRender
            render={({ open, onToggle }) => (
                <section>
                    <button onClick={onToggle} style={{background: 'blue'}}>Blue</button>
                    {open ? 'Section' : null}
                </section>
            )}
          >
              someText
          </ToggleRender>
      </div>
    );
  }
}

export default App;
