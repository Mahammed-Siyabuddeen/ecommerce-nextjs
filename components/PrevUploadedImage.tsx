import Image from "next/image";
import { ChangeEvent, Dispatch, FC } from "react";
import { UploadIcon } from "./Icons/Upload";

interface PropsType {
    imagePosition: number
    image: string[],
    setImage: Dispatch<React.SetStateAction<string[]>>,
    imageFile: File[],
    setImageFile: Dispatch<React.SetStateAction<File[]>>
}

const PrevUploadedImage: FC<PropsType> = ({ imagePosition, image, setImage, imageFile, setImageFile }) => {

    const handleImagechange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0])
            return alert("image not selected");
        let url = URL.createObjectURL(e.target.files[0])
        if (image.length == 4) {
            console.log('full imag');
            let newImages = image.slice(1);
            setImage([...newImages, url])
            let newImageFile = imageFile.slice(1);
            setImageFile([...newImageFile, e.target.files[0]])
            return;
        }
        setImage([...image, url]);
        setImageFile([...imageFile, e.target.files[0]])
    }

    return (

        Array(4).fill("image").map((item, imagePosition) =>
        (
            <div key={imagePosition} className="h-52 relative rounded overflow-hidden">
                <div className="w-full relative h-full bg-slate-200 grid  flex-col justify-center place-items-center place-content-center text-5xl">
                    {
                        image.length >= imagePosition + 1 ? (
                            <div className="w-full h-full">
                                <Image fill alt='nonn' src={image[imagePosition]} />
                            </div>
                        ) :
                            <>
                                <UploadIcon />
                                <p className="text-blue-400 text-sm">click to upload</p>
                            </>
                    }
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleImagechange(e)} type='file' className='w-ful absolute opacity-0 h-full' />
                </div>
            </div>
        )
        )
    )
}

export default PrevUploadedImage