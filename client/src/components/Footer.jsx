import React from 'react';
import '../styles/footer.css';

const Component = () => {
    // <a id="author" rel="noopener noreferrer" href="https://vk.com/ivanbaranov92" target="_blank">Ivan Baranov 2018</a>
    return(
        <footer className="menu_main">
            <div className="footer">
                <p>V-1.2 (beta)</p>
                <p>&copy; Ivan Baranov 2018</p>
            </div>
        </footer>
    )
}

export default Component;