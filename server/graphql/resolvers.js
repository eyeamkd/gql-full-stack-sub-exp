const resolvers = {
    Query:{
        post
    },
    Mutation:{
        newPost: async(parent,context,arguments,info)=>{
           const post = await createNewPost(arguments.title,arguments.description); 
           return post;
        }
    },
    Subscription:{ 

    }
}