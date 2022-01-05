import React, { Component } from 'react';
import architectura from './architectura.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <h3>Architektura systemu</h3>
            <img src={architectura} alt="logo" />

            Aplikacja została zaprojektowana na bazie zadania 9.<br/>
            Zmodyfikowano elementy:<br/>
            client:<br/>
            <p>- Fib.js - dodano metody umożliwiające interakcję z modułem historii, dodano "required" do pola input aby uniemożliwić podanie pustej wartości<br/>
            - App.js - zrealizowano w formie routera React</p><br/>
            <br/>
            server:<br/>
            <p>- index.js - zmieniono limit dla indeksu k do 20</p><br/>
            <br/>
            worker:<br/>
            <p>- index.js - zmieniono funkcję obliczającą k-ty wyraz ciągu</p><br/>
            <br/>
            Dodano elementy:<br/>
            <p>- Main.js - komponent strony głównej<br/>
            - Documentation.js - komponent dokumentacji<br/>
            - History.js - komponent wyświetlający historię ostatnich wpisanych indeksów</p><br/>

            <Link to="/">Strona główna</Link>
            </header>
        </div>
    );
  };
