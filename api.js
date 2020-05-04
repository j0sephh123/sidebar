import axios from 'axios';
const client = axios.create({
  baseURL: "http://localhost:1337",
});

export const getCollection = (collection) => {
  return client.get(collection)
}

export const getOne = (collection, id) => {
  return client.get(`${collection}/${id}`)
}
