import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map((option) => (
                <button
                    type="button"
                    key={option}
                    onClick={()=>onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default FeedbackOptions;