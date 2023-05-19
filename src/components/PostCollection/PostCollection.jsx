import Post from 'components/Post/Post'

const PostCollection = ({ posts, onDelete, onLike }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            onDelete={(id) => onDelete?.(id)}
            onLike={(id) => onLike?.(id)}
          />
        )
      })}
    </div>
  )
}

export default PostCollection
