import PropTypes from "prop-types";
import { useState } from "react";


const CounterApp = ({number}) => {

  const [count, setCount] = useState(number);

  const sumale = () => {
    setCount (count+1)
  };
  const restale = () => {
    setCount (count-1)
  };

  const resetFunc = () => {
    setCount(number);
  }

      return (
        <>
          <div>
           CounterApp
          </div>
    
          <p> prop: {number} </p>
          <p> counter: {count} </p>

          <button className="button" onClick={ sumale }>sumale kbron</button>
          <button className="button" onClick={ restale }>restale kbron</button>
          <button className="button" onClick={ resetFunc }>reseteame kbron</button>
        </>
      )
    }
    
  CounterApp.propTypes = {
    number: PropTypes.number,
  }
  
  CounterApp.defaultProps = {
    number: 0
  }
  
export default CounterApp;