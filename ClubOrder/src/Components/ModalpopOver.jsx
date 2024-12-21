
import { CgClose } from 'react-icons/cg'

const ModalpopOver = () => {
  return (
    <>
    <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Show History
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-between">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn btn-outline-dark btn-sm " data-bs-dismiss="modal"><CgClose/></button>
        </div>
        <div className="modal-body">
            Message Body
        </div>
        
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default ModalpopOver