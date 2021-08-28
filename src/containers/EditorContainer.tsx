import { connect } from 'react-redux';
import { setCode } from '../redux/actions';

import Editor from '../components/Editor';

const mapStateToProps = ({ code }) => ({
  code,
});

const mapDispatchToProps = (dispatch) => ({
  setCode: (code) => dispatch(setCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
