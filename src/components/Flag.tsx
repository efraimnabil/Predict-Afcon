import AGO from '../assets/AGO.svg'
import BFA from '../assets/BFA.svg'
import CIV from '../assets/CIV.svg'
import CMR from '../assets/CMR.svg'
import COD from '../assets/COD.svg'
import CPV from '../assets/CPV.svg'
import EGY from '../assets/EGY.svg'
import GIN from '../assets/GIN.svg'
import GNQ from '../assets/GNQ.svg'
import MAR from '../assets/MAR.svg'
import MLI from '../assets/MLI.svg'
import MRT from '../assets/MRT.svg'
import NAM from '../assets/NAM.svg'
import NGA from '../assets/NGA.svg'
import SEN from '../assets/SEN.svg'
import ZAF from '../assets/ZAF.svg'

interface IProps {
    teamName: string,
}   

const Flag = ({teamName}: IProps) => {

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
  
    return (
        <img src={flag[teamName]} alt={teamName} className='w-12 h-12' draggable="false"/>
    )
}

export default Flag