import Image from 'next/image'
import profilePic from '../../../assets/images/sacsayhuaman-los.andes_.jpg'
 
export default function Banner() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}