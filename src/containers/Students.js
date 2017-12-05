import React, {Component} from 'react';
import {connect} from 'react-redux';
// we need bindActionCreators from Redux so that we can get the actions to dispatch to the reducers
import {bindActionCreators} from 'redux';
// Go get the student action so we can use it
import AddStudent from '../actions/AddStudent';
// we need some glue, this componenet needs to know about the store(redux), so we can use it's state
// and update if needed, we can use the connect method from react-redux( the glue bettween react/redux);

class Students extends Component{

  constructor(){
    super();
    this.addNewStudent = this.addNewStudent.bind(this);
  }

  addNewStudent(){
    // console.log(e.target.value);
    const name = document.getElementById("student-name").value;
    this.props.addStudent(name);
  }

  render(){
    console.log(this.props);
    var studentArray = this.props.students.map((student, index)=>(
      <li key={index}>{student.name} sits in seat {student.seat}</li>
    ));
    return(
      <div>
        <input id={"student-name"} type="text" placeholder={"Name of Student"}/>
        <button onClick={this.addNewStudent}>Add Student</button>
        <h1>Student Component</h1>
        {studentArray}
      </div>
    )
  }
}
// we need a function to map the redux state to this compoent props.key
function mapStateToProps(state){
  // the state param is the ROOT REDUCER
  // this function will return an object, property will be, the props In tTHIS compoent, the value will be the piece of state from the reducer
  return {
    students: state.students
  }
}


function mapDispatchToProps(dispatch){
  // bindActionCreator takes an object, as first params, it is the 2nd params is the dispatcher
    // property is the local prop name(this.props.aaa)
  //value is the callback( action file.js)
  return bindActionCreators({
    addStudent:AddStudent
  }, dispatch);
}

// export default Students;

// in containers(Componenet that need to know about redux), we don't export the component, we pass connect.
// export default connect(mapStateToProps)(Students);

// when exporting, connect, state always comes first
// when export connected, action comes second
export default connect(mapStateToProps, mapDispatchToProps)(Students);