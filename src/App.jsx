import PropTypes from "prop-types";

const saludo = () => {
  return 'soy increible'
}
 
const App = ({content}) => {

  return (
    <>
      <div className='principal'>
        Hola mundo { saludo() }
      </div>

      <p data-testid="data-id">{content}</p>
    </>
  )
}

App.propTypes = {
  content: PropTypes.string.isRequired,
}

App.defaultProps = {
  content: 'vacio como mi cora </3'
}

export default App;
