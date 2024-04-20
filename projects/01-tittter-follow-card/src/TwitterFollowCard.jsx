import { useState } from "react";

export function TwitterFollowCard({formatUsername,name,initialIsFollowing,userName = 'unknown'}) {
  ///estados
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  ////terniarios
  const buttonClass = isFollowing ? 
  'twitter-card-botton isfollowing':
  'twitter-card-botton';

  const text = isFollowing ? 'Siguiendo':  'seguir';

  const handleClick =()=>{
    setIsFollowing(!isFollowing);
  }


  ///// las props deben ser inmutables  
    return(
        <article className='twitter-card'>
            <header className='twitter-card-header'>
                <img
                  className='twitter-card-img'
                  src={`https://unavatar.io/${userName}`} 
                  alt='imagen del usuario' 
                 />
                <div className='twitter-card-div'>
                    <strong>{name}</strong>
                    <span className='twitter-card-span'>{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className="twitter-card-textNone">{text}</span>
                    <span className="twitter-card-stopIsFollowing">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}