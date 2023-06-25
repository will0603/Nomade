import Image from 'next/image'
import profilePic from '../../../assets/images/logo_3d.png'
 
export default function NomadeLogo() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author 2"
      width={133}
      height={100}
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}