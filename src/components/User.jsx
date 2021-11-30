function User(user){
    return (
        <div className="user-card" test={user.user.username}>
            <img
                className="user-card__avatar"
                src={`https://avatars.dicebear.com/v2/avataaars/${user.user.username}.svg?options[mood][]=happy`}
                alt="user avatar"
            />
            <h2 className="user-card__name title-font my-5">
                {user.user.name}
            </h2>
            <p>"{user.user.username}"</p>
            <div className="user-card__info">
                <i className="info__icon fas fa-envelope mr-5"></i>{user.user.email}
            </div>
            <div className="user-card__info">
                <i className="info__icon fas fa-phone mr-5"></i>{user.user.phone}
            </div>
            <div className="user-card__info">
                <i className="info__icon fas fa-building mr-5"></i>{user.user.company.name}
            </div>
            <div className="user-card__info">
                <i className="info__icon fas fa-link mr-5"></i>{user.user.website}
            </div>
            <div className="user-card__info">
                <i className="info__icon fas fa-home mr-5"></i>{`${user.user.address.street}, ${user.user.address.suite}, ${user.user.address.city}, ${user.user.address.zipcode}`}
            </div>
        </div>
    )
}

export default User;