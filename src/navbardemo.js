import React from 'react';
import './navbar.css';



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
np
    render() {
        const { dropdownOpen } = this.state;

        return (
            <nav>
                <ul>
                <li class="tuition"><h3>TUITION WORLD</h3><p>Learning App</p></li>
                     
                    <li>
                    
                    <div className="Courses">
                         <button onClick={this.toggleDropdown}>Courses</button>
                       </div>    
                    </li>
                    <li>Courses for kids</li>
                    <li>Free Study Material</li>
                    <li>Free Live  Classes</li>
                    <li>more</li>
                    <li>
                    <button  class="signin" onClick={this.toggleDropdown}>Sign in</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
<div className="Freestudymaterial">
<button onClick={this.toggleDropdown}>Free study material</button>
{dropdownOpen && (
    <ul className="Courses">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
    </ul>
)}  
</div>