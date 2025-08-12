# Broken App Issues

## [2025-08-12]
### Issue Title - ReferenceError
**Description:**  
When simulating a post request, we get "ReferenceError: err is not defined". 

**Steps to Reproduce:**  
1. Start the server $npm --watch app.js
2. In insomnia ceate a POST request and in the Boday enter {"developers": ["elie", "joelburton"]} 
3. ReferenceError is displayed

**Expected Result:**  
It should display the name and bio of the two users.

**Actual Result:**  
It returned the ReferenceError

**Status:**  
In Progress / Partially Resolved

**Resolution/Notes:**  
After updating the catch on current line 13 to have an error param, a new "TypeError" has been thrown. 

## [2025-08-12]
### Issue Title - TypeError
**Description:**  
There was a TypeError in the terminal: TypeError: Cannot read properties of undefined (reading 'developers')

**Steps to Reproduce:**  
1. Start the server $npm --watch app.js from the terminal if not already running
2. In insomnia ceate a POST request and in the Boday enter {"developers": ["elie", "joelburton"]} 
3. ReferenceError is displayed

**Expected Result:**  
Return the name and bio for each requested username

**Actual Result:**  
The Error message was displayed

**Status:**  
Partially Resolved

**Resolution/Notes:**  
I re-read the instructions and reviewed my old code and noticed that I didn't have app.use(express.json()) which is the Middleware that handles parsing the data in the body of the HTTP request to JSON. Once I added this I got another issue "TypeError: Cannot read properties of undefined (reading 'name')".   

## [Date]
### Issue Title - TypeError 2
**Description:**  
I received a "TypeError: Cannot read properties of undefined (reading 'name')" when creating a POST request. I then created a console.log(results) to see what I was getting back from the axios request and saw:  
Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]

**Steps to Reproduce:**  
1. Start the server $npm --watch app.js from the terminal if not already running
2. In insomnia ceate a POST request and in the Boday enter {"developers": ["elie", "joelburton"]} 
3. TypeError is displayed
4. Added a console.log(results) and saw that results was an array of promises, not an array of objects. 

**Expected Result:**  
Return the name and bio for each requested username

**Actual Result:**  
The Error message was displayed

**Status:**  
Resolved

**Resolution/Notes:**  
Since the results were all pending promises, I needed to await the data to be returned, so I added a new line that waited for all of the promisses to be fulfilled, and save that in a new array named userRes. 