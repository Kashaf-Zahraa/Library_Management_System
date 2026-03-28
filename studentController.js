const Student = require('../models/Student');
const Librarian = require('../models/Librarian');

// Student login
exports.studentLogin = async (req, res) => {
    try {
        console.log("Incoming Student Login Request:", req.body);
        const result = await Student.login(req.body);
        
        if (result.success) {
            res.json({ 
                success: true, 
                userId: result.userId,
                userName: result.userName,
                userRole: 'Student'
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid Credentials' });
        }
    } catch (err) {
        console.error("Error during Student Login:", err);
        res.status(500).json({ error: "Internal server error!" });
    }
};

// Librarian login
exports.librarianLogin = async (req, res) => {
    try {
        console.log("Incoming Librarian Login Request:", req.body);
        const result = await Librarian.login(req.body);
        
        if (result.success) {
            res.json({ 
                success: true, 
                userId: result.userId,
                userName: result.userName,
                userRole: 'Librarian'
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid Credentials' });
        }
    } catch (err) {
        console.error("Error during Librarian Login:", err);
        res.status(500).json({ error: "Internal server error!" });
    }
};

// Change password for both student and librarian
exports.changePassword = async (req, res) => {
    try {
        const { Email, OldPassword, NewPassword, UserType } = req.body;
        console.log(`Change password request for ${Email} (${UserType})`);
        
        let result;
        if (UserType === 'Student') {
            console.log('Processing as Student');
            result = await Student.changePassword(req.body);
        } else if (UserType === 'Librarian') {
            console.log('Processing as Librarian');
            result = await Librarian.changePassword(req.body);
        } else {
            console.log(`Invalid user type: ${UserType}`);
            return res.status(400).json({ success: false, error: "Invalid user type!" });
        }
        
        console.log('Password change result:', result);
        
        if (result.success) {
            console.log('Returning success response');
            res.json({ success: true, message: 'Password updated successfully!' });
        } else {
            console.log('Returning failure response');
            res.status(400).json({ 
                success: false, 
                error: result.message || 'Incorrect old password!' 
            });
        }
    } catch (err) {
        console.error("Error during password change:", err);
        res.status(500).json({ success: false, error: "Internal server error!" });
    }
};