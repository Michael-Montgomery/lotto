import { useState } from 'react';
import './number-list.css';

function NumberList(props) {
    

    const [numList, setNumList] = useState(new Array(props.game.numOfStandardBalls).fill(''));
    const [moneyball, setMoneyball] = useState('');
    

    const fetchNewNums = () => {
        let nums = [];
        for (let i = 0; i < props.game.numOfStandardBalls; i++) {
            let newNum = Math.floor(Math.random() * props.game.standardBallMaxValue) + 1;
            while (nums.includes(newNum)) {
                newNum = Math.floor(Math.random() * props.game.standardBallMaxValue) + 1;
            }
            nums.push(newNum);
        }


        setNumList(nums)

        setMoneyball(Math.floor(Math.random() * props.game.moneyBallMaxValue) + 1)


    }

    return (
        <div id='number-list-wrapper'>
            <ul id='numbers-list-el'>
                {
                    numList.map((num, idx) => {
                        return (
                            <>
                                <li key={idx}>
                                    <div className='number-div'><p className='number-text'>{num}</p></div>
                                </li>
                            </>
                        )

                    })

                }
                {
                    props.game.numberOfMoneyBalls > 0 ? <li>
                        <div className='moneyball-div'><p className='moneyball-text'>{moneyball}</p></div>
                    </li> : <></>
                }
            </ul><br></br>
            <button id='fetch-new-nums-btn' onClick={fetchNewNums}>Get My Numbers</button>
        </div>
    )

}

export default NumberList;