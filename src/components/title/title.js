import React from 'react';
import PropTypes from 'prop-types';

title.propTypes = {
    name: PropTypes.string,
};
title.defaultProps = {
    name: 'null',
}
function title(props) {
    const name = props;
    
    return (
        <div className="title">
            <h2>{name}</h2>
        </div>
    );
}

export default title;