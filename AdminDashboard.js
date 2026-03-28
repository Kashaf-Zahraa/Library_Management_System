.add-book-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.add-book-title {
    text-align: center;
    margin-bottom: 25px;
    color: #333;
    font-size: 24px;
}

.add-book-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.form-group label {
    font-weight: bold;
    color: #555;
}

.form-group input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.error-text {
    color: #dc3545;
    font-size: 14px;
    margin-top: 4px;
}

/* Updated button containers */
.submit-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.back-button-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

/* Button styles */
.submit-button {
    padding: 10px 30px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #0056b3;
}

.submit-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.back-to-dashboard-button {
    padding: 10px 20px;
    width: 100%;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-to-dashboard-button:hover {
    background-color: #5a6268;
}

.message {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    text-align: center;
}

.message.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.message.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}