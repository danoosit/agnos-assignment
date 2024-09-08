import defaultFinger from '../../assets/images/default-finger.png';
import dipHighlight from '../../assets/images/dip-highlight.png';
import dipActive from '../../assets/images/dip-active.png';
import mcpHighlight from '../../assets/images/mcp-highlight.png';
import mcpActive from '../../assets/images/mcp-active.png';
import pipHighlight from '../../assets/images/pip-highlight.png';
import pipActive from '../../assets/images/pip-active.png';
import othersHighlight from '../../assets/images/others-highlight.png';
import CustomImage from '../../components/Image/CustomImage';
import ClickArea from '../../components/Image/ClickArea';
import { useState } from 'react';
import CustomButton from '../../components/Button/CustomButton';
import CustomHeader from '../../components/Text/CustomHeader';
import Card from '../../components/Container/Card';
import ImageContainer from '../../components/Container/ImageContainer';
import CustomContainer from '../../components/Container/CustomContainer';
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const navigate = useNavigate();

    const renderPage = () => {
        return <CustomContainer>
            <Card>
                <CustomHeader title='กรุณาเลือกจุดที่คุณปวด' />
                <CustomButton title='ท้อง' onClick={() => { navigate('/abdominal') }} />
                <CustomButton title='นิ้ว' onClick={() => { navigate('/finger') }} />
            </Card>

        </CustomContainer>
    }

    return renderPage();
}

export default HomePage;