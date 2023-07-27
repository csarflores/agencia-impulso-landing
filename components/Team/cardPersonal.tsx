import Link from "next/link";
import Image from "next/image";

const PersonalCard = (props: { id: number; name: string; profession: string; description: string; linkedin: string; imageURL: string; imageDescription: string; }) => {
  const { name, profession, description, linkedin, imageURL, imageDescription } = props;

  return (
    <>
      <div className="flex flex-col justify-center rounded-sm w-full bg-white text-gray-800 px-8 mx-6 my-12 text-center md:w-80 dark:bg-gray-100 dark:text-gray-800">
        <Image
          src={imageURL}
          alt={imageDescription}
          width={500}
          height={500}
          className="self-center flex-shrink-0 w-64 h-64 -mt-12 bg-cover rounded-2xl drop-shadow-xl dark:bg-white"
        />
        <div className="flex-1 my-4">
          <p className="text-xl font-semibold leadi">{name}</p>
          <p className="text-center m-2 font-bold italic">{profession}</p>
          <p className="text-justify">{description}</p>
        </div>
        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
          <Link
            rel="noopener noreferrer"
            href={linkedin}
            target="_blank"
            title="LinkedIn"
            className="dark:text-gray-900 hover:dark:text-violet-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
              <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )

}

export default PersonalCard;