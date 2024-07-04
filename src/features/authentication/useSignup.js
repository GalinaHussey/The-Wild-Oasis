import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user),
        toast.success(
          "Account succesfully created! Please verify new account from user's email address "
        );
    },
  });
  return { signup, isPending };
}
