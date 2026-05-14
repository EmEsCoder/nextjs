const getPost = async () => {
    const res = await fetch("http://localhost:8000/api/posts",{
        method: 'GET',
        cache : 'no-store'
    })
        if (res.ok) {
        const data = await res.json();
        return data.posts;
    } else {
        throw new Error(res.status);
    }

}

export default async function posts () {
    const posts = await getPost()
  return (
    <div className="container mt-5 medi">
      <div className="row g-3">
        {posts.map(post => (
          <div key={post.id} className="col-md-12">
            <div className="card">
              <div style={{ marginBottom: '20px' }}>
                <h5 style={{ textDecoration: 'underline' }}>{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}