import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../actions/tutorials";
import { Link } from "react-router-dom";

// const TutorialsList = () => {
//   const [currentTutorial, setCurrentTutorial] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [searchTitle, setSearchTitle] = useState("");

//   const tutorials = useSelector(state => state.tutorials);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(retrieveTutorials());
//   }, []);

//   const onChangeSearchTitle = e => {
//     const searchTitle = e.target.value;
//     setSearchTitle(searchTitle);
//   };

//   const refreshData = () => {
//     setCurrentTutorial(null);
//     setCurrentIndex(-1);
//   };

//   const setActiveTutorial = (tutorial, index) => {
//     setCurrentTutorial(tutorial);
//     setCurrentIndex(index);
//   };

//   const removeAllTutorials = () => {
//     dispatch(deleteAllTutorials())
//       .then(response => {
//         console.log(response);
//         refreshData();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const findByTitle = () => {
//     refreshData();
//     dispatch(findTutorialsByTitle(searchTitle));
//   };

//   return (
//     <div className="list row">
//       <div className="col-md-8">
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by title"
//             value={searchTitle}
//             onChange={onChangeSearchTitle}
//           />
//           <div className="input-group-append">
//             <button
//               className="btn btn-outline-secondary"
//               type="button"
//               onClick={findByTitle}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <h4>Tutorials List</h4>

//         <ul className="list-group">
//           {tutorials &&
//             tutorials.map((tutorial, index) => (
//               <li
//                 className={
//                   "list-group-item " + (index === currentIndex ? "active" : "")
//                 }
//                 onClick={() => setActiveTutorial(tutorial, index)}
//                 key={index}
//               >
//                 {tutorial.title}
//               </li>
//             ))}
//         </ul>

//         <button
//           className="m-3 btn btn-sm btn-danger"
//           onClick={removeAllTutorials}
//         >
//           Remove All
//         </button>
//       </div>
//       <div className="col-md-6">
//         {currentTutorial ? (
//           <div>
//             <h4>Tutorial</h4>
//             <div>
//               <label>
//                 <strong>Title:</strong>
//               </label>{" "}
//               {currentTutorial.title}
//             </div>
//             <div>
//               <label>
//                 <strong>Description:</strong>
//               </label>{" "}
//               {currentTutorial.description}
//             </div>
//             <div>
//               <label>
//                 <strong>Status:</strong>
//               </label>{" "}
//               {currentTutorial.published ? "Published" : "Pending"}
//             </div>

//             <Link
//               to={"/tutorials/" + currentTutorial.id}
//               className="badge badge-warning"
//             >
//               Edit
//             </Link>
//           </div>
//         ) : (
//           <div>
//             <br />
//             <p>Please click on a Tutorial...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


import { Steps, Button, Row, Form, Input, Col } from 'antd';
const { Step } = Steps;
const { Item } = Form;

const steps = [
  {
    key: 0,
    title: 'Payment Voucher',
  },
  {
    key: 2,
    title: 'Certificating and Approving',
  }
]


const TutorialsList = () => {
  const [current, setCurrent] = React.useState(0);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  const handleChange = e => e.target.value && setError(false);

  return (<>
    <Row>
      <Col flex="auto">
        

      </Col>
      <Col flex="150px">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ margin: '4px', width: '128px' }}
        >
          Print
        </Button>
      </Col>
    </Row>
    <Steps current={current} type="navigation" step>
      {steps.map((item) => (
        <Step key={item.key} title={item.title} />
      ))}
    </Steps>
    <div style={{ margin: "100px 10px" }}>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        {current === 0 && (
          <>
            <Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!"
                }
              ]}
            >
              <Input placeholder="First Name" onChange={handleChange} />
            </Item>
          </>
        )}

        {current === 1 && (
          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

        )}
      </Form>
    </div>
    <Row className="steps-action" style={{ float: "" }} justify="center">
      {current < steps.length - 1 && (
        <Button style={{ margin: '4px', width: '128px' }} onClick={() => next()} size='large'>
          Next
        </Button>
      )}
      {current !== steps.length - 1 && (
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ margin: '4px', width: '128px' }}
        >
          Save
        </Button>
      )}
      {current > 0 && (
        <Button style={{ margin: '4px', width: '128px' }} onClick={() => prev()} size='large'>
          Previous
        </Button>
      )}
    </Row>


  </>);
}


export default TutorialsList;