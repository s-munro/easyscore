# easyscore

## README

** The Easy Score **

The easy score is a web applicated intended as a course-planning resource for students to compare courses, professors, and grade distributions. The site is being redesigned as a single page react app with this repository as our workpoint.

### Change Log

#### Friday/Saturday, December 18/19:

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
      - ** Search results page uses :axiosUrl param to make the axios call, does not use global state **Done so that users can bookmark the search page or use it as history and still have results load.\*\* state wont persist after leaving site so shouldn't base axios call off of the state.
    * Search Page:
      - Created **filterToKeyword** custom hook, imported into search results, passed to header component. Created custom hook incase keyword needs to be referenced elsewhere in the site. Perhaps could add to state if this becomes an issue.
      - 'showing results for x' x dynamically updates based off of the url so that it still shows recognizes and shows search terms even if people just visit through a link.
      - CourseCard is displaying data based off of the api return
      - CourseCardInstructor component is created for the first three iterations of instructors.map. To clarify to users, the card also displays the total number of professors for the course (instructors.length)
      * **Worth noting:** Coursecard may look unusual when only one or two results display instead of a full page. May be worth it to consider using a different style of card (horizontal vs tall) for cases where results are a small number (i.e. res.data.length < 3 ? HorizontalCard : VerticalCard )

  #### Sunday, December 20:

  - Sam Munro
    - Design still hasn't been touched: focusing still on functionality and the scaffolding.
    * Axios call and corresponding state updates working on course page, passes course as props to ProfessorCard & Header.

  #### Tuesday, December 22:

  - Sam Munro
    - Set up loading component for when isLoading true. Loading spinner imported from 'react-loader-spinner'

  #### Saturday, Jan 2:

  - Sam Munro
    - API:
      - New API baseURL in utils/getData.js
      - API returning JSON successfully (no errors yet)
    - HOME PAGE
      - Filter selection menu component appears on click of filter button
      * **Created Popup.js**--on SearchForm.js filter button click Popup.js appears. Need to add inputs to it and make sure it can manipulate the relevant state/values/etc.
        - Created with local state (ShowPopup and setShowPopUp) boolean. Relevant functions are handleOpenPopup and handleClosePopup.
        * Popup display data (text, title, etc) passed as props into the component, since it's likely we use multiple Popups.
        * .clicked class added/removed according to showPopup, modifying border color. dark border = active, light border = inactive.
    * COURSE PAGE:
      - Course name, info, etc updated according to the selected course (data from api call); was previously hard coded.
      * isLoading true returns loading component. Else, checks if courses.length > 0, and if true then returns Header.js and courses[0].instructors.map to return ProfessorCard for each instructor.
    * SEARCHRESULTS:
      - **if a blank search is done, API call gathers ~5,000 results. Takes a long time to load need solution**

  #### Sunday, Jan 3:

  - Sam Munro

  - TODO:

    - [] Add pseudo-buttons for all dropdowns--best way to manage state for this?
    - [] Day selector needs to be pseudo button dropdown as well
    - [x] Results page 'about # results'
    - [] Search bar and filter buttons on course results page
    - [] Incorporate the new api query for course page
    - [] Applied filters?
    - [] Course page toggle for current vs previous semesters

#### Wednesday, Jan 6:

- Sam Munro

- TODO:

  - [x] Secondary nav bar with search form

  * [] Add pseudo-buttons for all dropdowns--best way to manage state for this?
  * [] Day selector needs to be pseudo button dropdown as well
  * [x] Results page 'about # results'
    - [x] ResultsNumber component changes depending on if in header or in body of page
  * [] Filter buttons on course results page
  * [] Incorporate the new api query for course page
  * [] Applied filters?
  * [] Course page toggle for current vs previous semesters
