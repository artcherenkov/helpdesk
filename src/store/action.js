export const ActionType = {
  ADD_REQUEST: `ADD_REQUEST`,
  LOAD_REQUESTS: `LOAD_REQUESTS`
};

export const addRequest = (request) => ({
  type: ActionType.ADD_REQUEST,
  payload: request,
});

export const loadRequests = (requests) => ({
  type: ActionType.LOAD_REQUESTS,
  payload: requests,
});
