import React from "react";
import ShewhartChart from "./ShewhartChart";

const data = [
    { id:1,   name: "Sample A", value: 10 },
    { id:2, name: "Sample B", value: 12 },
    { id:3, name: "Sample C", value: 8 },
    { id:4, name: "Sample D", value: 14 },
     { id:5, name: "Sample A", value: 10 },
    { id:6, name: "Sample B", value: 12 },
    { id:7, name: "Sample C", value: 8 },
    { id:8, name: "Sample D", value: 14 }, 
    { id:9, name: "Sample A", value: 10 },
    { id:10, name: "Sample B", value: 12 },
    { id:11, name: "Sample C", value: 8 },
    { id:12, name: "Sample D", value: 14 },
    { id:13, name: "Sample A", value: 10 },
    { id:14, name: "Sample B", value: 12 },
    { id:15, name: "Sample C", value: 8 },
    { id:16, name: "Sample D", value: 14 },
     { id:17, name: "Sample A", value: 10 },
    { id:18, name: "Sample B", value: 12 },
    { id:19, name: "Sample C", value: 8 },
    { id:20, name: "Sample D", value: 14 },
    { id:21, name: "Sample E", value: 28 }, // out of range example
    { id:22, name: "Sample F", value: 9 },
    { id:23, name: "Sample B", value: 12 },
    { id:24, name: "Sample C", value: 8 },
    { id:25, name: "Sample D", value: 14 },
    { id:26, name: "Sample A", value: 10 },
    { id:27, name: "Sample B", value: 12 },
    { id:28, name: "Sample C", value: 8 },
    { id:29, name: "Sample D", value: 14 },
    { id:30, name: "Sample E", value: 28 }, // out of range example
    { id:31, name: "Sample F", value: 9 },
];

const mean = 13;
const stdDev = 4;

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Shewhart Control Chart</h2>
            <ShewhartChart data={data} mean={mean} stdDev={stdDev} />
        </div>
    );
}

export default App;
