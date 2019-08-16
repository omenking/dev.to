import 'preact/devtools';
import { h, Component } from 'preact';
import linkState from 'linkstate';
import { submitComment, previewComment } from './actions';
import BodyMarkdown from './elements/bodyMarkdown';
import BodyPreview from './elements/bodyPreview';
import PublishToggle from './elements/publishToggle';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.comment = JSON.parse(this.props.comment);

    this.state = {
      id: this.comment.id || null,
      body_markdown: this.comment.body_markdown || null,
      commentable_id: this.comment.commentable_id || null,
      commentable_type: this.comment.commentable_type || null,
      parent_id: this.comment.parent_id || null,
      previewShowing: false,
      helpShowing: false,
    };
  }

  componentDidMount() {}

  onPublish = e => {
    e.preventDefault();
    this.setState({ submitting: true, published: true });
    const { state } = this;
    state.published = true;
    submitComment(state, this.removeLocalStorage, this.handleCommentError);
  };

  fetchPreview = e => {
    e.preventDefault();
    if (this.state.previewShowing) {
      this.setState({
        previewShowing: false,
        helpShowing: false,
      });
    } else {
      previewComment(
        this.state.body_markdown,
        this.showPreview,
        this.failedPreview,
      );
    }
  };

  showPreview = response => {
    this.setState({
      previewShowing: true,
      helpShowing: false,
      previewHTML: response.processed_html,
    });
  };

  handleCommentError = response => {
    window.scrollTo(0, 0);
    this.setState({
      errors: response,
      submitting: false,
    });
  };

  failedPreview = response => {
    console.log(response);
  };

  render() {
    const {
      previewHTML,
      previewShowing,
      body_markdown,
      helpShowing,
    } = this.state;

    return (
      <form id="new_comment" className="new_comment">
        {previewShowing ? (
          <BodyPreview
            previewHTML={previewHTML}
            articleState={this.state}
            version="article-preview"
          />
        ) : (
          <BodyMarkdown
            defaultValue={body_markdown}
            onChange={linkState(this, 'body_markdown')}
          />
        )}

        <div className="actions">
          <PublishToggle
            previewShowing={previewShowing}
            helpShowing={helpShowing}
            onPreview={this.fetchPreview}
            onPublish={this.onPublish}
            onHelp={this.toggleHelp}
            onClearChanges={this.onClearChanges}
            edited={this.state.edited}
            onChange={linkState(this, 'published')}
          />
        </div>
      </form>
    );
  }
}
