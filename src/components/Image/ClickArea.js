

function ClickArea(props) {
    const { onClick, top, left, width = '10%', height = '8%', radius = '50%' } = props
    return <div
        className={`absolute bg-transparent z-50`}
        onClick={onClick}
        style={{
            top: top,
            left: left,
            width: width,
            height: height,
            borderRadius: radius
        }}
    />;
}

export default ClickArea;