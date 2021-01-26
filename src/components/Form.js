import React from "react";
import PropTypes from 'prop-types';

export const Form = props => <form onSubmit={props.onSubmit}>{props.children}</form>

Form.propTypes = {
    onSubmit: PropTypes.func
};