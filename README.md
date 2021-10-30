 
## Description
 
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
In this small project / challenge, I seek to demonstrate:

1 - Make several http requests to an endpoint that returns numbers.

2 - Save the numbers that were returned

3 - Sort all numbers, without the sort method of JS

4 - Make the numbers available on an endpoint.

Observation:
Starting from page 1 will go to page 1000, which will result in 1 million numbers since each page has 100 numbers.
When I finish, the requests that failed will be exposed in the key: pagesCalledWithError, so we will know the specific pages that broke and can then redo those specific requests.


## Tools used:

- NestJS backend

- Axios for requests.

- Bubble sort algorithm


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn dev

# production mode
$ yarn run start:prod
```

## App in use

The API will run on port 5000, to see the return just make a call in some app like Postman for example and will have all the numbers sorted.
Note: If you want to test faster, you can change the home page number putting something close to 10000 (which is the last page with a return)

![2021-10-30-16-06-03](https://user-images.githubusercontent.com/41118230/139555712-fe2a6611-ec50-496b-80fc-7e4d6ac33ee8.gif)

 
In the example above, I make requests from page 9900, up to 10001 which is when it doesn't return any more numbers.
101 requests, being 101 returns with 100 numbers each, a total of 10100 numbers returned and sorted.
