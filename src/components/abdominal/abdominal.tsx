import { FC, useState } from "react";
import Image from 'next/image'
import { usePainPointsSelector } from "../provider";
import { abdominals } from "../constants";
import { BodyPart } from "../body-parts";

export const Abdominal: FC = () => {

    const setViewMode = usePainPointsSelector(value => value.setViewMode)
    const viewMode = usePainPointsSelector(value => value.viewMode)
    const abdominal = usePainPointsSelector(value => value.abdominal)
    const setAbdominal = usePainPointsSelector(value => value.setAbdominal)

    const [isShown, setIsShown] = useState('');

    var abdominalButtonClass = '';
    if (abdominal === '') {
        abdominalButtonClass = 'bg-gray-400 opacity-50 cursor-not-allowed';
    }else{
        abdominalButtonClass = 'bg-blue-500 hover:bg-blue-700';
    }
    
    return (
        viewMode === 'ABDOMINAL' && <div className="grid grid-cols-12 md:grid-cols-8 gap-1">
            <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-4 rounded-lg border-solid border-2 mt-4">
                <h1 className="text-lg font-bold text-center m-4">จุดไหนที่คุณปวดท้องมากที่สุด ?</h1>
                <div className="relative">
                    <Image
                        src="/images/abdominal/default-abs.png"
                        priority={true}
                        alt="Abdominal"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="relative left-0 top-0 w-full h-auto"
                    />
                    {
                        abdominals.map((data, index) => {
                            return <BodyPart key={index} active={isShown === data.key} selected={data.key === abdominal} imageHighlight={data.imageHighlight} imageActive={data.imageActive} imageTitle={data.title} />
                        })
                    }
                    <div className="absolute left-0 top-0 w-full h-full">
                        <svg width="100%" height="100%" viewBox="0 0 600 400">
                            <polygon points="290,85 335,130 290,185 245,134" fill="orange" fillOpacity="0" onMouseEnter={() => setIsShown('epigastrium')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('epigastrium') }} />
                            <polygon points="341,136 377,154 385,215 330,216 305,184" fill="orange" fillOpacity="0" onMouseEnter={() => setIsShown('luq')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('luq') }} />
                            <polygon points="330,226 385,226 380,273 343,310 328,278 306,255" fill="orange" fillOpacity="0" onMouseEnter={() => setIsShown('llq')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('llq') }} />
                            <polygon points="290,255 310,270 331,313 290,340 250,314 270,270" fill="orange" fillOpacity="0" onMouseEnter={() => setIsShown('suprapubic')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('suprapubic') }} />
                            <polygon points="193,226 250,228 270,257 257,274 240,308 214,292 190,262" fill="orange" fillOpacity="0" onMouseEnter={() => setIsShown('rlq')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('rlq') }} />
                            <polygon points="238,137 277,185 257,200 250,216 193,214 199,159" fill="orange" fillOpacity="0" onMouseEnter={() => setIsShown('ruq')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('ruq') }} />
                            <circle cx="290" cy="220" r="30" fill="red" fillOpacity="0" onMouseEnter={() => setIsShown('umbilicus')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('umbilicus') }} />

                            <rect width="415" height="60" x="84" y="483" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('all-over')} onMouseLeave={() => setIsShown('')} onClick={() => { setAbdominal('all-over') }} />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-4 mt-2 mb-4">
                <button className={`${abdominalButtonClass} w-full text-white font-bold py-2 px-4 rounded-lg`} disabled={abdominal === '' ? true : false} onClick={() => abdominal !== '' && setViewMode('SUMMARY') } >สรุป</button>
            </div>
        </div>
    )
}