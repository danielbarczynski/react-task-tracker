import PropTypes from 'prop-types' // snipp: impt
import Button from './Button';

const Header = ({ title }) => { // snipp: rafce
  return (
    <header className='header'>
        <h1>{title}</h1> 
        <Button color='red' text='button1' />
        <Button color='green' text='button2' />
        <Button text='button3' /> {/* reusable components */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string // roboust code, ensure type of title (can't be number) like in ts + .string.isRequired
}

// CSS in JS
const headingStyle = {
    color: 'GrayText', 
    backgroundColor: 'black'
}

export default Header;