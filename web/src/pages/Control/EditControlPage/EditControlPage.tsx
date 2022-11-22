import EditControlCell from 'src/components/Control/EditControlCell'

type ControlPageProps = {
  id: number
}

const EditControlPage = ({ id }: ControlPageProps) => {
  return <EditControlCell id={id} />
}

export default EditControlPage
