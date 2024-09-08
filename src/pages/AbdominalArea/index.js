import defaultAbs from '../../assets/images/default-abs.png';
import epigastriumActive from '../../assets/images/epigastrium-active.png';
import epigastriumHighlight from '../../assets/images/epigastrium-highlight.png';
import llqActive from '../../assets/images/llq-active.png';
import llqHighlight from '../../assets/images/llq-highlight.png';
import luqActive from '../../assets/images/luq-active.png';
import luqHighlight from '../../assets/images/luq-highlight.png';
import rlqActive from '../../assets/images/rlq-active.png';
import rlqHighlight from '../../assets/images/rlq-highlight.png';
import ruqActive from '../../assets/images/ruq-active.png';
import ruqHighlight from '../../assets/images/ruq-highlight.png';
import suprapubicActive from '../../assets/images/suprapubic-active.png';
import suprapubicHighlight from '../../assets/images/suprapubic-highlight.png';
import umbilicusActive from '../../assets/images/umbilicus-active.png';
import umbilicusHighlight from '../../assets/images/umbilicus-highlight.png';
import allHighlight from '../../assets/images/all-over-highlight.png';
import CustomImage from '../../components/Image/CustomImage';
import ClickArea from '../../components/Image/ClickArea';
import { useState } from 'react';
import CustomButton from '../../components/Button/CustomButton';
import CustomHeader from '../../components/Text/CustomHeader';
import Card from '../../components/Container/Card';
import ImageContainer from '../../components/Container/ImageContainer';
import CustomContainer from '../../components/Container/CustomContainer';


function AbdominalArea() {

    const [selectedArea, setSelectedArea] = useState('');

    const handleClick = (area) => {
        setSelectedArea(area);
    };

    const absClickAreas = <>
        <ClickArea top='34%' left='42%' width='12%' height='11%' onClick={() => handleClick('epigastrium')} />
        <ClickArea top='41%' left='53%' width='13%' height='11%' onClick={() => handleClick('luq')} />
        <ClickArea top='52%' left='53%' width='13%' height='11%' onClick={() => handleClick('llq')} />
        <ClickArea top='41%' left='31%' width='13%' height='11%' onClick={() => handleClick('ruq')} />
        <ClickArea top='52%' left='31%' width='13%' height='11%' onClick={() => handleClick('rlq')} />
        <ClickArea top='57%' left='43%' width='11%' height='11%' onClick={() => handleClick('suprapubic')} />
        <ClickArea top='48%' left='43%' width='10%' height='8%' onClick={() => handleClick('umbilicus')} />
    </>

    const renderPage = () => {
        return <CustomContainer>
            <Card>
                <CustomHeader title='จุดไหนที่คุณปวดท้องมากที่สุด ?' />
                <ImageContainer>
                    <CustomImage src={defaultAbs} />
                    <CustomImage src={epigastriumActive} visible={selectedArea === 'epigastrium'} />
                    <CustomImage src={epigastriumHighlight} visible={selectedArea === 'epigastrium' || selectedArea === 'ALL'} />
                    <CustomImage src={llqActive} visible={selectedArea === 'llq'} />
                    <CustomImage src={llqHighlight} visible={selectedArea === 'llq' || selectedArea === 'ALL'} />
                    <CustomImage src={luqActive} visible={selectedArea === 'luq'} />
                    <CustomImage src={luqHighlight} visible={selectedArea === 'luq' || selectedArea === 'ALL'} />
                    <CustomImage src={rlqActive} visible={selectedArea === 'rlq'} />
                    <CustomImage src={rlqHighlight} visible={selectedArea === 'rlq' || selectedArea === 'ALL'} />
                    <CustomImage src={ruqActive} visible={selectedArea === 'ruq'} />
                    <CustomImage src={ruqHighlight} visible={selectedArea === 'ruq' || selectedArea === 'ALL'} />
                    <CustomImage src={suprapubicActive} visible={selectedArea === 'suprapubic'} />
                    <CustomImage src={suprapubicHighlight} visible={selectedArea === 'suprapubic' || selectedArea === 'ALL'} />
                    <CustomImage src={umbilicusActive} visible={selectedArea === 'umbilicus'} />
                    <CustomImage src={umbilicusHighlight} visible={selectedArea === 'umbilicus' || selectedArea === 'ALL'} />
                    <CustomImage src={allHighlight} visible={selectedArea === 'ALL'} />
                    {absClickAreas}
                    <ClickArea top='85%' left='32%' width="32%" height="10%" radius='0' onClick={() => handleClick('ALL')} />
                </ImageContainer>
            </Card>
            <CustomButton title='ต่อไป' disabled={selectedArea === ''} />
        </CustomContainer>
    }

    return renderPage();
}

export default AbdominalArea;