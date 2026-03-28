/* Background Styling */
body {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
    margin: 0;
}

/* Center Login Box */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Login Box Design */
.login-box {
    width: 350px;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Heading */
.login-box h2 {
    margin-bottom: 25px;
    color: #333;
}

/* Form Layout */
.login-box label {
    display: block;
    text-align: left;
    margin-left: 10%;
    margin-bottom: 5px;
    color: #555;
}

/* Input Fields - Ensuring all inputs are properly centered */
.login-box input, 
.login-box select {
    width: 80%;
    padding: 12px;
    margin: 8px auto 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    display: block;
}

/* Button */
.login-box button {
    width: 80%;
    background: #007bff;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
}

/* Button Hover Effect */
.login-box button:hover {
    background: #0056b3;
}

/* Error Message */
.error {
    color: #e74c3c;
    background-color: #fdeaea;
    padding: 10px;
    border-radius: 5px;
    margin: 10px auto;
    width: 80%;
    font-size: 14px;
}