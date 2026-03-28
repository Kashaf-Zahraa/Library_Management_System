const { sql, poolPromise } = require('../config/db');

class Librarian {
    // Librarian login
    static async login(credentials) {
        try {
            const { Email, Password } = credentials;
            const pool = await poolPromise;
            
            const result = await pool.request()
                .input('Email', sql.VarChar, Email)
                .input('Password', sql.VarChar, Password)
                .execute('LibrarianLogin');
            
            if (result.recordset.length > 0) {
                return { 
                    success: true, 
                    userId: result.recordset[0].UserID,
                    userName: result.recordset[0].Name 
                };
            } else {
                return { success: false };
            }
        } catch (error) {
            throw error;
        }
    }
    
    // Change librarian password
    static async changePassword(passwordData) {
        try {
            const { Email, OldPassword, NewPassword, UserType } = passwordData;
            console.log(`Attempting to change password for ${Email} (${UserType})`);
            
            const pool = await poolPromise;
            
            // Check if the old password is correct
            const checkQuery = `SELECT COUNT(*) AS Count FROM Librarian WHERE Email = @Email AND Password = @OldPassword`;
            
            const checkResult = await pool.request()
                .input('Email', sql.VarChar, Email)
                .input('OldPassword', sql.VarChar, OldPassword)
                .query(checkQuery);
            
            const passwordCorrect = checkResult.recordset[0].Count > 0;
            console.log(`Password check result: ${passwordCorrect ? 'Correct' : 'Incorrect'}`);
            
            if (!passwordCorrect) {
                return { 
                    success: false, 
                    message: 'Incorrect old password' 
                };
            }
            
            // Now execute stored procedure
            console.log('Executing stored procedure');
            await pool.request()
                .input('Email', sql.VarChar, Email)
                .input('OldPassword', sql.VarChar, OldPassword)
                .input('NewPassword', sql.VarChar, NewPassword)
                .input('UserType', sql.VarChar, UserType)
                .execute('ChangingPasswords');
            
            // Verify if the password was actually changed
            const verifyQuery = `SELECT COUNT(*) AS Count FROM Librarian WHERE Email = @Email AND Password = @NewPassword`;
            
            const verifyResult = await pool.request()
                .input('Email', sql.VarChar, Email)
                .input('NewPassword', sql.VarChar, NewPassword)
                .query(verifyQuery);
            
            const passwordChanged = verifyResult.recordset[0].Count > 0;
            console.log(`Password change verification: ${passwordChanged ? 'Changed' : 'Not Changed'}`);
            
            return { 
                success: passwordChanged, 
                message: passwordChanged ? 'Password updated successfully!' : 'Failed to update password'
            };
        } catch (error) {
            console.error('Error in changePassword:', error);
            return {
                success: false,
                message: 'An error occurred while changing password: ' + error.message
            };
        }
    }
}

module.exports = Librarian;