import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  // Creating cabin logic
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createAndUpdateCabin,
    onSuccess: () => {
      toast.success("New cabin succesfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { createCabin, isCreating };
}
