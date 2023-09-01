import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Overview from './component/overview';
import BackgroundColor from './component/background';
import Service from './component/service';
import Contact from './component/contact';
import Form from './component/form';
import Footer from './component/footer';
function App() {
  return (
    <div >
      <Home/>
      <Overview/>
      <Service/>
      <Contact/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
