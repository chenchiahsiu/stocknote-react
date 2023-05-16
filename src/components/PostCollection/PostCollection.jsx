import Post from 'components/Post/Post'

const PostCollection = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post key={post.id} post={post} onDelete={(id) => onDelete?.(id)} />
        )
      })}
    </div>
  )
}

export default PostCollection
