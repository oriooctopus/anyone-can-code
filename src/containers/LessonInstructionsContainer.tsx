import { connect } from 'react-redux';
// import { setCode } from "../actions";
import LessonInstructions from '../components/LessonInstructions/LessonInstructions';

const mapStateToProps = ({ code }) => ({
  code,
});

const mapDispatchToProps = (dispatch) => ({
  // setCode: (code) => dispatch(setCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonInstructions);
