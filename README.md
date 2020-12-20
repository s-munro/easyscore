# easyscore

## README

** The Easy Score **

The easy score is a web applicated intended as a course-planning resource for students to compare courses, professors, and grade distributions. The site is being redesigned as a single page react app, with this repository as our workpoint.

#### Change Log

**Friday/Saturday, December 18/19:**

- Sam Munro

  - Scaffolding/setup

    - screens, footer & nav folders added.
    - README added
    - axios added as a dependency
    - axios folder created

  * Functionality
    - Home.js form button pushes history to '/search'
    - searchUrl, isLoading, errorText, courses global state set with redux
    - Home form submit updates searchUrl global state, pushes user to search results page (/search/:axiosUrl (same as searchUrl))
      - ** Search results page uses :axiosUrl param to make the axios call, does not use global state ** Done so that users can bookmark the search page or use it as history and still have results load; state wont persist after leaving site so shouldn't base axios call off of the state.
    * Search Page:
      - Created filterToKeyword custom hook, imported into search results, passed to header component. Created custom hook incase keyword needs to be referenced elsewhere in the site. Perhaps could add to state if this becomes an issue.
