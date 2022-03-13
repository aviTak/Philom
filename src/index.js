import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'; 
import { cache } from './config/cache';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'https://philom.glitch.me/'
  }),
  cache
});


ReactDOM.render(
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
