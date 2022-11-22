// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Controls" titleTo="controls" buttonLabel="New Control" buttonTo="newControl">
        <Route path="/controls/new" page={ControlNewControlPage} name="newControl" />
        <Route path="/controls/{id:Int}/edit" page={ControlEditControlPage} name="editControl" />
        <Route path="/controls/{id:Int}" page={ControlControlPage} name="control" />
        <Route path="/controls" page={ControlControlsPage} name="controls" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
