import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

    /**
     * Métodos do ciclo de vida
     * 1 - componentDidMount() - Assim que o componente é mostrado na tela
     */

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products') ;
        console.log(response);
    };

    render() {
        return <h1>aaaaaaaaaaaaaa</h1>
    }
}
