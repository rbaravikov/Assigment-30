
const PrintUser = ({user}) => {
    return (
      <>
      <div className="card">
        <img src={user.avatar_url} alt={user.login} />
        <h1>{user.name}</h1>
        <h2>Web Developer - Web Deigner</h2>
        <p>{user.bio}</p>
        <div className="socials">
        <i className="fa-brands fa-square-facebook fa-xl"></i>
        <i className="fa-brands fa-square-twitter fa-xl"></i>
        <i className="fa-brands fa-google-plus-g fa-xl"></i>
        </div>
      </div>
      </>
    )
  }
  
  export default PrintUser