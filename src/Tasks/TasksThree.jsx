import { useState } from "react";


export default function TasksThree() {
    const data = ["dog", "cat", "tiger", "lion", "cheeta"];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    
        // Filter the data based on the search term
        const filtered = data.filter(item =>
          item.toLowerCase().includes(term.toLowerCase())
        );
    
        setFilteredData(filtered);
      };
    return (

        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '4rem', }}>
                <h1>TASKS 3</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <ul>
                    {filteredData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}