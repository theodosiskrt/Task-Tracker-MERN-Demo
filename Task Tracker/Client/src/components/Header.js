import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title, onClick, showAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text = {showAdd ? 'Cancel' : 'Add'} color ={showAdd ? 'red' : 'green'} onClick = {onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header
