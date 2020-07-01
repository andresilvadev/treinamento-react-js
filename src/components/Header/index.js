import React, { Component } from 'react';
import './styles.css';

// Stateless component (Criar componentes com funcoes) o mesmo resultado teriamos utiliziando a classe abaixo
const Header = () => (
 <header id="main-header">JSHunt</header>
);

export default Header;

// classes são mais usados quando trabalhamos com estados
// class Header extends Component {
//     render() {
//         return <h1>Hello</h1>
//     }
// }