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
    
          <p data-testid="test-number-default">{number}</p>
          <p data-testid="test-counter">{count}</p>

          <button data-testid="sumale-kbron" className="button" onClick={ sumale }>sumale kbron</button>
          <button data-testid="restale-kbron" className="button" onClick={ restale }>restale kbron</button>
          <button data-testid="reseteame-kbron" className="button" onClick={ resetFunc }>reseteame kbron</button>
        </>
      )
    }
    
  CounterApp.propTypes = {
    number: PropTypes.number.isRequired,
  }
  
  CounterApp.defaultProps = {
    number: 0
  }
  
export default CounterApp;