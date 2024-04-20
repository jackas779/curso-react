import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
  /////se puede pasar funciones como parametros
  const formatUsername = (userName) => `@${userName}`
  
  ////// se pueden pasar propiedades en un objeto
  const users = [
    {
      initialIsFollowing: true ,
      userName: 'midudev',
      name : 'Migeul Angel Duran',
    },
    {
      initialIsFollowing: false ,
      name : 'Miguel Tru barder',
    },
    {
      initialIsFollowing: false ,
      userName: 'midudev',
      name : 'Santa Craus Noel',
    },
    {
      initialIsFollowing: true ,
      userName: 'pheral',
      name : 'Camera Cmara Patrn',
    }
  ];
  
  return(
    <>
      {
        users.map(user=>{
          const {initialIsFollowing,userName,name} = user
          return (
            <TwitterFollowCard  
              key={userName+name}
              formatUsername={formatUsername}
              userName={userName}
              name={name}
              initialIsFollowing = {initialIsFollowing}
            /> 
          )
        })
      }
      

      <TwitterFollowCard  
        formatUsername={formatUsername} 
        name={"Miguel Tru barder"}
      />
    </>
  )
}