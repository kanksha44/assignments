import styles from "./Scrollbar.module.css";
import React from "react";

const Scrollbar = () => {
  let user = [
    {
      Image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=1920&q=75",
      Name: "Pritesh Kumar",
      Education: "IIT Delhi",
      Designation: "CTO",
      Company: "FunctionUp",
      Exp: "9 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=1920&q=75",
      Name: "Anubhav Singh",
      Education: "IIT Kanpur",
      Designation: "Co-founder",
      Company: "Dubdub.ai",
      Exp: "7 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906235709x512347696206974850%2FMentor-4.jpeg&w=1920&q=75",
      Name: "Aviral Sharma",
      Education: "IIT Delhi",
      Designation: "Data Scientist Manager",
      Company: "Optum",
      Exp: "7 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906303309x809592985984049700%2F1517597437249.jpeg&w=1920&q=75",
      Name: "Rahul Garg",
      Education: "IIT Kanpur",
      Designation: "Co-founder",
      Company: "Dubdub.ai",
      Exp: "7 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=1920&q=75",
      Name: "Uddhav Bamba",
      Education: "IIT Dhanbad",
      Designation: "Applied Scientist",
      Company: "Amazon",
      Exp: "3 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1920&q=75",
      Name: "Anchal Jaiswal",
      Education: "IIT Kanpur",
      Designation: "Senior Data Scientist",
      Company: "Tredence",
      Exp: "7 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1920&q=75",
      Name: "Rahul Sankhwar",
      Education: "IIT Kanpur",
      Designation: "Senior Data Scientist",
      Company: "Sharechat",
      Exp: "6 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fgaurav.72b71c73fd8e8ddd0a5e0ec77acdec55.jpeg&w=1920&q=75",
      Name: "Gaurav Agarwal",
      Education: "IIT Delhi",
      Designation: "Senior Engineer",
      Company: "Uber California",
      Exp: "9 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fmohak.ce40166641bc8640b263d6cbfdac27af.jpeg&w=1920&q=75",
      Name: "Mohak Sahu",
      Education: "IIT Bombay",
      Designation: "CTO",
      Company: "Languify",
      Exp: "3 Yrs Exp",
    },
    {
      Image:
        "https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fdivij.e38501ee35233aae10ca4da99b3662f9.jpeg&w=1920&q=75",
      Name: "Divij Bajaj",
      Education: "IIT Delhi",
      Designation: "Data Scientist",
      Company: "Microsoft",
      Exp: "5 Yrs Exp",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {user.map((item) => (
        <div className={styles.card}>
          <div className={styles.div}>
            <img src={item.Image} alt="user" />
            <h5>
              {item.Name}, {item.Education}
            </h5>
            <p>
              <span>{item.Designation}</span> @ {item.Company}
            </p>
            <p>{item.Exp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scrollbar;
