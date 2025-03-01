import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const registerUser = asyncHandler(async function(req, res){
    //  get user details from frontend
    //  validation - not empty
    //  check if user already exists
    //  check for images if there local path exist
    //  upload them on cloudinary
    //  check if image uploaded on cloudinary
    //  create user object
    //  remove password and refresh token field from response
    //  check if user created
    //  return response

    const { fullname, email, password } = req.body;

    if ([fullname, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required.");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) throw new ApiError(409, "User already exists.");

    let userImageLocalPath;
    if (
        req.files &&
        Array.isArray(req.files.userImage) &&
        req.files.userImage.length > 0
    )
        userImageLocalPath = req.files.userImage[0].path;

    const uploadUserImage = await uploadOnCloudinary(userImageLocalPath);

    const user = await User.create({
        fullname,
        email,
        userImage: uploadUserImage?.url || "",
        password,
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser)
        throw new ApiError(
            500,
            "Something Went Wrong While Registering The User"
        );

    return res
        .status(201)
        .json(
            new ApiResponse(201, createdUser, "User Registered Successfully")
        );
});

export {
    registerUser
}