.dashboard-container {
    max-width: 800px;
    margin: 50px auto;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 30px;
    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.dashboard-title {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 30px;
}

.dashboard-content {
    margin-top: 20px;
}

.dashboard-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

.dashboard-link {
    display: block;
    width: 250px;
    padding: 12px 20px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.dashboard-link:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logout-link {
    background-color: #e74c3c;
    margin-top: 10px;
}

.logout-link:hover {
    background-color: #c0392b;
}

/* User info display styling */
.user-info-display {
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: right;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.user-name {
    font-weight: bold;
    font-size: 18px;
    color: #333;
}

.user-id {
    font-size: 14px;
    color: #666;
    margin-top: 4px;
}

/* Change password styling inherited from the provided CSS */