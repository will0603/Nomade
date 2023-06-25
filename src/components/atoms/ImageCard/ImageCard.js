import profilePic from '../../../assets/images/honda-xr190ct-MOTO-HONDA.png'
import Image from 'next/image'

export default function ImageCard(){
    return(
        <>
            <Image
                src={profilePic}
                alt="Picture of the author 2"
                width={350}
                height={250}
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
        </>
    );
};