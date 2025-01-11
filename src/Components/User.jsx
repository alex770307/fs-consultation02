// eslint-disable-next-line react/prop-types
export default function User({firstname,lastname,age,username,email}) {
    return (
      <div>
        <p>Name:{firstname} {lastname}</p>
        {
          age>=30
          ?<p>Age:{age}</p>
          :<p>Age is below 30</p>
        }
  
        <p>Username:{username}</p>
  
        <p>Email:
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    )
  }
  