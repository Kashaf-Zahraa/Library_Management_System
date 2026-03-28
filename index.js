
/* ViewBooks.css */
.view-books-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
}

.loading-message {
    text-align: center;
    color: #3498db;
    font-size: 1.2rem;
    margin: 40px 0;
}

.error-message {
    background-color: #ffebee;
    border: 1px solid #f44336;
    border-radius: 4px;
    padding: 15px;
    margin: 20px 0;
    color: #d32f2f;
    text-align: center;
}

.error-message button {
    background-color: #2196f3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 0.9rem;
}

.error-message button:hover {
    background-color: #0d8bf2;
}

.no-books-message {
    text-align: center;
    color: #7f8c8d;
    font-size: 1.1rem;
    margin: 40px 0;
}

.books-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

.books-table th {
    background-color: #34495e;
    color: white;
    padding: 12px 15px;
    text-align: left;
    font-weight: bold;
}

.books-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.books-table tr:hover {
    background-color: #e6f7ff;
}

.books-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
}

/* Status colors */
.books-table td.available {
    color: #27ae60;
    font-weight: bold;
}

.books-table td.unavailable {
    color: #e74c3c;
    font-weight: bold;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.back-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #2980b9;
}

@media (max-width: 768px) {
    .books-table {
        font-size: 0.9rem;
    }
    
    .books-table th, 
    .books-table td {
        padding: 8px;
    }
    
    h1 {
        font-size: 1.8rem;
    }
}

@media (max-width: 576px) {
    .books-table {
        font-size: 0.8rem;
    }
    
    .view-books-container {
        padding: 10px;
    }
    
    h1 {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
}