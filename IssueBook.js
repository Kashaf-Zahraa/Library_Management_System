/* DeleteBook.css */
.delete-book-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Arial', sans-serif;
}

.delete-book-title {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;
}

/* Toast notifications */
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 350px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.toast-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 4px;
}

.toast-success {
    background-color: #dff2bf;
    color: #4f8a10;
    border-left: 4px solid #4f8a10;
}

.toast-error {
    background-color: #ffbaba;
    color: #d8000c;
    border-left: 4px solid #d8000c;
}

.toast-info {
    background-color: #bde5f8;
    color: #00529b;
    border-left: 4px solid #00529b;
}

.toast-close {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 10px;
    color: inherit;
}

/* Search section */
.search-section {
    margin-bottom: 2rem;
}

.search-form {
    display: flex;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.search-input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.search-button {
    padding: 0.75rem 1.5rem;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
}

.search-button:hover {
    background-color: #357bd8;
}

.search-button:disabled {
    background-color: #9abde6;
    cursor: not-allowed;
}

/* Spinner for loading states */
.spinner {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    margin-right: 0.5rem;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Books table */
.books-table-container {
    margin-bottom: 2rem;
    overflow-x: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.books-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
}

.books-table th, .books-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.books-table th {
    background-color: #f5f5f5;
    font-weight: bold;
    color: #333;
}

.books-table tr:last-child td {
    border-bottom: none;
}

.books-table tbody tr:hover {
    background-color: #f9f9f9;
}

.delete-button {
    padding: 0.5rem 1rem;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.delete-button:hover {
    background-color: #c0392b;
}

.delete-button:disabled {
    background-color: #e6a5a5;
    cursor: not-allowed;
}

/* Back button */
.back-button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.back-to-dashboard-button {
    padding: 0.75rem 1.5rem;
    background-color: #3a3a3a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.back-to-dashboard-button:hover {
    background-color: #1f1f1f;
}

/* Modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-container {
    background-color: white;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e0e0e0;
}

.modal-header h3 {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
}

.error-header {
    background-color: #ffebee;
    color: #d32f2f;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
}

.modal-close:hover {
    color: #333;
}

.modal-body {
    padding: 1.5rem;
}

.book-title-highlight {
    font-weight: bold;
    color: #e74c3c;
    font-size: 1.1rem;
    margin: 1rem 0;
}

.warning-text {
    color: #f39c12;
    font-style: italic;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-top: 1px solid #e0e0e0;
}

.cancel-button {
    padding: 0.5rem 1.25rem;
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;
}

.cancel-button:hover {
    background-color: #e0e0e0;
}

.confirm-delete-button {
    padding: 0.5rem 1.25rem;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
}

.confirm-delete-button:hover {
    background-color: #c0392b;
}

.confirm-delete-button:disabled {
    background-color: #e6a5a5;
    cursor: not-allowed;
}

/* Error modal specific styles */
.error-modal {
    border-top: 5px solid #d32f2f;
}

.error-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.error-icon svg {
    width: 4rem;
    height: 4rem;
    color: #d32f2f;
}

.error-message {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #d32f2f;
}

.error-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 1rem;
}

.understand-button {
    padding: 0.5rem 1.25rem;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;
}

.understand-button:hover {
    background-color: #1976d2;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .delete-book-container {
        padding: 1rem;
    }
    
    .search-form {
        flex-direction: column;
    }
    
    .search-button {
        width: 100%;
        justify-content: center;
    }
    
    .books-table th, .books-table td {
        padding: 0.75rem 0.5rem;
        font-size: 0.9rem;
    }
    
    .delete-button {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }
    
    .modal-container {
        width: 95%;
    }
}