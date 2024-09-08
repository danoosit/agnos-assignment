

function CustomImage(props) {
    const { visible = true, src, className = "absolute object-contain" } = props

    return visible ? <img src={src} className={className} /> : <></>;
}

export default CustomImage;