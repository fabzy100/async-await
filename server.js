// Task 01: Iterating with Async/Await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // Wait for 1 second before moving to the next value
    }
}

// Usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);



// Task 02: Awaiting a Call

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "API response data" });
        }, 1000);
    });
}

async function awaitCall() {
    const response = await fetchData(); // Simulate API call
    console.log(response.data); // Log the data after the "API call"
}

// Usage
awaitCall();




// Task 03: Handling Errors with Async/Await

async function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Randomly fail
            if (success) {
                resolve({ data: "API response data" });
            } else {
                reject("Failed to fetch data");
            }
        }, 1000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const response = await fetchDataWithError(); // Simulate API call
        console.log(response.data); // Log the data if successful
    } catch (error) {
        console.log(`Error: ${error}`); // Log a user-friendly error message
    }
}

// Usage
awaitCallWithErrorHandling();
