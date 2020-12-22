import {loadIssues} from '../store/action';

// временные функции
export const fetchIssues = async (store) => {
  const res = await fetch(`http://localhost:5000/issues`, {
    withCredentials: true
  });
  store.dispatch(loadIssues(await res.json()))
}

export const postIssue = async (issue) => {
  let res = await fetch('http://localhost:5000/issues', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ data: issue })
  });
  console.log(await res.json());
}
