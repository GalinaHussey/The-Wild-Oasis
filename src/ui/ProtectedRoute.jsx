import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the auth user
  const { isAuthenticated, isPending } = useUser();

  // 2. If there is no auth user, redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate]
  );

  //3. While loading, show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user -> render app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
