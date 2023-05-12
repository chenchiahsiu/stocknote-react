import Post from 'components/Post/Post'

const PostCollection = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />
      })}
    </div>
  )
}

export default PostCollection
