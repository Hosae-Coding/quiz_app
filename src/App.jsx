import './app.css';
import { useState, useEffect } from 'react';
import Start from './components/Start';
import Timer from './components/Timer';
import Trivia from './components/Trivia';

function App() {
   const [questionNumber, setQuestionNumber] = useState(1);

   const [username, setUsername] = useState(null);
   const [timeOut, setTimeOut] = useState(false);
   const [earned, setEarned] = useState('$ 0');

   const data = [
      {
         id: 1,
         question:
            'Rolex is a company that specializes in what type of product?',
         answers: [
            {
               text: 'Phone',
               correct: false,
            },
            {
               text: 'Watches',
               correct: true,
            },
            {
               text: 'Food',
               correct: false,
            },
            {
               text: 'Cosmetic',
               correct: false,
            },
         ],
      },
      {
         id: 2,
         question: 'When did the website `Facebook` launch?',
         answers: [
            {
               text: '2004',
               correct: true,
            },
            {
               text: '2005',
               correct: false,
            },
            {
               text: '2006',
               correct: false,
            },
            {
               text: '2007',
               correct: false,
            },
         ],
      },
      {
         id: 3,
         question: 'Who played the character of harry potter in movie?',
         answers: [
            {
               text: 'Johnny Deep',
               correct: false,
            },
            {
               text: 'Leonardo Di Caprio',
               correct: false,
            },
            {
               text: 'Denzel Washington',
               correct: false,
            },
            {
               text: 'Daniel Red Cliff',
               correct: true,
            },
         ],
      },
   ];

   const moneyPyramid = [
      { id: 1, amount: '$ 100' },
      { id: 2, amount: '$ 200' },
      { id: 3, amount: '$ 400' },
      { id: 4, amount: '$ 700' },
      { id: 5, amount: '$ 1100' },
      { id: 6, amount: '$ 1600' },
      { id: 7, amount: '$ 2200' },
      { id: 8, amount: '$ 2900' },
      { id: 9, amount: '$ 3600' },
      { id: 10, amount: '$ 4500' },
      { id: 11, amount: '$ 5500' },
      { id: 12, amount: '$ 6600' },
      { id: 13, amount: '$ 7800' },
      { id: 14, amount: '$ 9100' },
      { id: 15, amount: '$ 15000' },
   ].reverse();
   useEffect(() => {
      questionNumber > 1 &&
         setEarned(
            moneyPyramid.find((m) => m.id === questionNumber - 1).amount
         );
   }, [questionNumber, moneyPyramid]);

   return (
      <div className="app">
         {!username ? (
            <Start setUsername={setUsername} />
         ) : (
            <>
               <div className="main">
                  {timeOut ? (
                     <h1 className="endText">You earned: {earned}</h1>
                  ) : (
                     <>
                        <div className="top">
                           <div className="timer">
                              <Timer
                                 setTimeOut={setTimeOut}
                                 questionNumber={questionNumber}
                              />
                           </div>
                        </div>
                        <div className="bottom">
                           <Trivia
                              data={data}
                              questionNumber={questionNumber}
                              setQuestionNumber={setQuestionNumber}
                              setTimeOut={setTimeOut}
                           />
                        </div>
                     </>
                  )}
               </div>
               <div className="pyramid">
                  <ul className="moneyList">
                     {moneyPyramid.map((m) => (
                        <li
                           className={
                              questionNumber === m.id
                                 ? 'moneyListItem active'
                                 : 'moneyListItem'
                           }
                        >
                           <span className="moneyListItemNumber">{m.id}</span>
                           <span className="moneyListItemAmount">
                              {m.amount}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </>
         )}
      </div>
   );
}

export default App;
