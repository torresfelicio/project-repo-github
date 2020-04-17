import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
state = {
  repositories: [],
}

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const response = await api.get('torresfelicio');
    this.setState({repositories: response.data})
    console.log(response);
  };
  render() {
    return (
      <>
      <img src={this.state.repositories.avatar_url}></img>
      <h2>{this.state.repositories.name}</h2>
      <h2>Cidade: {this.state.repositories.location}</h2>
      <h2>Repositorios: {this.state.repositories.bio}</h2>
      <h2>Repositorios: {this.state.repositories.public_repos}</h2>
      <h2>Seguidores: {this.state.repositories.followers}</h2>
      <h2>Seguindo: {this.state.repositories.following}</h2>
      </>
    );
  }
}