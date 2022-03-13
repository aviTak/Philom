import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop';
import List from './components/list';
import Upload from './components/upload';
import Header from './components/header';
import Toggle from './components/toggle';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />  
      <Switch>  
        <Route path = '/video'>
          <Toggle file = 'VIDEO' />
          <main>
            <Upload file = 'VIDEO' />
            <List file = 'VIDEO' />
          </main>
        </Route>
        <Route path = '/'>
          <Toggle file = 'EXCEL' />
          <main>
            <Upload file = 'EXCEL' />
            <List file = 'EXCEL' />
          </main>
        </Route>
      </Switch>
    </Router>          
  );
}

export default App;
