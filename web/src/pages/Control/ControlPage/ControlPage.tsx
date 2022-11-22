import ControlCell from 'src/components/Control/ControlCell'

type ControlPageProps = {
  id: number
}

const ControlPage = ({ id }: ControlPageProps) => {
  return <ControlCell id={id} />
}

export default ControlPage
