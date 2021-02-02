import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div id="page-preloader" className="preloader">
                    <div className="loader"></div>
                </div>
                <h1>Хай! Здесь вы можете посмотреть информацию по Университетам</h1>
            </div>
        )
    }
}

