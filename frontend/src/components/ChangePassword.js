import React, { useState } from 'react';

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        // Add password change logic here
        alert('Password changed successfully!');
    };

    return (
        <div>
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
                <input
                    type="password"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="submit">Change Password</button>
            </form>
        </div>
    );
}

export default ChangePassword;
