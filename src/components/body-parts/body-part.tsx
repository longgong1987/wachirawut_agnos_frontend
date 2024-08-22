import { FC } from 'react'
import Image from 'next/image'

type Props = {
    active: boolean
    selected: boolean
    imageHighlight: string
    imageActive: string
    imageTitle: string
}

export const BodyPart: FC<Props> = (props) => {
    const { active, selected, imageTitle, imageHighlight, imageActive } = props
    return (
        (active || selected) && <div className="absolute left-0 top-0 w-full h-auto">
                        <Image
                            src={imageHighlight}
                            alt={imageTitle}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="relative left-0 top-0 w-full h-auto"
                        />
                        { 
                            !selected && imageActive !== '' && <Image
                                            src={imageActive}
                                            alt={imageTitle}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className="absolute left-0 top-0 w-full h-auto"
                                        />
                        }
                    </div>
    )
}