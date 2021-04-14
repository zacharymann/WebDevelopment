// REACT BASICS

// EXAMPLE OF A CLASS COMPONENT
/*
class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
*/

// FUNCTION COMPONENTS
// Example 1
// Arrow function expressions are commonly used for React Function Components
// Function names are TitleCased in React
const SamWilson = () => {
    return `Anthony Mackie`;
  }
  
  // Example 2
  // Function Component that returns an HTML element
  const BuckyBarnes = () => {
    return <h1>Sebastian Stan</h1>;
  }
  
  // Example 3
  const Characters = () => {
    // JSX only allows for a single element (AKA Parent Element) to be returned from a Component
    // return <h1>Zemo</h1> <h1>Sharon Carter</h1>;
    // A single parent element can be used to render a component with multiple child elements nested inside of it
    return (
      <div>
        <h1>Zemo</h1>
        <h1>Sharon Carter</h1>
      </div>
    );
  }
  
  // Example 4
  const ThemeSong = () => {
    /*
    Example of Emmet Abbreviation
    div>ol>li*2
    */
    return (
      <div>
        <ol>
          <li>Louisiana Hero</li>
          <li>By Henry Jackman</li>
        </ol>
      </div>
    );
  }
  
  // Example 5
  const SelfClosing = () => {
    // return <hr>;
    // In JSX, self closing tags have to be written in the following format: <tagname/>
    return <hr />;
  }
  
  // Example 6
  const DaysUntilFinale = () => {
    // JavaScript can be written like normal before the RETURN keyword in a Function Component
    const finale = 23;
    const today = 12;
    return (
      // JavaScript can be written like normal here as well
      <div>
        {/* This is a comment */}
        {/* Must use curly brackets to write JavaScript anywhere inside the parent JSX element */}
        <h1>Days Until Finale: {finale - today}</h1>
      </div>
    );
  }
  
  // Example 7
  // "App" is the standard name used for the top level component that is passed into the render method
  const App = () => {
    return (
      <div>
        <SamWilson />
        <BuckyBarnes />
        <Characters />
        <ThemeSong />
        <SelfClosing />
        <DaysUntilFinale />
      </div>
    );
  }
  
  
  // RENDER METHOD
  /*
  Syntax Example
  
  ReactDOM.render(
    <ComponentName/>,
    document.getElementById('root')
    );
  */
  
  ReactDOM.render(
    // <SamWilson />,
    // <BuckyBarnes />,
    // <Characters />,
    // <ThemeSong />,
    // <SelfClosing />,
    // <DaysUntilFinale />,
    <App />,
    document.getElementById('root')
  );
  
  // JSX (JavaScript Syntax Extension)
  // JSX generates React "Elements" with HTML looking code that written in JavaScript
  