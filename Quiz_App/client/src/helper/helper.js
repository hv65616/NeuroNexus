import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
export function attemptsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnPointsNumber(result, answers) {
  return result
    .map((element, index) => answers[index] === element)
    .filter((index) => index)
    .map((index) => 10)
    .reduce((prev, curr) => prev + curr, 0);
}

export function checkresult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints;
}

export function CheckUserExists({children}){
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}