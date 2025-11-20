//Composant Image
const Image = ({ src, alt, className, width, height }: { src: string; alt: string; className?: string; width?: number; height?: number }) => {
    return (
        <img src={src} alt={alt} className={className} width={width} height={height} />
    );
}

export default Image;