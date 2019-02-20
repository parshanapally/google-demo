import React from "react";
import { Button, ListGroup, Popover } from "react-bootstrap";

export const GuestButton = ({ signIn }) => {
  return <Button onClick={signIn} value="Sign In" />;
};

const UserMenuItems = ({ signOut }) => {
  return (
    <ListGroup>
      <ListGroup.Item onClick={signOut}>Sign Out </ListGroup.Item>
    </ListGroup>
  );
};

export const AuthenticatedUserButtons = ({ signOut }) => {
  return (
    <Popover content={<UserMenuItems signOut={signOut} />}>
      <Button icon="user" />
    </Popover>
  );
};
