import { useState } from 'react'
import BFA from '../../assets/Flags/BFA.png'
import AGO from '../../assets/Flags/AGO.png'
import CIV from '../../assets/Flags/CIV.png'
import CMR from '../../assets/Flags/CMR.png'
import COD from '../../assets/Flags/COD.png'
import CPV from '../../assets/Flags/CPV.png'
import EGY from '../../assets/Flags/EGY.png'
import GIN from '../../assets/Flags/GIN.png'
import GNQ from '../../assets/Flags/GNQ.png'
import MAR from '../../assets/Flags/MAR.png'
import MLI from '../../assets/Flags/MLI.png'
import MRT from '../../assets/Flags/MRT.png'
import NAM from '../../assets/Flags/NAM.png'
import NGA from '../../assets/Flags/NGA.png'
import SEN from '../../assets/Flags/SEN.png'
import ZAF from '../../assets/Flags/ZAF.png'

interface IProps {
    teamName: string,
}   

const Flag = ({teamName}: IProps) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const flag: { [key: string]: string } = {
        AGO: AGO,
        BFA: BFA,
        CIV: CIV,
        CMR: CMR,
        COD: COD,
        CPV: CPV,
        EGY: EGY,
        GIN: GIN,
        GNQ: GNQ,
        MAR: MAR,
        MLI: MLI,
        MRT: MRT,
        NAM: NAM,
        NGA: NGA,
        SEN: SEN,
        ZAF: ZAF,
    }

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    }
  
    return (
        <img
            src={flag[teamName]}
            alt={teamName}
            className='w-10'
            draggable
            onLoad={handleLoad}
            style={{ display: isLoaded ? 'initial' : 'none' }}
            onContextMenu={handleContextMenu}
        />
    );
}

export default Flag