import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';




export default class Main extends Component {
  
  state = {
  repositories: [],
}

  componentDidMount() {
    
    this.loadRepositories();
  }

  loadRepositories = async () => {
    var inputElement = document.getElementById('pesquisa');
    var repoText = inputElement.value;
    const response = await api.get(`${repoText}`);
    this.setState({repositories: response.data}); 
  };
  
  render() { 
    
    return (
      <>
      <main className="repositories">
      <img src={this.state.repositories.avatar_url}></img>
      <input name="repo" id="pesquisa" placeholder="Usuario" type="text" ></input>
      <button id="button" onClick={this.loadRepositories}>Procurar</button>
        <div id="name">
          <h2>{this.state.repositories.name}</h2>
        </div>
        <div id="repos">
          <h3>Biografia: </h3><p> {this.state.repositories.bio}</p>
          <h3>Repositorios: {this.state.repositories.public_repos}</h3>
        </div>
        <div id="inf">
          <h3>Cidade: {this.state.repositories.location}</h3>
          <h3>Seguidores: {this.state.repositories.followers}</h3>
          <h3>Seguindo: {this.state.repositories.following}</h3>
        </div>
      </main>
      </>
    );
  }
}