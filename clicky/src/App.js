import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import MonsterCard from "./components/Monsters"
import characters from "./Card.json";
import monsters from "./monsters.json";
import "./App.css";

let correctClicks = 0;
let highScore = 0;
let message = "Start your clicking!"

class App extends Component {

	state = {
		characters,
		monsters,
		correctClicks,
		highScore,
		message
	}

	setClicked = id => {

		const characters = this.state.characters;

		const clickedCharacter = characters.filter(char => char.id === id);

		if (clickedCharacter[0].clicked) {

			correctClicks = 0;
			message = "Wrong!"

			for ( let i = 0; i < characters.length; i++){
				characters[i].clicked = false;
			}

			this.setState({correctClicks});
			this.setState({message});
			this.setState({characters});
		} else {

			clickedCharacter[0].clicked = true;

			correctClicks++;

			message = "Correct!"

			if (correctClicks > highScore){
				highScore = correctClicks;
				this.setState({highScore});

				if (correctClicks > 11){
					message = "You Win!"

					correctClicks = 0;
				}
			}

			characters.sort(function(a,b){return 1 - Math.random()});

			this.setState({correctClicks});
			this.setState({characters});
			this.setState({message});
		}
	};

	render() {
		return (
			<Wrapper>
				<div>
					<Title> X-MEN MEMORY GAME </Title>

					<h3>
						Correct: {this.state.correctClicks}
					</h3>

					<h3>
						High Score: {this.state.highScore}
					</h3>
					<h4>
						{this.state.message}
					</h4>
				</div>

				{this.state.characters.map(character => (
					<Card
					setClicked = {this.setClicked}
					id = {character.id}
					key = {character.key}
					image = {character.image}
					/>
				))}
			</Wrapper>
		)
	}
}

export default App;
