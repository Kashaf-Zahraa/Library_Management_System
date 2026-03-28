.search-student-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

.search-student-container h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 25px;
}

.search-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
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
    border-radius: 5px;
    font-size: 16px;
}

.search-form button {
    padding: 12px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-form button:hover {
    background-color: #2980b9;
}

.search-form button:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
}

.error-message {
    color: #e74c3c;
    padding: 10px;
    margin: 10px 0;
    background-color: #fadbd8;
    border-radius: 5px;
    text-align: center;
}

.student-details {
    margin-top: 30px;
    border-top: 1px solid #eee;
    padding-top: 20px;
}

.student-details h2, .student-details h3 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.info-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
}

.books-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
}

.books-table th, .books-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

.books-table th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.books-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.books-table .issued {
    color: #e67e22;
    font-weight: bold;
}

.books-table .returned {
    color: #27ae60;
    font-weight: bold;
}

.back-button {
    display: block;
    width: 100%;
    padding: 12px;
    margin-top: 25px;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #5a6268;
}