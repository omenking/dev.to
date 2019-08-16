import { h } from 'preact';
import PropTypes from 'prop-types';

const PublishToggle = ({
  previewShowing,
  onPreview,
  onSaveDraft,
  onPublish,
  onHelp,
  published,
  helpShowing,
  edited,
  onClearChanges,
}) => (
  <div className="buttons">
    <button
      onClick={onPreview}
      id="preview-button"
      className="comment-action-button comment-action-preview"
    >
      {previewShowing ? 'MARKDOWN' : 'PREVIEW'}
    </button>
    <input
      onClick={onPublish}
      type="submit"
      value="SUBMIT"
      id="submit-button"
      className="comment-action-button"
    />
  </div>
);

PublishToggle.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};

export default PublishToggle;
