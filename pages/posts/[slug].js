import client from '../api/contentful'

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: 'post' })
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug
  })

  return {
    props: { post: items[0] }
  }
}

export default function PostDetails({ post }) {
  console.log('details page', post)
  return (
    <div>details page...</div>
  )
}