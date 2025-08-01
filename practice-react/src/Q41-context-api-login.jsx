import { creditials } from "./child"

function Q41contextapilogin() {

    return (


        <creditials.Consumer>
            {
                ({ islogin, setislogin }) => {
                    return (
                        <div>
                            <h3>user is {islogin ? "loged in" : "loged out"}</h3>
                            <button onClick={() => setislogin(!islogin)}>{islogin ? "log out" : "log in"}</button>
                        </div>
                    )
                }
            }
        </creditials.Consumer>

    )
}

export default Q41contextapilogin