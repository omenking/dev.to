import { h } from 'preact';
import PropTypes from 'prop-types';

const BodyPreview = ({ previewHTML, version, articleState }) => (
  <div
    id="preview-div"
    className="comment-preview-div"
    dangerouslySetInnerHTML={{ __html: previewHTML }}
  />
);

BodyPreview.propTypes = {
  previewHTML: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default BodyPreview;
