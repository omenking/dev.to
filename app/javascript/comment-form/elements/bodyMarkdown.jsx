import { h } from 'preact';
import PropTypes from 'prop-types';

const BodyMarkdown = ({ onChange, defaultValue }) => (
  <div className="field" id="textarea-wrapper">
    <textarea
      id="text-area"
      placeholder="Add to the discussion"
      value={defaultValue}
      onInput={onChange}
      name="comment[body_markdown]"
    />
  </div>
);

BodyMarkdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default BodyMarkdown;
