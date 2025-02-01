import { blogPosts } from "@/app/blog-data/blog_data";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>

      {/* Display Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto mb-4 rounded-lg shadow-lg"
      />

      <div className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
        <p className="font-medium">By {post.author}</p>
        <p className="text-gray-500">{post.date} · {post.readingTime}</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold text-sm sm:text-base lg:text-lg">Categories: 
          {post.categories.map((category, index) => (
            <span key={index} className="ml-2 text-blue-500">{category}</span>
          ))}
        </p>
        <p className="font-semibold text-sm sm:text-base lg:text-lg mt-2">Tags: 
          {post.tags.map((tag, index) => (
            <span key={index} className="ml-2 text-blue-500">{tag}</span>
          ))}
        </p>
      </div>

      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 mb-4">
        {post.content}
      </p>

      <a
        href="/blogs"
        className="text-blue-500 mt-4 inline-block text-sm sm:text-base hover:underline"
      >
        ← Back to Blogs
      </a>
    </div>
  );
}
