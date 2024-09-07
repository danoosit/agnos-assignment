import defaultFinger from '../../assets/images/default-finger.png';
import dipHighlight from '../../assets/images/dip-highlight.png';

function FingerArea() {

    const renderPage = () => {
        return <>
            <div className="relative">
                <img src={defaultFinger} className="absolute object-contain" />
                <img src={dipHighlight} className="absolute object-contain" />
            </div>
        </>
    }

    return renderPage();
}

export default FingerArea;