import { useState } from 'react';
import Header from '../../components/header/header';
import NumberList from '../../components/numberList/number-list';
import games from '../../games';
import './home.css';
import Disclaimer from '../../components/disclaimer/disclaimer';

function Home() {
    const [gameSelection, setGameSelection] = useState('powerball')

    return (
        <>
            <Header></Header>
            <h2 id='home-header'>
                <select onChange={(e) => {setGameSelection(e.target.value); console.table(games[gameSelection])}}>
                <option value='powerball'>PowerBall</option>
                <option value='megamillions'>MegaMillions</option>
                <option value='cash4life'>Cash 4 Life</option>
                {/* <option value='floridalotto'>FL Lotto</option> */}
                {/* <option value='test'>Test</option> */}
            </select> Numbers Generator</h2>
            <NumberList game={games[gameSelection]}></NumberList>
            <Disclaimer></Disclaimer>
        </>
    )
}

export default Home;