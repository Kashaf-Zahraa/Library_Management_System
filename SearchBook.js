.return-book-container {
    max-width: 900px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-family: Arial, sans-serif;
}

.return-book-container h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
}

.return-book-container h2 {
    color: #3498db;
    margin-bottom: 15px;
}

.message {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
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

.issued-books-list {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

table th, table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

table th {
    background-color: #3498db;
    color: white;
    font-weight: normal;
}

table tr:nth-child(even) {
    background-color: #f2f2f2;
}

table tr:hover {
    background-color: #e9ecef;
}

.overdue {
    color: #e74c3c;
    font-weight: bold;
}

.return-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.return-button:hover {
    background-color: #2980b9;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.buttons button {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.buttons button:hover {
    background-color: #2980b9;
}