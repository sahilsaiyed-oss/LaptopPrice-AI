// src/pages/Logs.jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Logs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        API.get('/logs')

.then((res)=>{
setLogs(res.data);
})

.catch(console.error);
    }, []);

    return (
        <div className="logs-page">
            <h2>Recent Prediction Logs</h2>
            <table className="logs-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Query</th>
                        <th>Result</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
{
logs.map((log,index)=>(
<tr key={index}>
<td>{index+1}</td>
<td>{log.username}</td>
<td>{log.brand}</td>
<td>₹ {log.predicted_price}</td>
<td>Today</td>
</tr>
))
}
</tbody>
            </table>
        </div>
    );
};

export default Logs;