import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: updateCabin, isPending: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) =>
      createAndUpdateCabin(newCabinData, id),

    onSuccess: () => {
      toast.success("New cabin succesfully updated");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateCabin, isUpdating };
}
