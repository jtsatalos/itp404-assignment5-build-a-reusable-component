import React from 'react';
import './App.css';
import HasUpper from './HasUpper';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
 
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div>
        
        <input value={this.state.name} onChange={this.handleChange} />
        <br />

        <div>
          <HasUpper text={this.state.name} />
        </div>
        <br />
        <HasUpper text={this.state.name}>
          {
            (HasUpper) => {
              return (
                <p className={HasUpper != "Weak" ? "danger" : undefined}>
                  {HasUpper}
                </p>
              );
            }
          }
        </HasUpper>
        <br />
        <br />
        <p>Developers could use this tool as a way of ensuring passwords have some element of security. 
          This could be enhanced by making it so that it also requires a certain amount of words or 
          special characters which could be other prototypes or combined with this one. 
          My motivation for this component is enforcing password security 
          (I just went through training for my job so I am seeing how important password safety is). 
          I named the component this way because it is clear what is it does (questions if it has an uppercase) and you mentioned in class 
          that you should keep the name of the component vague so I left it as text</p>
      </div>
    );
  }
}