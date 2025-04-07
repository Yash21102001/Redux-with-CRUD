import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addEmp } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const AddEmp = () => {
    const dispatch = useDispatch();
    const empData = useSelector((store) => store.employee.employee);
    const [allEmp, setAllEmp] = useState(empData);
    const [newEmp, setNewEmp] = useState({});
    const [department, setDepartment] = useState(["IT", "Accounts","HR"]);
    const [hobby, setHobby] = useState([]);
    const navigate = useNavigate();

    const onFormChange = (e) => {
        if (e.target.name === "hoby") {
            let hoby = [...hobby];
            if (e.target.checked) {
                hoby.push(e.target.value);
                setHobby(hoby);
            } else {
                hoby = hoby.filter((h) => h !== e.target.value);
                setHobby(hoby);
            }
            setNewEmp({ ...newEmp, [e.target.name]: [...hoby] });
            return;
        }
        setNewEmp({ ...newEmp, [e.target.name]: e.target.value });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        let newId = allEmp.length > 0 ? Math.max(...allEmp.map((emp) => emp.empid)) + 1 : 1;
        if (!newEmp.name || !newEmp.email) {
            toast.error("Please fill all required fields", {
                position: "top-center"
            });
            return;
        }
        let emp = { ...newEmp, empid: newId };
        dispatch(addEmp(emp));
        setAllEmp([...allEmp, newEmp]);
        setNewEmp({});
        navigate("/View");
        setTimeout(() => {
            toast.success("Employee Data Added Successfully", {
                position: "top-center"
            });

        }, 1000);
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-primary text-white">
                            <h2 className="mb-0 text-center">Add New Employee</h2>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onFormSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        onChange={onFormChange}
                                        placeholder="Enter full name"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        onChange={onFormChange}
                                        placeholder="Enter email"
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Select
                                        name="department"
                                        onChange={onFormChange}
                                        className="form-select"
                                    >
                                        <option value="">--- Select Department ---</option>
                                        {department.map((dept, index) => (
                                            <option key={index} value={dept}>{dept}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Hobbies</Form.Label>
                                    <div className="d-flex flex-wrap gap-3">
                                        {['Coding', 'Sports'].map((hobbyItem) => (
                                            <Form.Check
                                                key={hobbyItem}
                                                type="checkbox"
                                                id={`hobby-${hobbyItem}`}
                                                label={hobbyItem}
                                                value={hobbyItem}
                                                name="hoby"
                                                checked={hobby.includes(hobbyItem)}
                                                onChange={onFormChange}
                                                className="px-3 py-2 border rounded"
                                            />
                                        ))}
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Gender</Form.Label>
                                    <div className="d-flex gap-4">
                                        {['Male', 'Female'].map((gender) => (
                                            <Form.Check
                                                key={gender}
                                                type="radio"
                                                id={`gender-${gender}`}
                                                label={gender}
                                                value={gender}
                                                name="gender"
                                                checked={newEmp.gender === gender}
                                                onChange={onFormChange}
                                                inline
                                            />
                                        ))}
                                    </div>
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size="lg"
                                    >
                                        Add Employee
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default AddEmp;