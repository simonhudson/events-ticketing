# Events Ticketing

## Running locally

### Pre-requisites

-   [Node.js](https://nodejs.org/en)

### How to run

1. Clone repository
2. Open command prompt
3. `cd api` to move into the `/api` directory
4. Run `npm install`
5. Run `npm start` (this will start the API)
6. Open new command prompt
7. `cd events` to move into the `/events` directory
8. Run `npm install`
9. Run `npm run dev` (this will start the app)
10. Navigate to `http://localhost:5173`

## API

### Data storage

-   Elected to use a JSON file as it was simpler than setting up a database. If I were to use a DB (probably MongoDB), the data schema would be identical to the shape of the data in the JSON file.

## Events

### Styling

-   Made use of existing `theme` which I have used on previous projects

### Form

-   Improvement: use [Google's Place Autocomplete](https://developers.google.com/maps/documentation/javascript/place-autocomplete) rather than a free text field for the `Location` field, which would allow for more accurate (and consistent) data
