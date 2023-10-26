import { useEffect, useState } from "react";
import data from "../lib/data";
import { Div, P, Button, Img } from "./Elements";
import image from "../assets/images/account.svg";
import { H2, H3 } from "./HeadingTags";

function User() {
  const [users, setUsers] = useState([]);
  let Hr;
  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <div>
      <Div>
        <Div>
          <Img src={image} alt="account" />
          <Div>
            <H2>PhotoSnap</H2>
            <H3 bg="hsl(180, 29%, 50%)">New!</H3>
            <H3 bg="black">FEATURED</H3>
          </Div>
          <Div>
            <H2 marginLeft="30px">Senior Frontend Developer</H2>

            <Div className="p-wrapper">
              <P>1d ago</P>
              <span>.</span>
              <P>Full time</P>
              <span>.</span>
              <P>USA only</P>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div>
        <Button type="button">Frontend</Button>
        <Button type="button">Senior</Button>
        <Button type="button">HTML</Button>
        <Button type="button">CSS</Button>
        <Button type="button">Javascript</Button>
        <Button type="button">Frontend</Button>
      </Div>

      {/* {users.map((user) => (
          <Div>
            <Img src={user.logo} alt={user.position} />
          <Div>
            <h3></h3>
          </Div>
          </Div>
        ))} */}
    </div>
  );
}

export default User;
