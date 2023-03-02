# Interview Scheduler

Scheduler client application created using 'Create React App'. Express is the basis for the [Scheduler API](https://github.com/robbydhindsa/scheduler-api) server application. Both servers run simultaneously; requests are proxied from the Webpack development server to the API server. 

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Screenshots
!["Screenshot of appointment booking form"]()

!["Screenshot of appointment being saved"]()

!["Screenshot of booked appointment"]()

## Testing Methods Used

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

### Running Cypress End-to-End Testing

```sh
npm run cypress
```



screenshots: 
page with appts already booked, form open on a slot, named filled in, interviewer selected (not Monday)

page with appts already booked, confirm showing on a slot (diff day selected )
