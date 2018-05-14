import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    message: "Click an Image to Begin!",
    topScore: 0,
    currentScore: 0,
    characters: characters,
    notClicked: characters
}

handleClickCharacter = name => {
    const findCharacter = this.state.notClicked.find(item => item.name === name);
    const currentScore = this.state.currentScore;

    if(findCharacter === undefined) {
        this.setState({ 
            message: "Oops..Already Clicked, Start Over!",
            topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
            currentScore: 0,
            characters: characters,
            notClicked: characters
        });
    }
    else if (currentScore < 11) { 
        const newcharacters = this.state.notClicked.filter(item => item.name !== name);
        
        this.setState({ 
            message: "Nice! Keep Going!",
            currentScore: this.state.currentScore + 1,
            characters: characters,
            notClicked: newcharacters
        });
    } 
    else if (currentScore === 11) {
      this.setState({
        message: "Great Job! You got them ALL!.. Click an Image to Play Again!",
        currentScore: 0,
        characters: characters,
        notClicked: characters
      });
    }

    this.shuffleCharacter(characters);
};

shuffleCharacter = character => {
  for (let i = 0; i < character.length; i++) {
      let j = Math.floor(Math.random() * (character.length - 1));
      [character[i], character[j]] = [character[j], character[i]];
  }
}

render() {
    return (
        <Wrapper>
            <Navbar
                message={this.state.message}
                currentScore={this.state.currentScore}
                topScore={this.state.topScore}
            />
            <Title />
            {
                this.state.characters.map(character => (
                    <CharacterCard
                        key={character.name}
                        name={character.name}
                        image={character.image}
                        handleClickCharacter={this.handleClickCharacter} 
                        currentScore={this.state.currentScore}
                    />
                ))
            }
        </Wrapper>
    );
}
}

export default App;
