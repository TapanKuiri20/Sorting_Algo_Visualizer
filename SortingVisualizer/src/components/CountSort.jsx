import React, { useState, useEffect } from "react";
import '../assets/css/Visualizer.css';

function CountSort() {
    const [array, setArray] = useState([]);
    const [max, setMax] = useState(0);
    const [count, setCount] = useState([]);
    const [indexes, setIndexes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null); // State for tracking the current element in the original array
    const [indColor, setIndColor] = useState(null); // State for tracking the current count index
    const [sumInd, setSumInd] = useState(null); // State for tracking the index during the summing of counts
    const [ans, setAns] = useState([]); // State for tracking the sorted output array
    const n = 15;

    useEffect(() => {
        reset();
    }, []);

    const findMax = (arr) => {
        if (arr.length === 0) return 0;
        let maximum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (maximum < arr[i]) {
                maximum = arr[i];
            }
        }
        return maximum;
    };

    const reset = async() => {
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(Math.floor(Math.random() * 10) + 1);
        }
        setArray(newArray);
        setMax();
        setIndexes([]);
        setCount([])
        setCurrentIndex(null);
        setIndColor(null);
        setSumInd(null);
        setAns([]);
    };

    const start = async () => {
        const maximum = findMax(array);
        setMax(maximum);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

        const indexArray = [];
        for (let i = 0; i <= maximum; i++) {
            indexArray.push(i);
        }
        setCount(new Array(maximum + 1).fill(0));
        setIndexes([...indexArray]);

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization


        let counts = new Array(maximum + 1).fill(0);
        let output = new Array(array.length);

        for (let i = 0; i < array.length; i++) {
            setCurrentIndex(i); // Highlight the current element in the original array
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            setIndColor(array[i]); // Highlight the current count index
            counts[array[i]]++;
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            setCount([...counts]);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
        }
        setCurrentIndex(null);
        setIndColor(null);

        for (let i = 1; i <= maximum; i++) {
            setSumInd(i); // Highlight the current count index during summing
            counts[i] += counts[i - 1];
            setCount([...counts]);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
        }
        setSumInd(null);
        for (let i = array.length - 1; i >= 0; i--) {
            setCurrentIndex(i); // Highlight the current element being placed in the output array
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const countIndex = array[i];
            setIndColor(countIndex); // Highlight the index in the count array
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const position = --counts[countIndex];
            output[position] = array[i];
            
            setAns([...output]); // Update sorted array with each step
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
            setCount([...counts]);  //this is for decrement the count
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

        }
        setCurrentIndex();
        setIndColor();
    };

    return (
        <div className="parent">
              

                <div className="number-container">
                    {array.map((value, index) => (
                        <div
                            key={index}
                            className="numbers"
                            style={{
                                border: currentIndex === index ? '2px solid yellow' : '',
                                
                            }}
                        >
                            {value}    
                        </div>
                    ))}
                </div>

                <div className="num"> 
                    Max number: {max}
                </div>
            <div className="number-container">
                {count.map((value, index) => (
                    <div key={index} className="numbers"
                        style={{
                            border: sumInd === index ? '2px solid yellow' : '',
                            color: 'white',
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>

            <div className="number-count-container">
                {indexes.map((value, index) => (
                    <div key={index} className="numbers-count"
                        style={{
                            backgroundColor: indColor === index ? 'yellow' : 'transparent',
                            color: 'black',
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <br />

            <div className="number-container">
                {ans.map((value, index) => (
                    <div key={index} className="numbers"
                        style={{
                            color: 'white',
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <div>

            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default CountSort;
