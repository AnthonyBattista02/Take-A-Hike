import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import './Review.css'
import React, { useRef } from 'react'

export default function ReviewForm () {

    const [trails, setTrails] = useState([])

    useEffect(() => {
        const getTrails = async () => {
        const response = await axios.get(`${BASE_URL}/trails`)
        setTrails(response.data)
        }
        getTrails()
    }, [])
    
    console.log(trails)
    trails.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.trailName;
        optionElement.textContent = option.trailName;
        trailselectlist.appendChild(optionElement);
      })

    //   The following code with comments was made with the help of chatGPT
      const myFormRef = useRef()

      useEffect(() => {
        // Accessing the current property to get the actual HTML element
        const formElement = myFormRef.current;
    
        if (formElement) {
          // Now you can work with the HTML element
          console.log(formElement);
          function changeActionURL() {
            const form = myFormRef.current;
            form.action = 'http://localhost:3001/Reviews'; // Change the URL as needed

          }
        
          // Attach the function to the form's submit event
          myFormRef.current.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            changeActionURL(); // Call the function to change the action URL
            // You can add additional logic here if needed
            myFormRef.current.submit(); // Submit the form with the updated action URL
            changeActionURL()
          });
        }
      }, [])


    return(
        <div className='review-form'>
            <form id="myForm" ref={myFormRef} method="post">
                <select id="trailselectlist" name="trailName">
                </select>
                <input className="username" type="text" name="userName" value="User Name" readOnly/>
                <input className="review-text" type="text" name="reviewText" placeholder="Type Review Here"/>
                <input className="submit" type='submit' value='Submit'/>
            </form>
        </div>
    )
}