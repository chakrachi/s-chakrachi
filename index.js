import App from './components/App.html';
// import Rainbow from './components/Rainbow.html';

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'chakra chi',  chakrapoints: [
    "Root",
    "Sacral",
    "Solar Plexus",
    "Heart",
    "Throat",
    "Third Eye",
    "Crown"
  ]},
})

// const RainbowComponent = new Rainbow({
//     target: document.querySelector('#root'),
//     data: {
      
//     }
//   })