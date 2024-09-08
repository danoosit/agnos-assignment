

function ClickArea(props) {
    const { onClick, top, left, right, width = '10%', height = '5%' } = props
    console.log(left)
    return <div
        className={`absolute top-[${top}] left-[${left}] w-[${width}] h-[${height}] bg-transparent z-50`}
        onClick={onClick}
        style={{ border: '1px solid green' }}
    />;
}

export default ClickArea;