.update-book-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.update-title {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
}

.search-section {
    margin-bottom: 30px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-section h2 {
    margin-top: 0;
    font-size: 18px;
    color: #444;
}

.search-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.book-list {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
}

.book-item {
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: background-color 0.2s;
}

.book-item:hover {
    background-color: #f0f7ff;
}

.book-item.selected {
    background-color: #e3f2fd;
    border-left: 4px solid #2196F3;
}

.book-title {
    font-weight: bold;
    margin-bottom: 5px;
}

.book-isbn {
    font-size: 14px;
    color: #666;
}

.no-books {
    padding: 20px;
    text-align: center;
    color: #666;
    font-style: italic;
}

.update-form {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.update-form h2 {
    margin-top: 0;
    font-size: 18px;
    color: #444;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.update-button {
    background-color: #4CAF50;
    color: white;
}

.update-button:hover {
    background-color: #388E3C;
}

.cancel-button {
    background-color: #f44336;
    color: white;
}

.cancel-button:hover {
    background-color: #d32f2f;
}

.message {
    margin-top: 20px;
    padding: 10px 15px;
    border-radius: 4px;
    text-align: center;
}

.message.success {
    background-color: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #a5d6a7;
}

.message.error {
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #ef9a9a;
}