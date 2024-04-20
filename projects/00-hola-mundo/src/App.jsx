import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
  /////se puede pasar funciones como parametros
  const formatUsername = (userName) => `@${userName}`
  
  ////// se pueden pasar propiedades en un objeto
  const midu = {formatUsername: formatUsername, initialIsFollowing: true ,userName: 'midudev', name : 'Migeul Angel Duran', userName: 'midudev' };
  
  return(
    <>
      <TwitterFollowCard  
        {...midu}
      />

      <TwitterFollowCard  
        formatUsername={formatUsername} 
        name={"Miguel Tru barder"}
      />
      <TwitterFollowCard  
        formatUsername={formatUsername} 
        userName="midudev" 
        name={"Santa Craus Noel"}
      />
      <TwitterFollowCard  
        formatUsername={formatUsername}
        userName="pheral"
        name={"Camera Cmara Patrn"}
      />
    </>
  )
}