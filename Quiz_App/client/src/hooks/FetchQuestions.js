import { useEffect, useState } from "react";
import data from "../database/data";
import { useDispatch } from "react-redux";
import * as Action from "../redux/question_reducer";
export const useFetchquestions = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    Loading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setGetData((prev) => ({ ...prev, Loading: true }));
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, Loading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));
          dispatch(Action.startExamActions(question));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, Loading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};
