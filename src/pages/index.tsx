import { Fingers}  from '../components/fingers'
import { Abdominal}  from '../components/abdominal'
import { Summary } from '../components/summary'
import  PreviewProvider  from '../components/provider'

export default function Index() {
    return (
        <PreviewProvider>
            <Fingers />
            <Abdominal />
            <Summary />
        </PreviewProvider>
    )
}