import Alert from 'react-bootstrap/Alert'

const AlerMessage = ({info}) => {
    return info === null ? null : (
        <Alert variant={info.type}>{info.message}</Alert>
    )
}

export default AlerMessage