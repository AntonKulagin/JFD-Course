const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'


const crearePostBlock = (title, body) => {
	const post = document.createElement('div')
	post.className = 'post'
	post.id = 'post'

	const postTitle = document.createElement('h1')
	postTitle.className = 'post__title'
	postTitle.textContent = title

	const postText = document.createElement('p')
	postText.className = 'post__text'
	postText.textContent = body

	const postComment = document.createElement('b')
	postComment.className = 'post__comments-text'
	postComment.textContent = 'Комментарии'

	const commentsBlock = document.createElement('div')
	commentsBlock.className = 'post__comments'

	post.append(postTitle)
	post.append(postText)
	post.append(postComment)
	post.append(commentsBlock)

	return post
}

const createCommentElement = (email, body) => {
	const comment = document.createElement('div')
	comment.className = 'post__comment'

	const author = document.createElement('span')
	author.className = 'post-comment__author'
	author.textContent = email

	const text = document.createElement('span')
	text.className = 'post-comment__text'
	text.textContent = body

	comment.append(author)
	comment.append(text)

	return comment
}


const renderPost = async (postIdpostId) => {
	try {
		const post = await fetch(`${POSTS_URL}/${postIdpostId}`)
		const comments = await fetch(`${COMMENTS_URL}?postId=${postIdpostId}`)

		const dataPost = await post.json()
		const dataComments = await comments.json()

		const bodyHTML = document.body
		bodyHTML.prepend(crearePostBlock(dataPost.title, dataPost.body))

		const commentsBlock = bodyHTML.querySelector('.post__comments')
		dataComments.forEach(comment => {
			commentsBlock.append(createCommentElement(comment.email, comment.body))
		})
	} catch (error) {
		console.error('error', error)
	} finally {
		console.log('Finally')
	}
}

renderPost(1)
