import React, { useEffect, useMemo, useState } from "react";
import module from "./Dashboard.module.css";
import { RiMoreFill } from "react-icons/ri";
import { BsFillLockFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncsingleuser } from "../../../store/userActions";
const Dashboard = () => {
  const [handleDrop, sethandleDrop] = useState(false);
  const { singleuser, user } = useSelector((state) => state.user);
  const { username } = useParams();
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(asyncsingleuser(username));
  }, [username]);
  const handleDropDown = () => {
    sethandleDrop(!handleDrop);
  };
console.log(singleuser);
  return (
    <>
      <div className={`${module.wrap}`}>
        <div className={`${module.left}`}>
          <div className={`${module.top}`}>
            <h1>{singleuser?.username}</h1>
            {singleuser?._id === user?._id && (
              <>
                <h1
                  className={`${module.drop_trigger}`}
                  onClick={handleDropDown}
                >
                  <RiMoreFill />
                </h1>
                {handleDrop && (
                  <div className={`${module.drop_down}`}>
                    <h6>copy link to profile</h6>
                    <h6>design profile</h6>
                  </div>
                )}
              </>
            )}
          </div>
          <div className={`${module.small_nav}`}>
            <div className={`${module.row}`}>
              <h4>Home</h4>
              <h4>About</h4>
            </div>
          </div>
          <div className={`${module.lists_card}`}></div>
        </div>
        <div className={`${module.right}`}>
          <div className={`${module.avatar}`}>
            <img
              // src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
              src={`${singleuser?.avtar?.url}`}
              alt=""
            />
          </div>
          <h4>{singleuser?.username}</h4>
          {singleuser?._id === user?._id ? (
            <h5>edit profile</h5>
          ) : (
            <h5>Follow</h5>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
{
  /* <div className={`${module.title}`}>
              <h4>Reading List</h4>
              <span>
                5 stories <BsFillLockFill fill="grey" />
              </span>
            </div>
            <div className={`${module.prvImages}`}>
              <img
                src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                alt=""
              />
              <img
                className={`${module.smImg}`}
                src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80z"
                alt=""
              />
              <img
                className={`${module.smImg}`}
                src="https://images.unsplash.com/photo-1676803238980-c5b5309a3973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80z"
                alt=""
              />
            </div> */
}
