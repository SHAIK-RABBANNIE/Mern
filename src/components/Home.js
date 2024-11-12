import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you're using a separate CSS file

const Home = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        course: '',
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
        setIsFormVisible(false); // Close the modal after submission
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <>
            <header>
                <h1>LearnNow Online Courses</h1>
                <p>Your gateway to knowledge</p>
                <button className="register-button" onClick={toggleFormVisibility}>
                    Register for a Course
                </button>
                <Link to="/profile">
                    <button className="profile-button">Profile</button>
                </Link>
                {/* Self Learning Button */}
                <Link to="/self-learning">
                    <button className="self-learning-button">Self Learning</button>
                </Link>
                <Link to="/Assignment">
                    <button className="Assignment">Assignments</button>
                </Link>
            </header>

            <div className="link-section">
                <p>
                    To get Registered, visit our - 
                    <a href="https://forms.gle/iRmCzWSej6nLeUb78" target="_blank" rel="noopener noreferrer" className="link">
                        Google Form
                    </a>
                </p>
            </div>

            <div className="notification-bar" id="notification-bar">
                <p id="notification-message"></p>
            </div>

            <div className="search-container">
                <input type="text" id="search-input" placeholder="Search courses..." />
            </div>
{/* Home Page Section */}
<div id="home-page" className="container">
                <h2>Popular Courses</h2>
                
                <div className="course-grid">
                    {/* Course 1 */}
                    <div className="course-card">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.Lw5fi5xCtYfoaG7B5qVF2QHaEK&pid=Api&P=0&h=180" alt="Course 1" />
                        <h3>Web Development Basics</h3>
                        <p>Learn HTML, CSS, and JavaScript to build your first website.</p>
                        <button onClick={() => setFormData({ ...formData, course: 'Web Development Basics' })}>Enroll Now</button>
                        <Link to="/videos/web-development">
                            <button className="videos-button">Videos</button>
                        </Link>
                    </div>

                    {/* Course 2 */}
                    <div className="course-card">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.JF5LAyPzzwgiCe_AjKH7IgHaD4&pid=Api&P=0&h=180" alt="Course 2" />
                        <h3>Python for Data Science</h3>
                        <p>Master Python and explore data science techniques and libraries.</p>
                        <button onClick={() => setFormData({ ...formData, course: 'Python for Data Science' })}>Enroll Now</button>
                        <Link to="/videos/python-data-science">
                            <button className="videos-button">Videos</button>
                        </Link>
                    </div>

                    {/* Course 3 */}
                    <div className="course-card">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.wXWeaxsLXE85npm-CsK15gHaD4&pid=Api&P=0&h=180" alt="Course 3" />
                        <h3>Aoop by Suresh Sir</h3>
                        <p>Hurry up! Only 3 slots are available.</p>
                        <button onClick={() => setFormData({ ...formData, course: 'Aoop by Suresh Sir' })}>Enroll Now</button>
                        <Link to="/videos/aoop-by-suresh">
                            <button className="videos-button">Videos</button>
                        </Link>
                    </div>

                    {/* Course 4 */}
                    <div className="course-card">
                        <img src="https://www.kali.org/blog/kali-linux-1-1-0-release/images/kali-wallpaper-2015-v1.1.0.png" alt="Course 4" />
                        <h3>Hacking with Kali Linux</h3>
                        <p>Learn ethical hacking with Kali Linux.</p>
                        <button onClick={() => setFormData({ ...formData, course: 'Hacking with Kali Linux' })}>Enroll Now</button>
                        <Link to="/videos/hacking-kali-linux">
                            <button className="videos-button">Videos</button>
                        </Link>
                    </div>

                    {/* Course 5 */}
                    <div className="course-card">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.skLSi71M3pQg42uTS9vs7QHaE7&pid=Api&P=0&h=180" alt="Course 5" />
                        <h3>Machine Learning</h3>
                        <p>Explore machine learning concepts and techniques.</p>
                        <button onClick={() => setFormData({ ...formData, course: 'Machine Learning' })}>Enroll Now</button>
                        <Link to="/videos/machine-learning">
                            <button className="videos-button">Videos</button>
                        </Link>
                    </div>

                    {/* Course 6 */}
                    <div className="course-card">
                        <img src="https://www.theiotacademy.co/blog/wp-content/uploads/2024/02/Introduction-to-Mongo-DB.webp" alt="Course 6" />
                        <h3>MongoDB Basics</h3>
                        <p>Get started with MongoDB, a popular NoSQL database.</p>
                        <button onClick={() => setFormData({ ...formData, course: 'MongoDB Basics' })}>Enroll Now</button>
                        <Link to="/videos/mongodb-basics">
                            <button className="videos-button">Videos</button>
                        </Link>
                    </div>
                </div>
            </div>

            {isFormVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-button" onClick={toggleFormVisibility}>&times;</span>
                        <h2>Course Registration Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="course">Course:</label>
                                <input
                                    type="text"
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    readOnly
                                />
                            </div>
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
