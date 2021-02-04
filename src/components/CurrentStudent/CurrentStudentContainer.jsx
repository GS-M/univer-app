import { connect } from "react-redux";
import CurrentStudent from "./CurrentStudent";

let mapStateToProps = (state) => {
   return {
      arrayStudents: state.universityPage.studentsIncurrentUni,
      place: state.universityPage.currentStudentIndex,
      univerName: state.universityPage.currentUniverName
   }
}
let CurrentStudentContainer = connect(mapStateToProps, {})(CurrentStudent)
export default CurrentStudentContainer