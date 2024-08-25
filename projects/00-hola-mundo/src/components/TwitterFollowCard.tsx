import { useState } from "react";

const TwitterFollowCard = ({
  userName,
  name,
  initialIsFollowing,
  formatUserName,
}: {
  userName: string;
  name: string;
  initialIsFollowing: boolean;
  formatUserName: (userName: string) => string;
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={btnClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
