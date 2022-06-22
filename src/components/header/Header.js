import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepositoriesBySearchQuery } from '../../redux/gitRepositorySlice';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [cantSearch, setCantSearch] = useState(true);
    const dispatch = useDispatch();
    
    function handleSearchQueryChange({ target: { value } }) {
        setSearchQuery(value);
        setCantSearch(value?.length < 1);
    }

    function handleSearchQueryClear() {
        setSearchQuery('');
        setCantSearch(true);
    }

    function handleSearch() {
        dispatch(getRepositoriesBySearchQuery(searchQuery));
    }

    return (
        <div className='navbar-fixed'>
            <nav className='teal darken-1'>
                <div className='nav-wrapper'>
                    <a href='/' className='left brand-logo' style={{'position': 'relative', 'padding': '0px 15px'}}>Repository Finder</a>
                    <ul className='right' style={{ 'paddingTop': '7px', 'paddingRight': '15px' }}>
                        <li style={{ 'backgroundColor': 'white', 'borderRadius': '3px 0px 0px 3px' }}>
                            <div className='input-field' style={{ 'height': '50px' }}>
                                <input onChange={ handleSearchQueryChange } id='search' value={ searchQuery } type='search' required style={{ 'paddingLeft': '10px' }}/>
                                <i className='material-icons' style={{ 'lineHeight': '51px' }} onClick={ handleSearchQueryClear }>close</i>
                            </div>
                        </li>
                        <li>
                            <button disabled={cantSearch } className='btn waves-effect waves-light btn-large teal darken-4' type='button' name='action' style={{
                                'height': '50px',
                                'top': '-9px',
                                'borderRadius': '0px 3px 3px 0px',
                                'boxShadow': 'none',
                            }} onClick={ handleSearch }>Search
                                <i className='material-icons right'  style={{ lineHeight: '53px' }}>search</i>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;