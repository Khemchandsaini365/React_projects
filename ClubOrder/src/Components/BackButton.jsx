import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This goes back to the previous page in history
  };

  return (
    <button onClick={handleBack} className="btn btn-outline-dark p-0 px-1">
      {" "}
      <BiLeftArrowAlt />{" "}
    </button>
  );
};

export default BackButton;
