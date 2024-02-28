import * as Action from "../redux/result_reducer";
import { postServerData } from "../helper/helper";
export const pushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultActions(index));
  } catch (error) {
    console.log(error);
  }
};

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result.length <= 0 && !username)
        throw new Error("Couldn't get Result");
      await postServerData(
        "https://quizappbackend-yomj.onrender.com/api/result",
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};
