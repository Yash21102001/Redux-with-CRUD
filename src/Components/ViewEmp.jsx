import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmp } from '../Redux/action';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const ViewEmp = () => {
  const empData = useSelector((store) => store.employee.employee);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allEmp, setAllEmp] = useState(empData);

  const onDelete = (e, id) => {
    e.preventDefault();
    setAllEmp(allEmp.filter((emp) => emp.empid !== id));
    dispatch(deleteEmp(id));
    toast.warning("Employee Data Deleted", {
      position: "top-center"
    });
  };

  const onEdit = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h2 className="mb-0 text-center">Employee List</h2>
            </Card.Header>
            <Card.Body>
              {allEmp.length === 0 ? (
                <div className="text-center py-4">
                  <h4>No employees found</h4>
                  <Button 
                    variant="primary" 
                    onClick={() => navigate('/add')}
                    className="mt-3"
                  >
                    Add New Employee
                  </Button>
                </div>
              ) : (
                <Table striped bordered hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Hobbies</th>
                      <th>Department</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allEmp.map((emp) => (
                      <tr key={emp.empid}>
                        <td>{emp.empid}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>
                          <Badge 
                            bg={emp.gender === 'Male' ? 'primary' : 'success'}
                          >
                            {emp.gender}
                          </Badge>
                        </td>
                        <td>
                          {emp.hoby && emp.hoby.map((hobby, index) => (
                            <Badge key={index} bg="secondary" className="me-1">
                              {hobby}
                            </Badge>
                          ))}
                        </td>
                        <td>
                          <Badge bg="info">
                            {emp.department}
                          </Badge>
                        </td>
                        <td>
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            onClick={() => onEdit(emp.empid)}
                            className="me-2"
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="outline-danger" 
                            size="sm" 
                            onClick={(e) => onDelete(e, emp.empid)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
            <Card.Footer className="text-center">
              <Button 
                type='submit'
                variant="primary" 
                onClick={() => navigate('/')}
              >
                Add New Employee
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ViewEmp;