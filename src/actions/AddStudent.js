export default function(studentName){
  console.log("Add Student Action is Running!");
  // an action exports a function, that function must return an object,
  // that object has to have a prop of "type"
  console.log(studentName);
  return {
    type: "ADD_STUDENT",
    payload: studentName
  }
}