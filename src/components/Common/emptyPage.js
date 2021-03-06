import React from "react";
import { useHistory } from "react-router";
import { Result, Button } from "antd";

const EmptyPage = () => {
  const history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.goBack()}>
          Back Home
        </Button>
      }
    />
  );
};

export default EmptyPage;
