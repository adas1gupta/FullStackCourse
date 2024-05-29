import React from 'react';
import { connect } from 'react-redux';

const SurveyReview = ({onCancel}) => {
    return (
        <div> 
            <h5> Please confirm your entries </h5>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
            </div>
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
        </div>
    );
};

function mapStateToProps () {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps)(SurveyFormReview);