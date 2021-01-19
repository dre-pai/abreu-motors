import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Nav/Nav';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  componentDidMount() {
    document
      .getElementById('container')
      .setAttribute('style', `min-height: ${window.innerHeight}px`);

    window.addEventListener('resize', () =>
      document
        .getElementById('container')
        .setAttribute('style', `min-height: ${window.innerHeight}px`)
    );
  }

  render() {
    return (
      <Container id="container">
        <Navigation />
        <div className="page-content">
          <Routes />
        </div>
        <Footer />
      </Container>
    );
  }
}

export default App;
