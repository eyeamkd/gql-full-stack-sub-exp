const {createNewPost, updatePost, deletePost} = require('../crud/post'); 



const resolvers = {
    Query:{
        post
    },
    Mutation:{
        newPost: async(parent,context,arguments,info)=>{
           const post = await createNewPost(arguments.title,arguments.description); 
           return post;
        },
        updatePost: async(parent, context, arguments, info)=> {
            const updatedPost = await updatePost(arguments.id, arguments.title, arguments.description); 
            return updatedPost;
        },
        deletePost: async (parent, context, arguments, info)=> {
            await deletePost(arguments.id);
        }
    },
    Subscription:{ 
        newPostSubscription:()=>{

        },
        updatedPostSubscription:()=>{

        },
        deletedPostSubscription:()=> {

        }
    }
}