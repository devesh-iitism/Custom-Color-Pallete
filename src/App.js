import React, { Component } from "react";
import {Router, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
	render() {
		return (
			<Switch>
				<Router exact path="/" />
				<Router exact path="/palette/:id" />
			</Switch>
			
			// <div className="App">
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div>
		)
	}
}

export default App;
