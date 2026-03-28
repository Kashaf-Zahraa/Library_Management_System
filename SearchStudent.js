.search-book-container {
    max-width: 800px;
    margin: 50px auto;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 30px;
    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.search-book-container h1 {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 30px;
}

.search-form {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.form-group {
    width: 100%;
    max-width: 400px;
}

.search-input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

.search-button {
    padding: 12px 24px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-button:hover {
    background-color: #2980b9;
}

.back-button-container {
    margin-bottom: 20px;
}

.back-button {
    padding: 8px 16px;
    font-size: 14px;
    background-color: #95a5a6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #7f8c8d;
}

.loading, .error, .no-books {
    margin: 20px 0;
    padding: 15px;
    border-radius: 4px;
    text-align: center;
}

.loading {
    background-color: #f1f9ff;
    color: #3498db;
}

.error {
    background-color: #fff5f5;
    color: #e74c3c;
}

.no-books {
    background-color: #fafafa;
    color: #7f8c8d;
}

.books-results {
    margin-top: 30px;
}

.books-results h2 {
    color: #2c3e50;
    font-size: 22px;
    margin-bottom: 15px;
}

.books-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.books-table th, 
.books-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.books-table th {
    background-color: #f5f5f5;
    color: #333;
    font-weight: bold;
}

.books-table tr:hover {
    background-color: #f9f9f9;
}