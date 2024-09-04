import React, { useState, useEffect } from "react";
import '../assets/css/Visualizer.css';

function BubbleSort() {
    const [array, setArray] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(null); // State for tracking the current element in the array
    const [comparedIdx, setComparedIdx] = useState(null); // State for tracking the element being compared
    const [sortedIdx, setSortedIdx] = useState([]); // State for tracking the sorted elements
    const [tempNum, setTempNum] = useState(); // State for temporarily storing the swapped element

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 10; i++) {
            newArray.push(Math.floor(Math.random() * 20) + 1);
        }
        setArray(newArray);
        setCurrentIdx(null);
        setComparedIdx(null);
        setSortedIdx([]);
        setTempNum(null);
    };

    const bubbleSort = async () => {
        const arr = [...array];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {

                setCurrentIdx(j);
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
                setComparedIdx(j + 1);
                
                if (arr[j] > arr[j + 1]) {
                    // Swapping elements
                    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
                    let temp = arr[j];
                    setTempNum(temp); // Store the element being swapped
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

                    setArray([...arr]); // Update the array state with the new order
                    // await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
                }
                 
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
                 
                setCurrentIdx( );
                setComparedIdx( );
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
                setTempNum();
            }

            setSortedIdx((prev) => [...prev, arr.length - i - 1]); // Mark the sorted element
            // await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
        }
        setCurrentIdx(null);
        setComparedIdx(null);
    };

    return (
        <div className="parent">
            <h2>Bubble Sort</h2>
            <div className="number-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className="numbers"
                        style={{
                          backgroundColor: sortedIdx.includes(index)
                          ? 'green'
                          : index === currentIdx
                          ? '#737369 '
                          : index === comparedIdx
                          ? '#737369 '
                          : 'blue',
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <div className="num">Temporary variable : {tempNum?tempNum:'_'}</div>
            <div className="button-container">
                <button onClick={bubbleSort}>Start Bubble Sort</button>
                <button onClick={resetArray}>Reset Array</button>
            </div>
        </div>
    );
}

export default BubbleSort;
