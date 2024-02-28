import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
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

export function CheckUserExists({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}

export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

export async function postServerData(url, result, callback) {
  const data = await (await axios.get(url, result))?.data;
  return callback ? callback(data) : data;
}
