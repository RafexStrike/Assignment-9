import React from "react";
import { use } from "react";
import AuthContext from "../../Contexts/Auth/AuthContext";
import DynamicPageTitle from "../../Components/DynamicPageTitle/DynamicPageTitle";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { toast } from "react-hot-toast";


const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const defaultProfilePic = "https://i.ibb.co/1dSwFqY/default-avatar.png";
  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    try {
        await updateUserProfile(name, photo);
       
        window.location.reload();
        toast.success("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile. Please try again.");
      }
  };

  return (
    <div className="mt-8 mb-16">
      <DynamicPageTitle title="Profile" />
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#F3EDDC] rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-primary ring-offset-2">
              <img
                src={user?.photoURL || defaultProfilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {user?.displayName || "User"}
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaEnvelope className="text-primary" />
                <span>{user?.email}</span>
              </div>
            </div>

            {/* Account Details */}
            <div className="w-full max-w-md">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FaUser className="text-primary" />
                  Account Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Account Created</p>
                    <p className="text-gray-700">
                      {user?.metadata?.creationTime || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Sign In</p>
                    <p className="text-gray-700">
                      {user?.metadata?.lastSignInTime || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Verified</p>
                    <p className="text-gray-700">
                      {user?.emailVerified ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
                {/* update profile */}

                <div className="w-full max-w-md">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <GrUpdate className="text-primary" />
                    Update Your Profile
                  </h2>
                  <form onSubmit={handleUpdateProfile}>
                    <label htmlFor="name">Name</label> <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                    />
                    <br />
                    <label htmlFor="photo">Photo</label> <br />
                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      placeholder="Enter your photo url"
                    />
                    <br />
                    <button  className="btn btn-primary" type="submit">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
