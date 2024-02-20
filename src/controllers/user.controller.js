import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Gyatt",
  });

  const { fullName, email, username, password } = req.body;
  console.log("Name: ", fullName);

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "No field can be empty");
  }
});

export { registerUser };
