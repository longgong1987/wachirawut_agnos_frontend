import { FC } from "react"
import { usePainPointsSelector } from "../provider"
import { fingers, abdominals } from '../constants'

export const Summary: FC = () => {

    const viewMode = usePainPointsSelector(value => value.viewMode)
    const finger = usePainPointsSelector(value => value.finger)
    const abdominal = usePainPointsSelector(value => value.abdominal)

    return (
        viewMode === 'SUMMARY' && <div className="grid grid-cols-12 md:grid-cols-8 gap-1">
            <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-4 rounded-lg border-solid border-2 mt-4">
                <h1 className="text-lg font-bold text-center m-4">สรุปผล</h1>
                <div className="relative p-4">
                    <h2 className="text-md font-bold">จุดไหนที่ปวดนิ้ว</h2>
                    {
                        fingers.map((data, index) => {
                            return data.key === finger && <div key={index} className="flex justify-between items-center text-emerald-500 mt-1">
                                <p>{data.description}</p>
                            </div>
                        })
                    }
                    <br />
                    <hr />
                    <br />
                    <h2 className="text-md font-bold">จุดที่ปวดท้อง</h2>
                    {
                        abdominals.map((abd, abdIndex) => {
                            return abd.key === abdominal && <div key={abdIndex} className="flex justify-between items-center text-emerald-500 mt-1">
                                <p>{abd.description}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}