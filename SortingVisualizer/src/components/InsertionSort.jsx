
import React, { useState, useEffect } from "react";
import '../assets/css/Visualizer.css';

function InsertionSort() {
    const [array, setArray] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(null); // State for tracking the current element in the array
    const [comparedIdx, setComparedIdx] = useState(null); // State for tracking the element being compared
    const [sortedIdx, setSortedIdx] = useState([]); // State for tracking the sorted elements
    const [tempNum, setTempNum] = useState(); // State for temporarily storing the swapped element
    const [preInd, setPreInd] = useState();
    
    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 10; i++) {
            newArray.push(Math.floor(Math.random() * 16) + 1);
        }
        setArray(newArray);
        setCurrentIdx(null);
        setComparedIdx(null);
        setSortedIdx(new Set());
        setTempNum(null);
        setPreInd()
    };

    const insertionSort = async () => {
        const arr = [...array];
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            setCurrentIdx(i);
            
            while (j > 0 && arr[j - 1] > arr[j]) {
                setComparedIdx(j );
                setPreInd(j-1)
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

                // Swapping elements
                let temp = arr[j];
                setTempNum(temp);
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;

                // await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
                setArray([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization

                j--;
            }
            // setSortedIdx((prev) => new Set([...prev, i])); // Mark the sorted element
            await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for visualization
        }

        // Mark all elements as sorted once the algorithm is done
        for (let k = arr.length - 1; k >= 0; k--) {
            setSortedIdx((prev) => new Set(prev).add(k));
            await new Promise((resolve) => setTimeout(resolve, 200)); // Delay for visualization
        }

        
        setCurrentIdx();
        setComparedIdx();
        setPreInd()
    };

    return (
        <div className="parent">
            <h2>Insertion Sort</h2>
            <div className="number-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className="numbers"
                        style={{
                            backgroundColor: sortedIdx.has(index)
                                ? 'green' :
                                 index === currentIdx ? '#f6700d ' :
                                 index === preInd ? '#737369' :
                                 index === comparedIdx ? '#737369' : 'blue',
                                 
                            // border: index === comparedIdx ? '2px solid red': ''    
                            // height: `${  value * 3.5}px`,
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <div className="num">Temp : {tempNum}</div>
            <div className="button-container">
                <button onClick={insertionSort}>Start Insertion Sort</button>
                <button onClick={resetArray}>Reset Array</button>
            </div>
        </div>
    );
}

export default InsertionSort;
