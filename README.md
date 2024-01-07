# Notes for those reviewing this tech test

Thanks for taking the time to look at my code. I just thought I'd mention a few corners I'm conscious I've cut in order to turn this test around in time:

- The `HolidayCard` component is not very reusable as it is coupled closely to the `Holiday` data type I've created. A more reusable card component wouldn't have anything specific to a holiday in it, instead allowing any image and child components to be passed into it. The "read more about this hotel" button could be configured and/or hidden using props too. This is probably true of other components too, but they are sufficient for the design I was given.
- My tests don't include many edge cases, for example around the rendering of holiday details, I ought to include error states for missing data or faulty data such as a holiday that is for 2 infants and no adults. It might be reasonable to expect that the back-end providing this data has verified it before sending it.
- I did add functionality to reverse the sort order when the currently active sort is clicked again, but removed it as I felt it required some additional UI which isn't in the designs, and I didn't feel I had time to create it.
- The sort options should probably be rendered dynamically from an array.
- I added some aria labels to improve the experience when using a screen reader, although I am conscious that aria labels aren't always the best way to do this. The recommended method is often to use `aria-labelledby` but I opted for aria labels to save time.

I also suspect there are several examples of not-best-practise in my code, including in my tests. I'm keen to learn more about what best practises are, and why!

Thanks,
Jason

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
