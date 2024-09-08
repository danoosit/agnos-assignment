import defaultFinger from '../../assets/images/default-finger.png';
import dipHighlight from '../../assets/images/dip-highlight.png';
import dipActive from '../../assets/images/dip-active.png';
import mcpHighlight from '../../assets/images/mcp-highlight.png';
import mcpActive from '../../assets/images/mcp-active.png';
import pipHighlight from '../../assets/images/pip-highlight.png';
import pipActive from '../../assets/images/pip-active.png';
import CustomImage from '../../components/Image/CustomImage';
import ClickArea from '../../components/Image/ClickArea';

function FingerArea() {
    const handleClick = (area) => {
        console.log(`Clicked on ${area}`);
        // Add more logic here based on the clicked area
    };

    const mcpClickAreas = <>
        <ClickArea top='38%' left='27%' onClick={() => handleClick('MCP')} />
        <ClickArea top='35%' left='35%' onClick={() => handleClick('MCP')} />
        <ClickArea top='33%' left='44%' onClick={() => handleClick('MCP')} />
        <ClickArea top='33%' left='53%' onClick={() => handleClick('MCP')} />
        <ClickArea top='50%' left='67%' onClick={() => handleClick('MCP')} />
    </>

    const dipClickAreas = <>
        <ClickArea top='22%' left='20%' width="8%" height="6%" onClick={() => handleClick('DIP')} />
        <ClickArea top='12%' left='32%' width="8%" height="6%" onClick={() => handleClick('DIP')} />
        <ClickArea top='7%' left='42%' width="8%" height="6%" onClick={() => handleClick('DIP')} />
        <ClickArea top='10%' left='55%' width="8%" height="6%" onClick={() => handleClick('DIP')} />
    </>

    const pipClickAreas = <>
        <ClickArea top='30%' left='23%' width="8%" height="6%" onClick={() => handleClick('PIP')} />
        <ClickArea top='22%' left='33%' width="8%" height="6%" onClick={() => handleClick('PIP')} />
        <ClickArea top='19%' left='43%' width="9%" height="6%" onClick={() => handleClick('PIP')} />
        <ClickArea top='20%' left='54%' width="10%" height="6%" onClick={() => handleClick('PIP')} />
        <ClickArea top='38%' left='74%' onClick={() => handleClick('PIP')} />
    </>

    const renderPage = () => {
        return <div className="flex justify-center w-screen">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-screen mx-4 my-6 border-2">
                <h1 className="text-xl font-semibold mb-4 text-center">จุดไหนที่คุณปวดนิ้วมากที่สุด ?</h1>
                <div className="relative w-full h-auto" style={{ aspectRatio: '1 / 1.2' }}>
                    <CustomImage src={defaultFinger} visible={true} />
                    <CustomImage src={dipHighlight} visible={true} />
                    <CustomImage src={dipActive} visible={true} />
                    <CustomImage src={mcpHighlight} visible={true} />
                    <CustomImage src={mcpActive} visible={true} />
                    <CustomImage src={pipHighlight} visible={true} />
                    <CustomImage src={pipActive} visible={true} />
                    {mcpClickAreas}
                    {dipClickAreas}
                    {pipClickAreas}
                </div>
            </div>
        </div>
    }

    return renderPage();
}

export default FingerArea;