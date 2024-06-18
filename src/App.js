import React from 'react';
import './App.css';
import '../src/Style/style.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import ShoppingCart from './Projects/ShoppingCart/Components/ShoppingCart';
import BlinkingPraragraph from './Projects/BlinkingParagraph/Components/BlinkingParagraph';
import QuizApp from './Projects/QuizApp/Components/QuizApp';

function App() {

  const initialState = null;

  const [selectedProject, setSelectedProject] = React.useState(initialState);

  return (
    <div className="App">
      <div id="pageWrapper">
        <Header selectedProject = {selectedProject} setSelectedProject = {setSelectedProject}/>
        <div id="page-content">
        {
          selectedProject?
            selectedProject.Title === "Shopping Cart"?
              <ShoppingCart />
            :
            selectedProject.Title === "Blinking Paragraph"?
              <BlinkingPraragraph />
            :
            selectedProject.Title === "Quiz App"?
              <QuizApp />
            :
            ''
          :
            <Home setSelectedProject = {setSelectedProject} />
        } 
        </div>   
      </div>
      <Footer />
    </div>
  );
}

export default App;
