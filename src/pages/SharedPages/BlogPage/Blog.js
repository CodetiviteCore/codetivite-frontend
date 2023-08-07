import React from 'react'
import BlogImage from "../../../assets/images/blogPicture.png"
import AuthorAvatar from "../../../assets/images/blogAvatar.png"
import LatestPostImage from "../../../assets/images/lastestPost.png"
import { BlogCards } from '../../../ui_elements/BLogcards/blogCards'
import { BlogPageContainer, BlogPageOuterContainer, LatestPostContainer, LatestPostOuterContainer } from './Blog.styles';
import { Button, LatestPostsCards } from '../../../ui_elements'

const Blog = () => {
  const blogCardDetails = [
    {
      image: BlogImage,
      category: "news",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
    {
      image: BlogImage,
      category: "products",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
    {
      image: BlogImage,
      category: "tech",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
    {
      image: BlogImage,
      category: "news",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
    {
      image: BlogImage,
      category: "products",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
    {
      image: BlogImage,
      category: "tech",
      title: "Lorem ipsum dolor sit amet consectetur. Eu est praesent eleifend.",
      description: "Lorem ipsum dolor sit amet consectetur. Est phasellus quis suspendisse augue sed tellus id. Elementum imperdiet.",
      avater: AuthorAvatar,
      author: "Prince Chijioke",
      time: "Mon, 26 Jan 2023"
    },
  ]
  const lastestPostDetails = [
    {
      image: LatestPostImage,
      title: "New Development Software for 2023",
      avatar: AuthorAvatar,
      time: "5 min read",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
      author: "Prince Chijioke",
      category: "Software",
      date: "Mon, 26 Jan 2023"

    },
    {
      image: LatestPostImage,
      title: "New Development Software for 2023",
      avatar: AuthorAvatar,
      time: "5 min read",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
      author: "Prince Chijioke",
      category: "Software",
      date: "Mon, 26 Jan 2023"

    },
    {
      image: LatestPostImage,
      title: "New Development Software for 2023",
      avatar: AuthorAvatar,
      time: "5 min read",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
      author: "Prince Chijioke",
      category: "Software",
      date: "Mon, 26 Jan 2023"

    },
    {
      image: LatestPostImage,
      title: "New Development Software for 2023",
      avatar: AuthorAvatar,
      time: "5 min read",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
      author: "Prince Chijioke",
      category: "Software",
      date: "Mon, 26 Jan 2023"

    },

  ]
  return (
    <div>
      <BlogPageOuterContainer>
        <BlogPageContainer>
          {
            blogCardDetails.map((card, index) =>
              <BlogCards
                key={index}
                image={card.image}
                category={card.category}
                title={card.title}
                description={card.description}
                avater={card.avater}
                author={card.author}
                time={card.time}
              />
            )
          }
        </BlogPageContainer>
        <Button primary>Load More Posts</Button>
      </BlogPageOuterContainer>
      <LatestPostOuterContainer>
        <h2>Latest posts</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <LatestPostContainer>
          {
            lastestPostDetails.map((post, index) =>
              <LatestPostsCards
                key={index}
                image={post.image}
                category={post.category}
                avatar={post.avatar}
                author={post.author}
                time={post.time}
                title={post.title}
                description={post.description}
                date={post.date}

              />
            )
          }
        </LatestPostContainer>
      </LatestPostOuterContainer>
    </div>



  )
}

export default Blog
