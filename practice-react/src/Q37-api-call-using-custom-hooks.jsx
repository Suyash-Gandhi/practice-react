import { usefetch } from "./hooks";

function Q37apicallusingcustomhooks() {
    const { user } = usefetch("https://jsonplaceholder.typicode.com/posts")
    return (
        <div>
            <ol>
                {
                    user.map(post => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Q37apicallusingcustomhooks