import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';

const render = Component => {
  ReactDOM.render( < Component / >, document.getElementById('root')
)
  ;
};

render(App);
if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
