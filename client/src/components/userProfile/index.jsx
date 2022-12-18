import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export const UserProfileForm = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`users/${id}`);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
            
        </div>
      </div>
    </div>
  );
};
