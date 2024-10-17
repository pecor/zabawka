import './styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a leading company dedicated to providing innovative solutions for our customers.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main St, City, Country</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
