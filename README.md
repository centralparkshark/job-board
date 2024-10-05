## Link to Live Site
https://job-board-mauve.vercel.app/

## Problems
- CORS, deployed website won't work without a backend. 

## Usage Instructions
Navigate to live site. Use either search bar or click a keyword to search for similar jobs. Click apply on any job posting to navigate to a page that will allow you to apply. You can also hover over any job post and click the banner to save it to your local storage which you can then view by clicking the button at the top. This will render a different view and show your saved posts.

The site will only show jobs that have been posted in the last two weeks.

## Technology Used:
- findwork.dev API for job postings
- HTML, CSS, Javascript, and React.
- Vite to create React app.
- Dotenv for API key.

## Approach Taken: 
This job board is used creating React to create a user-friendly interface with a component based-architecture. I was able to integrate a job API which I could render into individual job cards for the site. My main challenge was making sure information was passed down properly between changing views.

## Requirements
- [X] Uses HTML, CSS, JavaScript, React
- [X] Hosted on Heroku or Netlify
- [X] Frequent commits to Github
- [X] ReadMe File 
- [X] Use AJAX to request from external data source

## Bonus
- [ ] Use a complex user interface module (ex: carousel, drag and drop, sticky nav, tooltips, etc)
- [X] Use local storage
 
## Future Goals
- check to make sure something isn't already saved to local storage before saving again
- add search filters (also could be put in local storage but not so important)
- advanced search to look for years of experience etc
- click company name to view other jobs from same company