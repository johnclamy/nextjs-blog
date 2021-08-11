import { Row } from 'react-bootstrap'
import WorkCard from './WorkCard'

export default function WorkList({ work }) {
  const workList = work.map(item =>
    <WorkCard key={item.sys.id} workItem={item.fields} />
  )
  return <Row>{workList}</Row>
}