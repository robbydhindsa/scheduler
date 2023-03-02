# Interview Scheduler

Scheduler client application created using 'Create React App'. Express is the basis for the [Scheduler API](https://github.com/robbydhindsa/scheduler-api) server application. Both servers run simultaneously; requests are proxied from the Webpack development server to the API server. 

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Screenshots
!["Screenshot of appointment booking form"](https://github.com/robbydhindsa/scheduler/blob/master/docs/booking-form.png?raw=true)

---

!["Screenshot of appointment being saved"](https://github.com/robbydhindsa/scheduler/blob/master/docs/saving-appointment.png?raw=true)

---

!["Screenshot of booked appointment"](https://github.com/robbydhindsa/scheduler/blob/master/docs/completed-form.png?raw=true)

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
