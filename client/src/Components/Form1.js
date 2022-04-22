import React, { useState } from "react";
import "./Form.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useDispatch } from "react-redux";
import { createForm } from "../API/api";

function App() {
  const [Form, setForm] = useState({
    fullname: "",
    phonenum: "",
    email: "",
    university: "",
    aboutyou: "",
    skills: "",
    intersted: [],
    others: "",
    resumeName: "",
  });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
      alert("SUCCESSFULLY SUBMITTED")
      
      console.log(Form,"ssssssss")
      const formData = new FormData();
      console.log(Form.resume.name)
    formData.append("resume", Form.resume,Form.resume.name);
    formData.append("resumeName",Form.resume.name)
    formData.append("fullname", Form.fullname);
    formData.append("phonenum", Form.phonenum);
    formData.append("email", Form.email);

    formData.append("university", Form.university);
    formData.append("aboutyou", Form.aboutyou);
    formData.append("skills", Form.skills);
    formData.append("intersted", Form.intersted);
    formData.append("others", Form.others);
    fetch("http://localhost:5000/form", {
        method: "POST",
        body: formData,
      });
  };
  const options = [
    "Software Developer",

    "Front-end Developer",
    "Back-end Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Business Analyst",
    "Digital Marketing",
    "Marketing and sales",
  ];
  const [temp1, setTemp1] = useState(true);

  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        <h5 className="headings">IEZAL Internship And Job Program</h5>
        {/* <p className="header">IEZAL is an educational platform which mission is to provide the best quality education in the world.</p> */}
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 750, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h2">
              {/* Contact Us */}
              {/* Fill up the below details */}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
             IEZAL is an educational platform which mission is to provide the best quality education in the world.
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter Full name"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    requiredvalue={Form.fullname}
                    onChange={(e) =>
                      setForm({ ...Form, fullname: e.target.value })
                    }
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter Email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    value={Form.email}
                    onChange={(e) =>
                      setForm({ ...Form, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="University"
                    placeholder="Enter Univerity"
                    label="University"
                    variant="outlined"
                    fullWidth
                    required
                    value={Form.university}
                    onChange={(e) =>
                      setForm({ ...Form, university: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    value={Form.phonenum}
                    onChange={(e) =>
                      setForm({ ...Form, phonenum: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="what skills do you have?"
                    multiline
                    placeholder="what skills do you have?"
                    variant="outlined"
                    fullWidth
                    required
                    value={Form.skills}
                    onChange={(e) =>
                      setForm({ ...Form, skills: e.target.value })
                    }
                  />
                </Grid>
                

                <Grid item xs={12}>
                  <TextField
                    label="About you?"
                    multiline
                    rows={1}
                    placeholder="About you?"
                    variant="outlined"
                    fullWidth
                    required
                    value={Form.aboutyou}
                    onChange={(e) =>
                      setForm({ ...Form, aboutyou: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Which role your intersted ?"
                    multiline
                    rows={1}
                    // placeholder="Which role your intersted?"
                    variant="outlined"
                    fullWidth
                    required
                    value={Form.intersted}
                    onChange={(e) =>
                      setForm({ ...Form, intersted: e.target.value })
                    }disabled
                    
                  />
                  <br />
                  <br />
                  {options.map((o, k) => (
                  <>
                    <div className="optionstyle">
                      {Form.intersted[k] === o ? (
                        <>
                          <CheckBoxOutlinedIcon />
                        </>
                      ) : (
                        <>
                          <CheckBoxOutlineBlankOutlinedIcon
                            onClick={() => {
                              let temp = Form;

                              temp.intersted.push(options[k]);

                              setForm(temp);
                              setTemp1(!temp1);
                            }}
                          />
                        </>
                      )}

                      <option>{o}</option>
                    </div>
                  </>
                ))}
                <br />
                
                </Grid>
                <br />
                <Grid item xs={12}>
                  <TextField
                    type="file"
                    // placeholder="Enter Univerity"
                    // label="Resume"
                    variant="outlined"
                    fullWidth
                    required
                    // value={Form.university}
                    onChange={(e) =>
                      setForm({ ...Form, resume: e.target.files[0] })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Others"
                    multiline
                    rows={1}
                    placeholder="Others"
                    variant="outlined"
                    fullWidth
                    required
                    value={Form.others}
                    onChange={(e) =>
                      setForm({ ...Form, others: e.target.value })
                    }
                  />
                </Grid>
                <br />
                <br />
                <div className="button">
                  {/* <Grid item xs={12}> */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                  {/* <Button
                    className="resetrs"
                    onClick={() => window.location.reload(false)}
                  >
                    Clear form
                  </Button>
                  {/* </Grid> */}
                </div> 
                
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      
    </div>
  );
}

export default App;
