import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider
      serverUrl="https://kmafws0klpxe.usemoralis.com:2053/server" 
      appId="61O5M27WwjMMsagEplYBjUG4IXZUf5pspwn0SGay"
  >
    <App />
  </MoralisProvider>
  ,
  document.getElementById('root')
);

reportWebVitals();
