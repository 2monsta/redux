// this is our master reducer file.
  // it doesn't manage any particular state, it simply contains all the individual pieces of state/the reducers
  // iE a reducer contains a piece of state, the root reducers contains all reducers

// I(the root reducer), neither know or care about React.
  // i'm like Lichtenstien, independent of your empires
import {combineReducers} from 'redux';
// import each and individual reducer
import StudentReducer from './StudentReducer';
// build the root reducers, using combineReducers() which we import from reduct
const rootReducer = combineReducers({
  // the name of the state will be the property ( used by react)
// the value will be reducer file import
  students: StudentReducer
});

export default rootReducer;