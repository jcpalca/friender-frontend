import { useNavigate } from "react-router-dom";

function Hobbies({hobbies}) {
  const navigate = useNavigate();

  function editHobbies() {
    navigate("/edit/hobbies");
  }

  return (
    <div>
      {hobbies.length > 0 ? (
        <ul>
          {hobbies.map(hobby =>
            <li key={hobby}>
              {hobby}
            </li>)}
        </ul>
      ) : (
        <p className="none lead d-flex justify-content-center mt-5">
          No Hobbies
        </p>
      )}
      <button onClick={editHobbies}>Edit Hobbies</button>
    </div>
  )
}

export default Hobbies;
