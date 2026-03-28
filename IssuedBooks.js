/* IssueBook.css */
.issue-book-container {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.issue-book-container h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
}

.search-section {
    display: flex;
    margin-bottom: 20px;
    gap: 10px;
}

.search-section input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
}

.search-section button, .navigation-buttons button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.search-section button:hover, .navigation-buttons button:hover {
    background-color: #2980b9;
}

.search-section button[disabled], button.disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
}

.message {
    padding: 10px 15px;
    margin-bottom: 15px;
    border-radius: 4px;
    font-size: 16px;
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

.search-results {
    margin-top: 30px;
}

.search-results h2 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.search-results table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.search-results th, .search-results td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #dee2e6;
}

.search-results th {
    background-color: #e9ecef;
    font-weight: bold;
    color: #495057;
}

.search-results tr:nth-child(even) {
    background-color: #f8f9fa;
}

.search-results tr:hover {
    background-color: #f1f3f5;
}

.search-results button {
    padding: 6px 12px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-results button:hover {
    background-color: #218838;
}

.search-results button.disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

.navigation-buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}