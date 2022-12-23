import { useNavigate } from "react-router-dom";

function Interests({interests}) {
  const navigate = useNavigate();

  function editInterests() {
    navigate("/edit/interests");
  }

  return (
    <div>
      {interests.length > 0 ? (
        <ul>
          {interests.map(interest =>
            <li key={interest}>
              {interest}
            </li>)}
        </ul>
      ) : (
        <p className="none lead d-flex justify-content-center mt-5">
          No Interests
        </p>
      )}
      <button onClick={editInterests}>Edit Interests</button>
    </div>
  )
}

export default Interests;
