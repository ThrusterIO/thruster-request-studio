import * as c from "./constants";

const defaultPayloadAction = type => payload => dispatch => (
  dispatch({
    type,
    payload
  })
);


export const changeResponseTab = defaultPayloadAction(c.CHANGE_RESPONSE_TAB);
