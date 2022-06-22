import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepositoriesBySearchQuery } from '../../../redux/gitRepositorySlice';
import {
    selectRepositorySearchLoading,
    selectRepositorySearchResults,
    selectRepositorySearchError
} from './selector';

import RepositoryInfo from './RepositoryInfo';

function RepositoryList() {
    const searching = useSelector(selectRepositorySearchLoading);
    const searchError = useSelector(selectRepositorySearchError);
    const searchResults = useSelector(selectRepositorySearchResults);
    const dispatch = useDispatch();

    function handleLoadMore() {
        dispatch(getRepositoriesBySearchQuery(null, true));
    }

    function showList() {
        return (
            <>
                {searchResults.items?.map((item, idx) => {
                    return <RepositoryInfo item= { item } key={ idx} />
                })}
            </>
        );
    };

    function showLoadMore() {
        return (
            <button className="waves-effect waves-light btn btn-large" style={{ 'marginBottom': '20px'}} onClick={ handleLoadMore }>
                <i className="material-icons left">search</i>
                LOAD MORE
            </button>
        );
    }

    function showLoader() {
        return (
            <div className="progress" style={{ 'height': '30px' }}>
                <div className="indeterminate"></div>
            </div>
        );
    }

    function showStartPage() {
        if(!searchResults.hasOwnProperty('total_count') && !searchError && !searching) {
            return (
                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s12">
                                <h5 className="black-text">
                                    Input search query to find github repositories.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(searchError) {
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel red lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s12">
                                <h5 className="white-text">
                                    Error encountered while searching github repositories.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
        } else {
            return null;
        }
    }

    return (
        <div className="container">
            { showStartPage() }
            { showList() }
            { searching? showLoader(): null }
            { !searching && searchResults.total_count > searchResults.items?.length? showLoadMore(): null}
        </div>
    );
}

export default RepositoryList;

/**
 * if(!searchResults.hasOwnProperty('items') && !searching && !searchError) {
            
        } else if( searchResults.total_count > 0){
            
        }
 */