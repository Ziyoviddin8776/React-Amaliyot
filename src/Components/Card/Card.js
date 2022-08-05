import React from 'react';

function Card({posts,removePost}) {
    return (
        <>
            {posts.map(val=>(
                <div className="col-md-4 my-3" key={val.id}>
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>{val.title}</h3>
                        </div>
                        <div className="card-body">
                            <p>{val.body}</p>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=>removePost(val)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;