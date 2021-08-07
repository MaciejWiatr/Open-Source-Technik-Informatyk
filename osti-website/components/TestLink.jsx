import Image from "next/image";

const TestLinkImage = ({ width, height, url, src }) => {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<Image
				placeholder="blur"
				src={src}
				layout="responsive"
				width={width}
				height={height}
				alt={url}
				loading="lazy"
				blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
			></Image>
		</a>
	);
};

export default TestLinkImage;
