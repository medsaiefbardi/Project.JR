import react from "react";
import BarSearch from "./barSearch.js";
import ProductDetails from "./ProductDetails.js"
import Signup from "./auth/Signup.js";
import Login from "./auth/Login.js";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }
  render() { return (

    <div>
      <div className="auth">
        <Signup handleSuccessfulAuth ={this.handleSuccessfulAuth}/>
      <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
      <div className="searchbar">
<BarSearch/>
      </div>
      <div className="ProductDetails">
  <ProductDetails />
    </div>
    </div>
  )}
}

export default Home;