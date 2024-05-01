import Image from "next/image";

const Card = ({ src, alt }) => {
  return (
    <>
      <Image className="" src={src} width={300} height={400} alt="{alt}" />
    </>
  );
};

export default Card;
