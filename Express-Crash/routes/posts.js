import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postControlle.js'
const router = express.Router();

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
];

// Get all posts
router.get('/', getPosts);

// Get a single post
router.get('/:id', getPost)

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

export default router;
