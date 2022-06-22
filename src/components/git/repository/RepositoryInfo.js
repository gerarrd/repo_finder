import React from 'react';

function RepositoryInfo(props) {
    const { item } = props;
    return (
    <div className='col s12 m7'>
        <div className='card horizontal'>
            <div className='card-image'>
                <img src={ item.owner?.avatar_url } 
                style={{ 'padding': '2px', 'width': '166px', 'height': '166px', 'borderRadius': '50%', 'margin': '20px' }} 
                className='teal darken-1'/>
            </div>
            <div className='card-stacked'>
                <div className='card-content'>
                    <span className='card-title teal-text text-darken-1'>{ item.name }</span>
                    <p>{ item.description }</p>
                </div>
                <div className='card-action'>
                    <span className='yellow-text' style={{ 'fontSize': '30px' }}><i className='material-icons'>star</i>{ item.stargazers_count }</span>
                    <span className='yellow-text text-darken-2' style={{ 'fontSize': '30px' }}><i className='material-icons'>ic_call_split</i>{ item.forks_count }</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RepositoryInfo;