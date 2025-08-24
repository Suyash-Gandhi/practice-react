import Q02props from "./Q02-props"
import Q03usestate from "./Q03-usestate"
import Q04listofprops from "./Q04-listofprops"
import Q05usestateincrementdecrement from "./Q05-usestate-increment-decrement"
import Q06togelcoller from "./Q06-togelcoller"
import Q08disablebuttonafter3click from "./Q08-disable-button-after-3click"
import Q09useeffect from "./Q09-use-effect"
import Q10displaytextinrealtime from "./Q10-display-text-in-real-time"
import Q12evenodd from "./Q12-even-odd"
import Q13passingfunctionusingprops from "./Q13-passing-function-using-props"
import Q15defaultstatevalue from "./Q15-default-state-value"
import Q16useeffectlogmessageonrender from "./Q16-useeffect-log-message-on-render"
import Q17useeffectonspecificstatechange from "./Q17-useeffect-on-specific-state-change"
import Q18fetchapiusingeffext from "./Q18-fetch-api-usingeffext"
import Q19formdataupload from "./Q19-form-data-upload"
import Q20dropdown from "./Q20-dropdown"
import Q22filterandobjectentries from "./Q22-filter-and-objectentries"
import Q23listofcheckboxes from "./Q23-list-of-checkboxes"
import Q24reducemethod from "./Q24-reducemethod"
import Q25tab from "./Q25-tab"
import Q26useref from "./Q26-useref"
import Q27userefcounter from "./Q27-useref-counter"
import Q28stopwatch from "./Q28-stopwatch"
import Q29mousecoordinates from "./Q29-mouse-coordinates"
import Q30userprefrence from "./Q30-user-prefrence"
import Q31conditionallyapplyingclasses from "./Q31-conditionally-applying-classes"
import Q32formvalidationerror from "./Q32-form-validation-error"
import Q33useeffectcomponentunmount from "./Q33-useeffect-component-unmount"
import Q34pagination from "./Q34-pagination"
import Q35controledanduncontroledinput from "./Q35-controled-and-uncontroled-input"
import Q36customhooks from './Q36-custom-hooks'
import Q37apicallusingcustomhooks from "./Q37-api-call-using-custom-hooks"
import Q38windowwidth from "./Q38-window-width"
import Q39keypress from "./Q39-key-press"
import Q42usememo from "./Q42-usememo"
import Q43usecallback from "./Q43-usecallback"
import Q44reactmemo from "./Q44-react-memo"
import Q45multistepfrom from "./Q45-multi-stepfrom"
import Q46usereducer from "./Q46-usereducer"
import Q48autosave from "./Q48-auto-save"
import Q49lazyloading from "./Q49-lazy-loading"
import Q50formbuilder from "./Q50-form-builder"
import { Toggle } from "./parent"
import {Login} from "./parent"

import { useState } from 'react'

const render = {
  
  2: Q02props, 3: Q03usestate, 4: Q04listofprops, 5: Q05usestateincrementdecrement,
  6: Q06togelcoller, 8: Q08disablebuttonafter3click, 9: Q09useeffect,
  10: Q10displaytextinrealtime, 12: Q12evenodd, 13: Q13passingfunctionusingprops,
  15: Q15defaultstatevalue, 16: Q16useeffectlogmessageonrender, 17: Q17useeffectonspecificstatechange,
  18: Q18fetchapiusingeffext, 19: Q19formdataupload, 20: Q20dropdown,
  22: Q22filterandobjectentries, 23: Q23listofcheckboxes, 24: Q24reducemethod,
  25: Q25tab, 26: Q26useref, 27: Q27userefcounter, 28: Q28stopwatch, 29: Q29mousecoordinates,
  30: Q30userprefrence, 31: Q31conditionallyapplyingclasses, 32: Q32formvalidationerror,
  33: Q33useeffectcomponentunmount, 34: Q34pagination, 35: Q35controledanduncontroledinput,
  36: Q36customhooks, 37: Q37apicallusingcustomhooks, 38: Q38windowwidth,
  39: Q39keypress, 40: Toggle, 41: Login,42:Q42usememo,
  43:Q43usecallback,44:Q44reactmemo,45:Q45multistepfrom,46:Q46usereducer,
  48:Q48autosave,49:Q49lazyloading,50:Q50formbuilder
  


}

