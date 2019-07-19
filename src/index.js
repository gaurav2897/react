// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import photomine from './photomine.jpg'
import Counter from './components/counter';
//import serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
//function me()
//{return (<img src={photomine} alt="me"></img>);}
/*class App extends React.Component{
  render(){
   return (
    
    <div className="App">
              
        <p>
          <button >chal hutt!!</button>
                    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  
          Edit and save to reload.
        </p>
        
      
    </div>
      );
}
} */
 
ReactDOM.render(<Counter />, document.getElementById('root'));
