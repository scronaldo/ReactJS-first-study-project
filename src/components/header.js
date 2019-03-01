import React from 'react';
import '../css/styles.css'

// functional comp receiveng props
const Header = (props) =>{
    // return html
        return ( 
            <header>
                <div className='logo'>Logo</div>
                <input  
                    style={{color: 'orange', textAlign: 'center'}}
                    placeholder=' filter news by title ' 
                    type="text" 
                    onChange={props.keywords}
                />
            </header>
        )
}

// export to other modules
export default Header;