import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTutorial } from "../actions/tutorials";

const AddTutorial = () => {

  return(<>
    // antd steps
    <div className="steps-content">
      <div className="steps-content-item">
        <div className="steps-content-item-title">
          <h3>Step 1</h3>
          <p>Create a new project</p>
        </div>
        <div className="steps-content-item-content">
          <p>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
          </p>
          <p>
            Ant Design's design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
          </p>
        </div>
      </div>
      <div className="steps-content-item">
        <div className="steps-content-item-title">
          <h3>Step 2</h3>
          <p>Create a new project</p>
        </div>
        <div className="steps-content-item-content">
          <p>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
          </p>
          <p>
            Ant Design's design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
          </p>
        </div>
      </div>
      </div>
  
  
  </>);
};



// const AddTutorial = () => {
//   const initialTutorialState = {
//     id: null,
//     title: "",
//     description: "",
//     published: false
//   };
//   const [tutorial, setTutorial] = useState(initialTutorialState);
//   const [submitted, setSubmitted] = useState(false);

//   const dispatch = useDispatch();

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setTutorial({ ...tutorial, [name]: value });
//   };

//   const saveTutorial = () => {
//     const { title, description } = tutorial;

//     dispatch(createTutorial(title, description))
//       .then(data => {
//         setTutorial({
//           id: data.id,
//           title: data.title,
//           description: data.description,
//           published: data.published
//         });
//         setSubmitted(true);

//         console.log(data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const newTutorial = () => {
//     setTutorial(initialTutorialState);
//     setSubmitted(false);
//   };

//   return (
//     <div className="submit-form">
//       {submitted ? (
//         <div>
//           <h4>You submitted successfully!</h4>
//           <button className="btn btn-success" onClick={newTutorial}>
//             Add
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               className="form-control"
//               id="title"
//               required
//               value={tutorial.title}
//               onChange={handleInputChange}
//               name="title"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               className="form-control"
//               id="description"
//               required
//               value={tutorial.description}
//               onChange={handleInputChange}
//               name="description"
//             />
//           </div>

//           <button onClick={saveTutorial} className="btn btn-success">
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

export default AddTutorial;