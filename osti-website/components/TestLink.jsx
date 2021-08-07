import Image from "next/image";

const TestLinkImage = ({ width, height, url, src }) => {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<Image src={src} width={width} height={height} alt={url}></Image>
		</a>
	);
};

export default TestLinkImage;
