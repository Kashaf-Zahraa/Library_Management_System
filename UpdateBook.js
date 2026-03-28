/* StudentDashboard.css */
.dashboard-container {
    max-width: 600px;
    margin: 50px auto;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f9fa;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
}

.dashboard-container h1 {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 20px;
}

.dashboard-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

.dashboard-buttons button {
    width: 200px;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

/* All buttons except the last one (logout) will be blue */
.dashboard-buttons button {
    background-color: #3498db;
    color: white;
}

.dashboard-buttons button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

.dashboard-buttons button:active {
    transform: translateY(1px);
}

/* Last button (logout) remains red */
.dashboard-buttons button:last-child {
    background-color: #e74c3c;
    color: white;
    margin-top: 10px;
}

.dashboard-buttons button:last-child:hover {
    background-color: #c0392b;
}

/* User info display styles */
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

/* Responsive adjustments */
@media (max-width: 650px) {
    .dashboard-container {
        margin: 20px 10px;
        padding: 15px;
    }
    
    .dashboard-buttons button {
        width: 90%;
    }
    
    .user-info-display {
        position: static;
        margin-bottom: 20px;
        text-align: center;
    }
}