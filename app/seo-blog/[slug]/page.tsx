import BlogContent from '@/components/blogpage/BlogContent'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import { Blog2Type } from '../page'

export async function generateStaticParams() {
  const blogs: Blog2Type[] = getMarkDownData('data/dossx-blog') // ✅ updated path

  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const blog = getMarkDownContent('data/dossx-blog/', slug) // ✅ updated path
  const postBlog = blog.data

  return (
    <LayoutOne>
      <PageHero
        badgeTitle="The DossX Growth Lab"
        title={postBlog.title}
        description={postBlog.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogContent blog={blog} />
    </LayoutOne>
  )
}

export default BlogDetails