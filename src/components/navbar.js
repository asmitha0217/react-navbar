import React from 'react';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import DownArrow from './images/down-arrow-backup-2-svgrepo-com.svg';
import Responsive from './CardsCarousel';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { dropdownOpen } = this.state;

        return (
            <nav>
                <div>
                    <li className="tuition"><h3>TUITION WORLD</h3><p>Learning App</p></li>

                </div>
                <ul>

                    <li>

                        <div className="Courses">
                            <>
                                <button onClick={this.Responsive}>Courses<img src={DownArrow}></img></button> 
                            
                            </>
                        </div>
                    </li>
                    <div className="list">
                    <li>Courses for kids<img src={DownArrow}></img></li>
                    <li>Free Study Material<img src={DownArrow}></img></li>
                    <li>Free Live  Classes</li>
                    <li>More<img src={DownArrow}></img></li>
                    </div>
                </ul>
                <div className="signinDiv">
                    <button class="signin" onClick={this.toggleDropdown}>Sign in <img src={DownArrow}></img></button>
                </div>
            </nav>
        );
    }
}

export default Navbar;
