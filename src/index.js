import Template from '@templates/Template.js'; //Se utiliza alias que se encuentra en el webpack.config
import github from '@images/github.png';
import '@styles/main.css';
import '@styles/vars.styl';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();