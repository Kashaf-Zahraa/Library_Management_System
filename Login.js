.issued-books-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-family: Arial, sans-serif;
}

.issued-books-container h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
}

.loading-text, .error-text {
    text-align: center;
    font-size: 18px;
    margin: 20px 0;
}

.error-text {
    color: #e74c3c;
}

.no-books-message {
    text-align: center;
    padding: 30px;
    background-color: #f1f1f1;
    border-radius: 5px;
    margin: 20px 0;
}

.books-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

.books-table th, .books-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.books-table th {
    background-color: #3498db;
    color: white;
}

.books-table tr:hover {
    background-color: #f5f5f5;
}

.books-table tr.overdue {
    background-color: #ffebee;
}

.overdue-status {
    color: #e74c3c;
    font-weight: bold;
}

.remaining-status {
    color: #27ae60;
}

.navigation-buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.back-button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #2980b9;
}