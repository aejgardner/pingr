import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ showSettings }) => ({ showSettings })

export default connect(mapStateToProps)(App);