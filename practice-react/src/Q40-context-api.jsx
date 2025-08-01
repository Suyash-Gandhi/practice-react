// consumer
import { data } from "./child"
import "./index.css"

function Q40contextapi() {
  return (
    <data.Consumer>

      {
        ({theme, settheme}) => {
          return (
            <div className={theme}>
              current theme: {theme}
              <button onClick={() => settheme(theme === "light" ? "dark" : "light")}>
                Toggle
              </button>
            </div>
          )
        }
      }
    </data.Consumer>
  )
}

export default Q40contextapi

