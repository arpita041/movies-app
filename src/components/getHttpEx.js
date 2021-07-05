// import React, { Component } from 'react'
// import axios from 'axios'
// class getHttpEx extends Component {
//     constructor(props)
//     {
//     super(props);

//     this.state={
//         posts:[]
//     }
//     }
//     componentDidMount()
//     {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res=>
//             {
//                 console.log(res);
//                 this.setState({posts:res.data})
//             })
//             .catch(err=>
//             {
//                 console.log(err);
//             })
//     }
//     render() {
//         const {posts}=this.state;
//         return (
//             <div>
//                 List of posts:
//                 <table>
//                 <tr><td>id</td><td>title</td></tr>
//                 </table>
//                { posts.map(post => <table key={post.id}>
//                    <td>{post.userId}</td> <td>{post.title}</td></table>)}
//             </div>
//         )
//     }
// }

// export default getHttpEx
