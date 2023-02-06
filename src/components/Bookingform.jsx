import React, { useState, useEffect } from "react";



  const Bookingform = () => {
    const [times, setTimes] = useState(["19:00"]);
    const [newDate, setNewDate] = useState([])
    const [data, setData] = useState();
    


  const handleSubmit = (event) => {
    event.preventDefault();
    }


  const handleDateChange = (event) => {
    setNewDate(event.target.value);
    console.log(newDate)
  }


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js;"
      );
      const {fetchAPI} = await response.json();
      const updatedTimes = fetchAPI(newDate);
      setTimes(updatedTimes)
      }
    fetchData();
  }, [handleDateChange])
  
    return(
      <form onSubmit={handleSubmit}>Date
          <label htmlFor="date">
            <input type="date" value={newDate} onChange={handleDateChange} />
          </label>
          <label htmlFor="Time">Time
          <select name="time">
            {times.map((times) => (
              <option  key={times} value={times}>{times}</option>
            ))}
          </select>
          </label>
          <label htmlFor="Occasion">Occasion
          <select name="occasion" id="Occasion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          </label>
          <button type="submit">Submit</button>
      </form>
    )
}

export default Bookingform;

