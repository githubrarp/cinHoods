/**
 * Exercise #
 *
 */

const img_wrapper = document.querySelector('.img_wrapper');
const like_full = document.createElement('img');
const like_empty = document.createElement('img');
const comment = document.createElement('img');

like_full.setAttribute('src', 'img/like_full.png');
like_empty.setAttribute('src', 'img/like_empty.png');
comment.setAttribute('src', 'img/comment_empty.png')

img_wrapper.appendChild(like_empty);
img_wrapper.appendChild(comment);

like_empty.addEventListener('click', function () {
    like_empty.setAttribute('src', 'img/like_full.png')
})


comment.addEventListener('click', function () {
    const post = document.querySelector('.post')
    const newComment = document.createElement('div');
    const commentBox = document.createElement('textarea');
    const btnCancel = document.createElement('button');
    const btnSubmit = document.createElement('button');

    btnCancel.textContent = 'Cancel';
    btnSubmit.textContent = 'Submit';

    newComment.appendChild(commentBox);
    newComment.appendChild(btnCancel);
    newComment.appendChild(btnSubmit);
    post.appendChild(newComment);
})