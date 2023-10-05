import instagram from '../../assets/vectors/instagram.svg'
import facebook from '../../assets/vectors/facebook.svg'

const SocialNetworksLinks = [
  {
    "link": "https://www.instagram.com/",
    "img": instagram,
    "name": "Instagram",
    "id": 1
  },
  {
    "link": "https://www.facebook.com/",
    "img": facebook,
    "name": "Facebook",
    "id": 2
  },
] 


const SocialNetworks = () => {
    
  return (
    <>
    {
      SocialNetworksLinks.map((item) =>{
        return(
          <a href={item.link} className='w-4 sm:w-9' key={item.id}>
          <img src={item.img} alt={item.name}></img>
        </a>
        )
      })
    }
    </>
  )
}

export default SocialNetworks