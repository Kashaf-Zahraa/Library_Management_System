/* AuthorsBooks.css */
.authors-books-container {
    max-width: 1200px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-family: Arial, sans-serif;
}

.authors-books-container h1 {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 25px;
    text-align: center;
}

.authors-books-container h2 {
    color: #3498db;
    font-size: 22px;
    margin: 20px 0;
    text-align: center;
}

.search-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    margin: 0 auto 30px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-group label {
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

.input-group input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
}

.search-button {
    background-color: #3498db;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 10px;
}

.search-button:hover {
    background-color: #2980b9;
}

.loading-message {
    text-align: center;
    margin: 20px 0;
    font-size: 18px;
    color: #3498db;
}

.error-message {
    background-color: #f8d7da;
    color: #721c24;
    padding: 15px;
    border-radius: 5px;
    margin: 20px 0;
    text-align: center;
}

.error-message button {
    background-color: #721c24;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
}

.no-books-message {
    text-align: center;
    margin: 20px 0;
    font-size: 18px;
    color: #666;
}

.books-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.books-table th, 
.books-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.books-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #333;
}

.books-table tr:hover {
    background-color: #f5f5f5;
}

.available {
    color: green;
    font-weight: bold;
}

.unavailable {
    color: red;
    font-weight: bold;
}

.button-container {
    margin-top: 30px;
    text-align: center;
}

.back-button {
    background-color: #6c757d;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

.back-button:hover {
    background-color: #5a6268;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .authors-books-container {
        margin: 15px;
        padding: 15px;
    }
    
    .books-table {
        display: block;
        overflow-x: auto;
    }
    
    .authors-books-container h1 {
        font-size: 24px;
    }
}