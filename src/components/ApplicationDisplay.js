import { Card, CardBody, CardHeader } from "reactstrap";

const ApplicationDisplay = ({ application }) => {
  return (
    <Card>
      <CardHeader>Company: {application.inputCompany}</CardHeader>
      <CardBody>
        <div className="application-container">
          <div>Position: {application.inputPosition}</div>
          <div>
            Link:{" "}
            <a
              href={`//${application.inputApplication}`}
              target="_blank"
              rel="noreferrer"
            >
              {application.inputApplication}
            </a>
          </div>
          <div>Address: {application.inputAddress}</div>
          <div>Contact: {application.inputContact}</div>
          <div>Phone: {application.inputPhone}</div>
          <div>Salary: {application.inputSalary}</div>
          <div>Date Applied: {application.inputApplied}</div>
          <div>Response: {application.inputResponse}</div>
          <div>Interview Date: {application.inputDate}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ApplicationDisplay;
