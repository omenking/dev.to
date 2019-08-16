import { h, render } from 'preact';
import CommentForm from '../comment-form/commentForm';

document.ready.then(function() {
  loadForms();
});

function loadForms() {
  const elements = document.querySelectorAll('.comment-editor');

  for (let i = 0; i < elements.length; i++) {
    const data = elements[i].dataset.comment;
    console.log('comment dataset', data);
    render(
      <CommentForm comment={data} />,
      elements[i],
      elements[i].firstElementChild,
    );
  }
}
