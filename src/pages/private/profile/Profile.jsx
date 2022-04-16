import "./profile.css";

export function Profile(){
    return (
        <div className="profile">
            <div>
                <span className="avatar avatar-md avatar-text">AP</span>
                <h3>Aniket Prakash</h3>
                <span>aniket@gmail.com</span>
                <button className="btn btn-primary-outline">LOGOUT</button>
            </div>
            <div>
                <h4 className="text-center">Total Notes</h4>
                <ul>
                    <li>
                        <span>Pinned : </span>
                        <span>2</span>
                    </li>
                    <li>
                        <span>Un-Pinned : </span>
                        <span>4</span>
                    </li>
                    <li>
                        <span>Archived : </span>
                        <span>2</span>
                    </li>
                    <li>
                        <span>In trash : </span>
                        <span>2</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}