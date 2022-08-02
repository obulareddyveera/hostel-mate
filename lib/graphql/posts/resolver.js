const posts = [
    {
        id: 1,
        title: 'Article one',
        content: 'This is Article One'
    },
    {
        id: 2,
        title: 'Article Two',
        content: 'This is Article Two'
    },
    {
        id: 3,
        title: 'Article Three',
        content: 'This is Article Three'
    }
];

export const postsResolver = {
    Query: {
        post: (_, { postId }, context, info) => {
            return posts.filter(post => post.id === postId)[0];
        },
        allPosts: (_, args, context, info) => {
            return posts;
        }
    },
}