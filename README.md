# easyscore

## README

** The Easy Score **

The easy score is a web applicated intended as a course-planning resource for students to compare courses, professors, and grade distributions. The site is being redesigned as a single page react app, with this repository as our workpoint.

#### Change Log

**Monday, December 18/19:**

- Sam Munro
  - Scaffolding
    - screens, footer & nav folders added.
    - README added
    - axios added as a dependency
    - axios folder created
    - Home.js form button pushes history to '/search'
    - searchUrl, isLoading, errorText, courses global state set with redux
    - Home form submit updates searchUrl global state, pushes user to search results page (/search/:axiosUrl (same as searchUrl))
      - ** Search results page uses :axiosUrl param to make the axios call, does not use global state ** Done so that users can bookmark the search page or use it as history, since state won't persist after they leave the site.
