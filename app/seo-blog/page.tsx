import BlogHero from '@/components/blogpage/BlogHero'
import BlogItems from '@/components/blogpage/BlogItems'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'The DossX Growth Lab',
}

export interface Blog2Type {
  slug: string
  content: string
  [key: string]: any
}

// ✅ Updated to load from new blog folder
const loadedBlogs: Blog2Type[] = getMarkDownData('data/dossx-blog')

const BlogPage02 = () => {
  return (
    <LayoutOne>
      {/* ✅ Updated hero title to match new blog brand */}
      <BlogHero
        title="The DossX Growth Lab"
        subtitle="Insights, strategies, and stories on how AI is reshaping business — from automation to revenue growth."
      />
      <BlogItems loadedBlogs={loadedBlogs} />
    </LayoutOne>
  )
}

export default BlogPage02