function questionrenderer() {

  const [selected, setselected] = useState(1)

  const Selectedcomponent = render[selected]


  return (
    <div>
      <h1>React Question Viewer</h1>
      <label htmlFor="quesitons"> select questions</label><br />
      <select id="questions" value={selected}
        onChange={(e) => setselected(e.target.value)}>

        {Object.keys(render).map((key) => (
          <option key={key} value={key}>
            Question {key}
          </option>
        ))}

      </select>

      {Selectedcomponent ? (
  selected === "4" ? (
    <Selectedcomponent 
      items={[
        { key: "age", value: "21" },
        { key: "eyes", value: "Brown" },
        { key: "height", value: "5ft 9in" }
      ]}
    />
  ) : (
    <Selectedcomponent />
  )
) : (
  <div>Invalid Question No</div>
)}

      <h3>Question List</h3><br />
      Q1 Create a React component that displays “Hello React” in an h1 tag. <br />

      Q2 Create a component that takes name as a prop and displays Hello, {name}.<br />

      Q3 Create a button that toggles text between "ON" and "OFF" on click.<br />

      Q4 Create a component that accepts a list of items as props and renders them as a list.<br />

      Q5 Create a counter component with increment and decrement buttons.<br />

      Q6 Create a component that changes text color on button click.<br />

      Q7 Create a component that shows or hides a paragraph when a button is clicked.<br />

      Q8 Create a component that disables a button after 3 clicks.<br />

      Q9 Create a component that displays the current date and time using state.<br />

      Q10 Create a component that takes an input and displays the typed text in real-time.<br />

      Q11 Create a component that has multiple buttons, and each one updates a different state value.<br />

      Q12 Create a component that conditionally renders a message if a number is even or odd.<br />

      Q13 Pass a function from parent to child and call it from the child on a button click.<br />

      Q14 Create a component that renders two child components and passes different props to each.<br />

      Q15 Create a component that resets state values back to default on button click.<br />

      Q16 Create a component that uses useEffect to log a message on every render.<br />

      Q17 Create a component that only logs in useEffect when a specific state changes.<br />

      Q18 Create a component that fetches data from a dummy API using useEffect.<br />

      Q19 Create a form with multiple fields and track values using one state object.<br />

      Q20 Create a dropdown menu where selected option updates a state value.<br />

      Q21 Build a toggle theme (light/dark) feature using state and conditional classes.<br />

      Q22 Create a component that shows a list of users and has a filter input to filter by name.<br />

      Q23 Create a component that renders a list of checkboxes and tracks selected items.<br />

      Q24 Create a component that calculates total of numbers entered in multiple input fields.<br />

      Q25 Implement a component with tab-like behavior using state.<br />

      Q26 Create a component that uses useRef to access an input field and focus on it on mount.<br />

      Q27 Create a component that tracks how many times a user clicks without re-rendering a count display (useRef).<br />

      Q28 Create a timer or stopwatch using useEffect and setInterval.<br />

      Q29 Create a component that tracks mouse coordinates using state and useEffect.<br />

      Q30 Create a component that remembers user preferences (color, font size) using state.<br />

      Q31 Create a component that conditionally applies classes/styles based on multiple states.<br />

      Q32 Implement a component that handles and displays error messages for form validations.<br />

      Q33 Use useEffect cleanup to log a message when a component unmounts.<br />

      Q34 Create a component that fetches paginated data and renders next/previous buttons.<br />

      Q35 Implement a controlled vs uncontrolled input example and observe differences.<br />

      Q36 Create a custom hook to manage form input state.<br />

      Q37 Create a custom hook to fetch data from any API endpoint.<br />

      Q38 Create a custom hook that detects window width (for responsive design).<br />

      Q39 Create a custom hook that checks if a key (e.g., ESC) is pressed.<br />

      Q40 Use React Context API to pass a theme (light/dark) between deeply nested components.<br />

      Q41 Create a component that uses Context API to manage user login state globally.<br />

      Q42 Create a component that uses useMemo to optimize expensive calculation logic.<br />

      Q43 Use useCallback to prevent unnecessary re-renders of child components.<br />

      Q44 Create a list component that only re-renders changed items using React.memo().<br />

      Q45 Build a multi-step form with step indicators and validation at each step.<br />

      Q46 Use useReducer to manage a more complex state like a shopping cart.<br />

      Q47 Implement a dark/light mode toggle using Context API and custom hook.<br />

      Q48 Create a form that auto-saves to localStorage every few seconds using useEffect.<br />

      Q49 Create a component that lazy loads another component using React.lazy and Suspense.<br />

      Q50 Create a dynamic form builder where fields are generated based on JSON schema.<br />
    </div>
  )
}

export default questionrenderer