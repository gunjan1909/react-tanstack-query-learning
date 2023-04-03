# Learning Tanstack React Query

## Asynchronous state management library. Managing asynchronous state(like coming from api, fetch or axios requests, dealing with state easy, handles caching, pre fetching etc.)

## Docs and Resources:

- ### [React Query Docs](https://react-query.tanstack.com/)
- ### [Web Dev Simplified - Kyle Cook](https://youtu.be/r8Dg0KVnfMA)

## In order to run this project you need to start both the client and the API:

### Clone the repository:-

1. #### `git clone https://github.com/gunjan1909/react-tanstack-query-learning.git`
2. #### `cd react-tanstack-query-learning`

### Start Client:-

1. #### `cd client`
2. #### `npm install`
3. #### `npm run dev`

### Start API:-

1. #### `cd api`
2. #### `npm install`
3. #### `npm start`

#### Notes/Points(personal understanding):

Query and Mutation: Simply, query is getting data from somewhere, mutation is changing some type of data

Query key must be unique for particular query we making.
When we pass data in querykey, make sure the defined function uses that data so that key and function are synced up so we can do invalidation and stuff.

Queryfn returns a promise, and takes parameter also

usequeries not covered, to run multiple queries at once

#### Rename every file with App name to run particular stuff

1. App1.jsx -> very basic example of useQuery, useMutation and update the key using queryClient ig.
