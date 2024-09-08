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
        <ClickArea top='23%' left='27%' onClick={() => handleClick('MCP')} />
        <ClickArea top='21%' left='35%' onClick={() => handleClick('MCP')} />
        <ClickArea top='20%' left='44%' onClick={() => handleClick('MCP')} />
        <ClickArea top='20%' left='53%' onClick={() => handleClick('MCP')} />
        <ClickArea top='30%' left='67%' onClick={() => handleClick('MCP')} />
    </>

    const dipClickAreas = <>
        <ClickArea top='13%' left='20%' width="8%" height="4%" onClick={() => handleClick('DIP')} />
        <ClickArea top='7%' left='32%' width="8%" height="4%" onClick={() => handleClick('DIP')} />
        <ClickArea top='4%' left='42%' width="8%" height="4%" onClick={() => handleClick('DIP')} />
        <ClickArea top='6%' left='55%' width="8%" height="4%" onClick={() => handleClick('DIP')} />
    </>

    const pipClickAreas = <>
        <ClickArea top='18%' left='23%' width="8%" height="4%" onClick={() => handleClick('PIP')} />
        <ClickArea top='13%' left='33%' width="8%" height="4%" onClick={() => handleClick('PIP')} />
        <ClickArea top='11%' left='43%' width="10%" height="4%" onClick={() => handleClick('PIP')} />
        <ClickArea top='12%' left='54%' width="10%" height="4%" onClick={() => handleClick('PIP')} />
        <ClickArea top='23%' left='74%' onClick={() => handleClick('PIP')} />
    </>

    const renderPage = () => {
        return <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mx-auto">
            <div className="relative w-full h-auto" style={{ aspectRatio: '1 / 2' }}>
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
    }

    return renderPage();
}

export default FingerArea;