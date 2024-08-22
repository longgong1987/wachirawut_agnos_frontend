import { FC, useState } from "react";
import Image from 'next/image'
import { BodyPart } from '../body-parts'
import { usePainPointsSelector } from '../provider'
import { fingers } from '../constants'

export const Fingers: FC = () => {
    const setViewMode = usePainPointsSelector(value => value.setViewMode)
    const viewMode = usePainPointsSelector(value => value.viewMode)
    const setFinger = usePainPointsSelector(value => value.setFinger)
    const finger = usePainPointsSelector(value => value.finger)

    const [isShown, setIsShown] = useState('');

    var fingerButtonClass = '';
    if (finger === '') {
        fingerButtonClass = 'bg-gray-400 opacity-50 cursor-not-allowed';
    }else{
        fingerButtonClass = 'bg-blue-500 hover:bg-blue-700';
    }

    return (
        viewMode === 'FINGERS' && <div className="grid grid-cols-12 md:grid-cols-8 gap-1">
                <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-4 rounded-lg border-solid border-2 mt-4">
                    <h1 className="text-lg font-bold text-center m-4">จุดไหนที่คุณปวดนิ้วมากที่สุด ?</h1>
                    <div className="relative">
                        <Image
                            src="/images/finger/default-finger.png"
                            priority={true}
                            alt="fingers"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="relative left-0 top-0 w-full h-auto"
                        />
                        {
                            fingers.map((data, index) => {
                                return <BodyPart key={index} active={isShown === data.key} selected={data.key === finger} imageHighlight={data.imageHighlight} imageActive={data.imageActive} imageTitle={data.title} />
                            })
                        }
                        <div className="absolute left-0 top-0 w-full h-full">
                            <svg width="100%" height="100%" viewBox="0 0 600 400">
                                {/* Dip area */}
                                <rect width="40" height="30" x="120" y="17" rx="10" ry="10" fill="blue" fillOpacity="0" transform="rotate(-20)" className="rotate-self-center" onMouseEnter={() => setIsShown('dip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('dip') }} />
                                <rect width="40" height="30" x="195" y="-60" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('dip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('dip') }} />
                                <rect width="40" height="30" x="260" y="-90" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('dip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('dip') }} />
                                <rect width="42" height="30" x="330" y="-78" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('dip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('dip') }} />

                                {/* Pip */}
                                <rect width="40" height="30" x="105" y="119" rx="10" ry="10" fill="blue" fillOpacity="0" transform="rotate(-20)" onMouseEnter={() => setIsShown('pip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('pip') }} />
                                <rect width="40" height="30" x="200" y="10" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('pip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('pip') }} />
                                <rect width="40" height="30" x="265" y="-15" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('pip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('pip') }} />
                                <rect width="43" height="30" x="330" y="-5" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('pip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('pip') }} />
                                <rect width="42" height="30" x="455" y="135" rx="10" ry="10" fill="blue" fillOpacity="0" transform="rotate(40)" className="rotate-self-center" onMouseEnter={() => setIsShown('pip')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('pip') }} />

                                {/* Mcp */}
                                <rect width="50" height="35" x="102" y="190" rx="10" ry="10" fill="blue" fillOpacity="0" transform="rotate(-20)" onMouseEnter={() => setIsShown('mcp')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('mcp') }} />
                                <rect width="50" height="35" x="215" y="109" rx="10" ry="10" fill="blue" fillOpacity="0" transform="rotate(-20)" className="rotate-self-center" onMouseEnter={() => setIsShown('mcp')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('mcp') }} />
                                <rect width="50" height="35" x="265" y="93" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('mcp')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('mcp') }} />
                                <rect width="50" height="35" x="323" y="93" rx="10" ry="10" fill="blue" fillOpacity="0" transform="rotate(10)" className="rotate-self-center" onMouseEnter={() => setIsShown('mcp')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('mcp') }} />
                                <rect width="45" height="33" x="407" y="218" rx="10" ry="10" fill="blue" fillOpacity="0" transform="rotate(40)" className="rotate-self-center" onMouseEnter={() => setIsShown('mcp')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('mcp') }} />

                                {/* Other */}
                                <rect width="415" height="60" x="84" y="483" rx="10" ry="10" fill="blue" fillOpacity="0" onMouseEnter={() => setIsShown('other')} onMouseLeave={() => setIsShown('')} onClick={() => { setFinger('other') }} />

                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-4 mt-2 mb-4">
                    <button className={`${fingerButtonClass} w-full text-white font-bold py-2 px-4 rounded-lg`} disabled={finger === '' ? true : false} onClick={() => finger !== '' && setViewMode('ABDOMINAL') }>ต่อไป</button>
                </div>
            </div>
    )
}