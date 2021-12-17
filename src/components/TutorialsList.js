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


import { Steps, Button, Row, Form, Input, Col, Typography, DatePicker, Divider, InputNumber, Table, message, notification } from 'antd';
import TextArea from "antd/lib/input/TextArea";
const { Step } = Steps;
const { Item } = Form;
const { Title, Text } = Typography;

const columns = [
  {
    title: 'Account Number',
    dataIndex: 'accountNumber',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
];

const data = [
  {
    accountNumber: '123456789',
    description: 'Account 1',
    amount: "3000.00",
  },
  {
    accountNumber: '26584946655',
    description: 'Account 2',
    amount: "1000.00",
  },
  {
    accountNumber: '98432566232',
    description: 'Account 3',
    amount: "1000.00",
  },
];

const accountDetails = {
  tax: "12522.00",
  total: "12000.00",
}



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

function errorNotification(form) {
  let isValied = form.isFieldsValidating();
  if (!isValied) {
    notification.open({
      message: 'Missing Required Fields',
      description: 'Please fill in all the required fields before proceeding.',
      type: 'error',
      style: {
        backgroundColor: '#ffe8e8',
        color: '#000000',
      }
    });
  }else{
    console.log("Form is valid");
  }
}



const TutorialsList = () => {
  const [current, setCurrent] = React.useState(0);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const next = () => {
    form
      .validateFields()
      .then(() => {
        // Here make api call of something else
        setCurrent(current + 1);
      })
      .catch((err) => {
        errorNotification(form);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  const handleChange = e => e.target.value && setError(false);

  const save = () => {
    form
      .validateFields()
      .then(() => {
        // Here make api call of something else
        message.success('Processing complete!')
      })
      .catch((err) => errorNotification(form));
  };



  return (<>
    <Steps current={current} type="navigation" step>
      {steps.map((item) => (
        <Step key={item.key} title={item.title} />
      ))}
    </Steps>
    <div style={{ margin: "10px 10px" }}>
      <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
        {current === 0 && (
          <>
            <Row style={{ marginBottom: '24px' }}>
              <Col flex="auto">
                <Title level={4} style={{ marginBottom: '0' }} >Sri Lanka Tourism Development Authority</Title>
                <Title level={5} style={{ marginTop: '0' }}>System Generated Payment Voucher</Title>
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

            <Row justify="space-between">
              <Col span={6}>
                <Item
                  label="Project Id"
                  labelAlign="top"
                  name="projectId"
                  colon={true}
                  rules={[
                    {
                      required: true,
                      message: "Please input your project id!"
                    }
                  ]}
                >
                  <Input placeholder="Project Id" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Project Name"
                  labelAlign="top"
                  name="projectName"
                  colon={true}
                  rules={[
                    {
                      required: true,
                      message: "Please input your project name!"
                    }
                  ]}
                >
                  <Input placeholder="Project Name" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Date"
                  labelAlign="top"
                  name="date"
                  size="large"
                  colon={true}
                  rules={[
                    {
                      required: true,
                      message: "Please input your current date!"
                    }
                  ]}
                >
                  <DatePicker placeholder="Current Date" onChange={onChange} style={{ width: '100%' }} size="large" />
                  {/* TODO: put default value */}
                </Item>

              </Col>
            </Row>

            <Row justify="space-between">
              <Col span={6}>
                <Item
                  label="Recerved From"
                  labelAlign="top"
                  name="receivedFrom"
                  colon={true}
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!"
                    }
                  ]}
                >
                  <Input placeholder="Investor Name" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Recerved To"
                  labelAlign="top"
                  name="recervedTo"
                  colon={true}
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!"
                    }
                  ]}
                >
                  <Input placeholder="MDA Name" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}></Col>

            </Row>
            <Row>
              <Table
                style={{ margin: '0 0 24px 0', width: '100%' }}
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                summary={pageData => {
                  let totalTax = accountDetails.tax;
                  let total = accountDetails.total;



                  return (
                    <>
                      <Table.Summary.Row>
                        <Table.Summary.Cell colSpan={2} align="center"><Text type="warning" strong="900" size="large">Tax</Text></Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text strong="900" type="warning" size="large">{totalTax}</Text>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                      <Table.Summary.Row >
                        <Table.Summary.Cell colSpan={2} align="center"><Text strong="900" type="success" size="large">Total</Text></Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text type="success" strong="900" size="large" >{total}</Text>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                    </>
                  );
                }}
              />
            </Row>

            {/* TODO: add table */}

            <Row justify="space-between">
              <Col span={6}>
                <Item
                  label="Description"
                  labelAlign="top"
                  name="description"
                  colon={true}>
                  <TextArea placeholder="Description" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Sum of Rupees"
                  labelAlign="top"
                  name="sumOfRupees"
                  colon={true}>
                  <InputNumber
                    defaultValue={0.00}
                    addonBefore="Rs"
                    style={{ width: '100%' }}
                    size="large"
                    placeholder="Sub of Rupees"
                  />
                </Item>
              </Col>
              <Col span={6}>
              </Col>


            </Row>

            <Row justify="space-between">
              <Col span={6}>
                <Item
                  label="Prepared By"
                  labelAlign="top"
                  name="preparedBy"
                  colon={true}
                >
                  <Input placeholder="Prepared by" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Recommonded By"
                  labelAlign="top"
                  name="recommondedBy"
                  colon={true}
                >
                  <Input placeholder="Recommonded By" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Checked by"
                  labelAlign="top"
                  name="checkedBy"
                  size="large"
                  colon={true}

                >
                  <Input placeholder="Checked By" onChange={handleChange} size="large" />
                </Item>

              </Col>
            </Row>

            <Row justify="space-between">
              <Col span={6}>
                <Item
                  label="Approved by"
                  labelAlign="top"
                  name="approvedBy"
                  size="large"
                  colon={true}

                >
                  <Input placeholder="Approved By" onChange={handleChange} size="large" />
                </Item>

              </Col>
              <Col span={6}>
                <Item
                  label="E-Signatureof Approver"
                  labelAlign="top"
                  name="esignature"
                  colon={true}
                >
                  <TextArea placeholder="E-Signature of Approver" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
              </Col>
            </Row>

            <Divider orientation="left">Finance Use Only.</Divider>

            <Row justify="space-between">
              <Col span={6}>
                <Item
                  label="Checked"
                  labelAlign="top"
                  name="checked"
                  colon={true}
                >
                  <Input placeholder="Checked" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Certified"
                  labelAlign="top"
                  name="certified"
                  colon={true}
                >
                  <Input placeholder="Certified" onChange={handleChange} size="large" />
                </Item>
              </Col>
              <Col span={6}>
                <Item
                  label="Approved"
                  labelAlign="top"
                  name="approved"
                  colon={true}

                >
                  <Input placeholder="Approved" onChange={handleChange} size="large" />
                </Item>

              </Col>
            </Row>

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
          onClick={() => save()}
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


