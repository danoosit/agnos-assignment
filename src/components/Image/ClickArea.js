

function ClickArea(props) {
    const { onClick, top, left, width = '10%', height = '5%' } = props
    return <div
        className={`absolute bg-transparent z-50`}
        onClick={onClick}
        style={{
            top: top,
            left: left,
            width: width,
            height: height,
            border: '1px solid green' // For debugging,
        }}
    />;
}

export default ClickArea;