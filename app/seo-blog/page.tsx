import BlogHero from '@/components/blogpage/BlogHero'
import BlogItems from '@/components/blogpage/BlogItems'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'DossX Growth Lab | Insights on Web, Automation & AI',
  description: 'Insights on performance web infrastructure, AI workflows, automation strategy, and building scalable SaaS systems.',
}

export interface Blog2Type {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlogs: Blog2Type[] = getMarkDownData('data/dossx-blog')

const BlogPage02 = () => {
  return (
    <LayoutOne>
      <BlogHero
        title="DossX Growth Lab"
        subtitle="Insights on performance web infrastructure, AI workflows, automation strategy, and building scalable SaaS systems."
      />
      <BlogItems loadedBlogs={loadedBlogs} />
    </LayoutOne>
  )
}

export default BlogPage02