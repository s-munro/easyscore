# easyscore

## README

** The Easy Score **

A student-oriented web application intended as a course-planning resource. Offers students the ability to quickly and easily compare courses, professors, and grade distributions, as well as to search for which courses satisfy their target requirements (credit hours, time of day, credit types, etc). The site is being redesigned as a single page react app with this repository as our workpoint.

### Original Website:

![Original Easyscore - Animated gif demo](https://media.giphy.com/media/nPhDWjt7l7IfeLehwL/giphy.gif)
https://media.giphy.com/media/nPhDWjt7l7IfeLehwL/giphy.gif

### Change Log

#### Friday/Saturday, December 18/19:

- s-munro

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

  - s-munro
    - Design still hasn't been touched: focusing still on functionality and the scaffolding.
    * Axios call and corresponding state updates working on course page, passes course as props to ProfessorCard & Header.

  #### Tuesday, December 22:

  - s-munro
    - Set up loading component for when isLoading true. Loading spinner imported from 'react-loader-spinner'

  #### Saturday, Jan 2:

  - s-munro
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

  - s-munro

  - TODO:

    - [x] Results page 'about # results'
    - [x] Search bar and filter buttons on course results page
    - [] Incorporate the new api query for course page
    - [] Applied filters?
    - [] Course page toggle for current vs previous semesters

#### Wednesday, Jan 6:

- s-munro

- TODO:

  - [x] Secondary nav bar with search form
  - [x] Add functionality to second nav bar search form
  - [x?] Day selector needs to be pseudo button dropdown as well
  - [x] Results page 'about # results'
    - [x] ResultsNumber component changes depending on if in header or in body of page
  - [inprogress] Filter buttons on course results page
  - [] Incorporate the new api query for course page
  - [] Applied filters?
  - [] Course page toggle for current vs previous semesters

  #### Thursday, Jan 7:

  - TODO:
    - [x] Add functionality to second nav bar search form
    * [x] Flesh out filter card component for course page
      - [x] Add dropdowns for filters in filter card
      - [x] Make dropdowns functional
    * [x] Add pseudo-buttons for all dropdowns--best way to manage state for this?

  #### Friday, Jan 8 & Saturday, Jan 9:

  - [x] Styled Filters added, styled filters card added
  - [x] Actions and reducer set up for filters to update to global state
  - [x] Need to utilize global state methods to update courses and searches
  - [cancelled] Need to utilize filter isActive boolean state for active appearance on filter (see airbnb)
  - [x] Radio buttons for time of day filter?

  #### Sunday, Jan 10:

  - [x] filter buttons set to state
  - [x] state updates on change
  - [x] clear button resets filters & state
  - [x] update courses by applying state
  - [x] update on submit only
  - [x] resumes previous course list on 'reset filters'
  - [x] ant radio red

  ### Week of Monday, Jan 11

  ... misc, ant styles, filter styled, added to state

  #### Saturday, Jan 16

  - [x] home page migrated to bootstrap from ant
  - [x] home page working with bootstrap, forms & state
  - [x] keyword and next_sem added to reducer filters
  - [x] changeUrl and url removed from state and actions
  - [x] general cleanup and working toward dry code/best practices
  - [x] removed home search card select components in favor of reusable pure select component
  - [x] migrating search results page antd to bootstrap

  #### Sunday, Jan 17

  - [x] button added to home page
  - [x] setNavStyle action and navStyle state
  - [x] nav style changes depending on page
  - [x] incorporate chart.js doughnut for professor score
  - [x] incorporate chart.js bar for grade dist
    - [x] tweak minor settings (tick lines, etc)
  - [] incorporate fuzzy search on course page
  - [x] professor name to '{lastname}, {firstinitial}.' function
  - [] get filters functioning on course page
  - [] hamburger/modal filters on course page nav
  - [x] incorporated pagination to search page
  - [x] usePagination custom hook

  #### Monday, Jan 18

  - [x] course page filters card working
    - [x] Filters values parsed to integers when put to state (they were coming in as strings?)
    - [x] conditional check for if value === "", not parseint
  - [x] pagination for professors on coursepage
  - [x] global state set up for coursepage
  - [x] results sorted by rating
  - [x] nav searchbar working on course page
  - [x] fuzzy searchbar for professors on coursepage -[x] fuzzy search fix minor bugs
  - [inProgress] working filters for professors on coursepage
    - [x] needs to filter professors for next semester on render
    - [x] reset and re-filter for next semester on switch change
    - [] prospective filters? % A's?
  - [x] searchform filters affecting filterscard filters on results page
  - [x] graphs for professors bug

  #### Tuesday, Jan 19

  - [] updating filters in header vs card UX fix (searchresults)
  - [] prospective filters? % A's?
  - [] about and contact pages
  - [x] days for professor render
  - [x] requirements display on course
  - [x] years
  - [] click on whole coursecard for link

  #### Friday, Jan 22

  - [x] course fulfilled requirements dynamically render on course header
  - [x] professor days render
        -[] render in order of day of week?
  - [x] professor years taught render
  - [x] state migration/refactoring for results page filters
    - [x] reorganized actions into fetchDataActions, filterActions, and index.js actions pages
    - [x] created resultsPage object on state tree, added filters to resultsPage object
    - [x] new filtersCard actions added
    - [x] set cases for updated new filterscard state in resultsPage
    - [x] requirements selector added to filterscard
    - [x] next_sem filter hooked up to state

  #### Saturday, Jan 23

  - [x] search page filters all functioning and working in conjunction with one another
  - [x] search page filters now update and re-render course results accordingly on change rather than on submit
  - [x] professors filters functioning
    - [x] fuzzy search in conjunction with filters
  - [] professor cards animation on render
  - [x] MobileSearchForm added with popup dialog for filters

  #### Sunday, Jan 24 - Sat Jan 30

  - [x] contact page set up and designed
  - [x] about page set up and designed -[x] content migrated from easy score current website, 'about'
  - [x] back-end
    - [x] nodemailer installed
    - [x] basic endpoint with nodemailer to send emails
    - [x] communicating with front end for errors/success
  - [x] all functionality completed
  - [x] transferring over to heroku for deployment
  - [x] styling/responsiveness across the site
    - [x] course page
      - [x] professor cards
      - [x] header
      - [x] filter card sizing
      - [x] graphs
      - [x] responsive text size
      - [inp] styling for reqs?
    - [x] search page
      - [x] course cards
      - [x] migration to bootstrap
      - [x] center alignement, fix undesired padding/margins
    - [x] home page
      - [x] migration to bootstrap
      - [inp] align nav links with search form?   - [x] nav bar migrated to bootstrap & responsive
  - [x] bugfix on course-page course cards when only one result displayed
  - [x] removed linting issues
  - [x] integrated bootstrap classes for responsiveness across the app
  - [x] popup modal separated into its own component for reusability
  - [x] established footer and footer-related state
  - [x] global state for popup modal
  - [x] installed sass, altered bootstrap color palette for design consistency
