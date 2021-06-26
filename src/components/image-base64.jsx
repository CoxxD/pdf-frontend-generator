const Image64 = ({ data }) => <img style={{width: "50px", height: '80px'}} src={`data:image/jpeg;base64,${data}`} />

export default Image64;