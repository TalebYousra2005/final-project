import { useParams } from "react-router-dom";
export const Compare = (text, current) => {
  // console.log(current);
  const id = useParams().id;
  if (
    /*window.location.pathname*/ 
    current === text
    //  || current === `${text}/create`
     || current === `${text}/${id}`
  ) {
    return true;
  } else {
    return false;
  }
};
