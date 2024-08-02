// src/components/BlogPost.js
import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Link, Avatar } from '@mui/material';
import axios from 'axios';

const BlogPost = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
      const fetchBlogPosts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/research/findings');
          setBlogPosts(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching blog posts:', error);
        }
      };
  
      fetchBlogPosts();
    }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ display: 'flex', mb: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={post.imageUrl}
                alt=''
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.subtitle}<Link href={post.link} variant="caption" color="blue" sx={{ ml: 1,  justifyContent: "flex-end" }} >
                      ..Read more
                    </Link>
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Avatar src={post.avatarUrl} alt={post.author} sx={{ width: 24, height: 24, mr: 1 }} />
                    <Typography variant="subtitle2" color="text.secondary">
                      {post.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                      {post.publishedDate}
                    </Typography>
                  </Box>
                  
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPost;
