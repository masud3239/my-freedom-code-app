
import './App.css'

const Friend = ({friend}) => {
    console.log(friend);
    const {name, email, username} = friend;
    return (
        <div className="card">
            <h3>Name:  {name}</h3>
            <p> Email: {email}</p>
            <p> username: {username}</p>
        </div>
    );
};

export default Friend;