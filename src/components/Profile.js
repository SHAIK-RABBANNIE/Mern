// Profile.js
import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Profile = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const [username, setUsername] = useState('kl_2300090093');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [deletePicture, setDeletePicture] = useState(false);

    const handlePictureChange = (event) => {
        setProfilePicture(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({
            username,
            dob,
            gender,
            profilePicture,
            deletePicture,
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Clear the token or session data
        navigate('/logout'); // Redirect to the Logout page
    };

    return (
        <div className="profile-container">
            <aside className="profile-sidebar">
                <img
                    src={profilePicture ? URL.createObjectURL(profilePicture) : 'default_profile_picture.png'}
                    alt="Profile"
                />
                <p>{username}</p>
                <nav>
                    <ul>
                        <li>General</li>
                        <li>Personal</li>
                        <li>Professional</li>
                        <li>Login</li>
                        <li>Change Username</li>
                        <li>Notifications</li>
                        <li>Privacy</li>
                    </ul>
                </nav>
            </aside>

            <main className="profile-edit-area">
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="upload-picture">Upload picture of yourself:</label>
                    <input
                        type="file"
                        id="upload-picture"
                        accept="image/jpeg, image/png"
                        onChange={handlePictureChange}
                    />
                    <p>Max size allowed is 1MB.</p>

                    <label>
                        <input
                            type="checkbox"
                            checked={deletePicture}
                            onChange={() => setDeletePicture(!deletePicture)}
                        />
                        Delete Profile Picture
                    </label>

                    <label htmlFor="username">Your Name: *</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="dob">Your Date of birth:</label>
                    <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />

                    <p>Gender:</p>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={(e) => setGender(e.target.value)}
                        />{' '}
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            onChange={(e) => setGender(e.target.value)}
                        />{' '}
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={gender === 'other'}
                            onChange={(e) => setGender(e.target.value)}
                        />{' '}
                        Other
                    </label>

                    <button type="submit">Save</button>
                </form>

                {/* Logout Button */}
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </main>
        </div>
    );
};

export default Profile;
